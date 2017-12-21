var AppDispatcher = require('../dispatcher/AppDispatcher')
  , CountupConstants = require('../constants/CountupConstants');

module.exports = {
    countup: function () {
        AppDispatcher.dispatch({
            actionType: CountupConstants.COUNTUP
        });
    },
    reset: function () {
        AppDispatcher.dispatch({
            actionType: CountupConstants.RESET
        });
    }
};
