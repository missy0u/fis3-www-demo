var $ = require('jquery');

module.exports = {
    init : function () {
        var self = this;
        self._$mod = $('#mod-two');
        return self;
    },
    setText:function (text) {
        var self = this;
        self._$mod.text(text);
        return self;
    }
};
$(function () {
    module.exports.init();
});