const Rx = require('rxjs');

var {CHANGE_LOCALE} = require('../MapStore2/web/client/actions/locale');

const saveLangageEpic = (action$) =>
    action$.ofType(CHANGE_LOCALE).switchMap((action) => {
        action.locale
        localStorage.setItem('brugis.persist.locale', action.locale);
        return Rx.Observable.empty()
    });

module.exports = {
    saveLangageEpic
};
