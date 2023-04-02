"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayDateCalculator = exports.DateHelper = void 0;
var DateHelper = /** @class */ (function () {
    function DateHelper() {
    }
    DateHelper.isWeekend = function (date) {
        var dayOfWeek = date.getDay();
        return dayOfWeek === 0 || dayOfWeek === 6;
    };
    DateHelper.isHoliday = function (date, holidays) {
        return holidays.some(function (holiday) { return holiday.getTime() === date.getTime(); });
    };
    return DateHelper;
}());
exports.DateHelper = DateHelper;
var PayDateCalculator = /** @class */ (function () {
    function PayDateCalculator() {
    }
    PayDateCalculator.prototype.getNextPayDate = function (fundDay, paySpan) {
        var dueDate = new Date(fundDay);
        if (paySpan === "weekly")
            dueDate.setDate(fundDay.getDate() + 7);
        else if (paySpan === "bi-weekly")
            dueDate.setDate(fundDay.getDate() + 14);
        else if (paySpan === "monthly")
            dueDate.setMonth(fundDay.getMonth() + 1);
        var minDueDate = new Date(fundDay);
        minDueDate.setDate(fundDay.getDate() + 10);
        return dueDate < minDueDate ? minDueDate : dueDate;
    };
    PayDateCalculator.prototype.calculateDueDate = function (fundDay, holidays, paySpan, payDay, hasDirectDeposit) {
        var dueDate = this.getNextPayDate(fundDay, paySpan);
        // Implemented before weekends and holidays check
        if (!hasDirectDeposit) {
            dueDate.setDate(dueDate.getDate() + 1);
        }
        while (DateHelper.isWeekend(dueDate)) {
            dueDate.setDate(dueDate.getDate() + 1);
        }
        //if holiday, dueDate - 1 day
        while (DateHelper.isHoliday(dueDate, holidays)) {
            dueDate.setDate(dueDate.getDate() - 1);
        }
        return dueDate;
    };
    return PayDateCalculator;
}());
exports.PayDateCalculator = PayDateCalculator;
