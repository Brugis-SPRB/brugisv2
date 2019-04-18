import React from 'react';
import PropTypes from 'prop-types';
import Animated from 'animated/lib/targets/react-dom';

export default class extends React.Component {
    static propTypes = {
        pages: PropTypes.number.isRequired,
        effect: PropTypes.func,
        scrolling: PropTypes.bool,
        horizontal: PropTypes.bool,
        style: PropTypes.object,
        innerStyle: PropTypes.object,
        className: PropTypes.object
    }
    static childContextTypes = { parallax: PropTypes.object }
    static defaultProps = {
        effect: (animation, toValue) => Animated.spring(animation, { toValue }),
        scrolling: true,
        horizontal: false
    }

    constructor(props) {
        super(props);
        this.state = { ready: false };
        this.layers = [];
        this.space = 0;
        this.current = 0;
        this.offset = 0;
        this.busy = false;
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateRaf, false);
        this.update();
        this.setState({ ready: true });
    }

    componentDidUpdate() {
        this.update();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateRaf, false);
    }

    onScroll = event => {
        const { horizontal } = this.props;
        if (!this.busy) {
            this.busy = true;
            this.scrollerRaf();
            this.current = event.target[horizontal ? 'scrollLeft' : 'scrollTop'];
        }
    }

    getChildContext() {
        return { parallax: this };
    }

    render() {
        const {style, innerStyle, pages, className, scrolling, children, horizontal } = this.props;
        const overflow = scrolling ? 'scroll' : 'hidden';

        return (
            <div
                ref="container"
                onScroll={this.onScroll}
                onWheel={scrolling ? this.scrollStop : null}
                onTouchStart={scrolling ? this.scrollStop : null}
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    overflow,
                    overflowY: horizontal ? 'hidden' : overflow,
                    overflowX: horizontal ? overflow : 'hidden',
                    WebkitOverflowScrolling: 'touch',
                    WebkitTransform: 'translate(0,0)',
                    MsTransform: 'translate(0,0)',
                    transform: 'translate3d(0,0,0)',
                    ...style
                }}
                className={className}>
                {this.state.ready && (
                    <div
                        ref="content"
                        style={{
                            position: 'absolute',
                            [horizontal ? 'height' : 'width']: '100%',
                            WebkitTransform: 'translate(0,0)',
                            MsTransform: 'translate(0,0)',
                            transform: 'translate3d(0,0,0)',
                            overflow: 'hidden',
                            [horizontal ? 'width' : 'height']: this.space * pages,
                            ...innerStyle
                        }}>
                        {children}
                    </div>
                )}
            </div>
        );
    }

    scrollTo(offset) {
        const { horizontal, effect } = this.props;
        this.scrollStop();
        this.offset = offset;
        const target = this.refs.container;
        this.animatedScroll = new Animated.Value(target[horizontal ? 'scrollLeft' : 'scrollTop']);
        this.animatedScroll.addListener(({ value }) => (target[horizontal ? 'scrollLeft' : 'scrollTop'] = value));
        effect(this.animatedScroll, offset * this.space).start();
    }

    scrollStop = () => this.animatedScroll && this.animatedScroll.stopAnimation()

    updateRaf = () => {
        requestAnimationFrame(this.update);
        // Some browsers don't fire on maximize
        setTimeout(this.update, 150);
    }

    update = () => {
        const { scrolling, horizontal } = this.props;
        if (!this.refs.container) return;
        this.space = this.refs.container[horizontal ? 'clientWidth' : 'clientHeight'];
        if (scrolling) this.current = this.refs.container[horizontal ? 'scrollLeft' : 'scrollTop'];
        else this.refs.container[horizontal ? 'scrollLeft' : 'scrollTop'] = this.current = this.offset * this.space;
        if (this.refs.content) {
            this.refs.content.style[horizontal ? 'width' : 'height'] = `${this.space * this.props.pages}px`;
        }
        this.layers.forEach(layer => {
            layer.setHeight(this.space, true);
            layer.setPosition(this.space, this.current, true);
        });
    }

    moveItems = () => {
        this.layers.forEach(layer => layer.setPosition(this.space, this.current));
        this.busy = false;
    }

    scrollerRaf = () => requestAnimationFrame(this.moveItems)

    static Layer = class extends React.Component {
        static contextTypes = { parallax: PropTypes.object }
        static propTypes = {
            factor: PropTypes.number,
            offset: PropTypes.number,
            speed: PropTypes.number,
            effect: PropTypes.func
        }
        static defaultProps = {
            factor: 1,
            offset: 0,
            speed: 0,
            effect: (animation, toValue) => Animated.spring(animation, { toValue })
        }

        constructor(props, context) {
            super(props, context);
            const parallax = context.parallax;
            const targetScroll = Math.floor(props.offset) * parallax.space;
            const offset = parallax.space * props.offset + targetScroll * props.speed;
            const toValue = parseFloat(-(parallax.current * props.speed) + offset);
            this.animatedTranslate = new Animated.Value(toValue);
            this.animatedSpace = new Animated.Value(parallax.space * props.factor);
        }

        componentDidMount() {
            const parent = this.context.parallax;
            if (parent) {
                parent.layers = parent.layers.concat(this);
                parent.update();
            }
        }

        componentWillUnmount() {
            const parent = this.context.parallax;
            if (parent) {
                parent.layers = parent.layers.filter(layer => layer !== this);
                parent.update();
            }
        }

        setPosition(height, scrollTop, immediate = false) {
            const targetScroll = Math.floor(this.props.offset) * height;
            const offset = height * this.props.offset + targetScroll * this.props.speed;
            const toValue = parseFloat(-(scrollTop * this.props.speed) + offset);
            if (!immediate) this.context.parallax.props.effect(this.animatedTranslate, toValue).start();
            else this.animatedTranslate.setValue(toValue);
        }

        setHeight(height, immediate = false) {
            const toValue = parseFloat(height * this.props.factor);
            if (!immediate) this.context.parallax.props.effect(this.animatedSpace, toValue).start();
            else this.animatedSpace.setValue(toValue);
        }

        render() {
            const { style, children, offset, speed, factor, className, ...props } = this.props;
            const horizontal = this.context.parallax.props.horizontal;
            const translate3d = this.animatedTranslate.interpolate({
                inputRange: [0, 1],
                outputRange: horizontal ? ['0px,0,0', '1px,0,0'] : ['0,0px,0', '0,1px,0']
            });

            return (
                <Animated.div
                    {...props}
                    ref="layer"
                    className={className}
                    style={{
                        position: 'absolute',
                        backgroundSize: 'auto',
                        backgroundRepeat: 'no-repeat',
                        willChange: 'transform',
                        [horizontal ? 'height' : 'width']: '100%',
                        [horizontal ? 'width' : 'height']: this.animatedSpace,
                        WebkitTransform: [{ translate3d }],
                        MsTransform: [{ translate3d }],
                        transform: [{ translate3d }],
                        ...style
                    }}>
                    {children}
                </Animated.div>
            );
        }
    }
}
