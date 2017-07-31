/**
 * Created by feng on 2017/7/31.
 */

//7.31号开始的个人花费记录
function PersonalFiance() {
    var my = this;
    my.payLog = {};
    my.getLog = {};
    my.card = 4071.61;
    my.cash = 1700;
    my.yct = 110;
};
PersonalFiance.prototype = {
    constructor : PersonalFiance,
    cost : function (type, num, date, purpose) {

        if (type == 'card') {
            this.card -= num;
        } else if (type == 'cash') {
            this.cash -= num;
        } else if (type == 'yct') {
            this.yct -= num;
        } else {
            throw new Error('this is not your pay');
        }
        var logObject = {};
        var costDate = new Date(date);
        var costDay = costDate.getFullYear() + ' ' + (costDate.getMonth() + 1) + ' ' + costDate.getDate();
        logObject.type = type;
        logObject.cost = num;
        logObject.costDay =costDay;
        logObject.costPurpose = purpose;

        if (this.payLog[costDay]) {
            this.payLog[costDay].push(logObject);
        } else {
            this.payLog[costDay] = [];
            this.payLog[costDay].push(logObject);
        };
        return this;
    },
    get : function (type, num, date, source) {

        if (type == 'card') {
            this.card += num;
        } else if (type == 'cash') {
            this.cash += num;
        } else {
            throw new Error('this is not your get');
        };
        var logObject = {};
        var getDate = new Date(date);
        var getDay = getDate.getFullYear() + ' ' + (getDate.getMonth() + 1) + ' ' + getDate.getDate();
        logObject.type = type;
        logObject.get = num;
        logObject.getDay =getDate;
        logObject.getSource = source;

        if (this.getLog[getDay]) {
            this.payLog[getDay].push(logObject);
        } else {
            this.payLog[getDay] =[];
            this.payLog[getDay].push(logObject);
        };
        return this;
    },
    check : function (type, date) {

    }
};