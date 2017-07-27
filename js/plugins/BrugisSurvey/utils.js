const SurveyUtils = {

    getOldBrugisLocale: function(locale) {
        let brugisLocale = "FR";
        if (locale.toLowerCase().search("nl") !== -1) {
            brugisLocale = "NL";
        }
        return brugisLocale;
    }
 };


module.exports = SurveyUtils;
