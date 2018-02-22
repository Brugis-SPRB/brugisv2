const Rx = require('rxjs');
const {PURGE_MAPINFO_RESULTS} = require('../../../MapStore2/web/client/actions/mapInfo');
const {changeDrawingStatus} = require('../../../MapStore2/web/client/actions/draw');

const purgeHightlight = (action$) =>
    action$.ofType(PURGE_MAPINFO_RESULTS)
      .switchMap(() => {
          return Rx.Observable.of(changeDrawingStatus("clean", null, 'BrugisInfo'));
      });
module.exports = {
    purgeHightlight
};
