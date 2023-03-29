var PayDateCalculator = /** @class */ (function () {
    function PayDateCalculator() {
    }
    PayDateCalculator.prototype.calculateDueDate = function (fundDay, holidays, paySpan, payDay, hasDirectDeposit) {
        // Calculate the minimum due date based on the pay frequency
        var dueDate = new Date(fundDay);
        if (paySpan === "weekly")
            dueDate.setDate(fundDay.getDate() + 7);
        else if (paySpan === "bi-weekly")
            dueDate.setDate(fundDay.getDate() + 14);
        else if (paySpan === "monthly")
            dueDate.setMonth(fundDay.getMonth() + 1);
        // Check if the due date falls on a holiday or weekend
        while (holidays.some(function (holiday) { return holiday.getTime() === dueDate.getTime(); }) ||
            dueDate.getDay() === 0 ||
            dueDate.getDay() === 6) {
            dueDate.setDate(dueDate.getDate() + 1);
        }
        // Check if the due date is at least 10 days in the future from the fund day
        var minDueDate = new Date(fundDay);
        minDueDate.setDate(fundDay.getDate() + 10);
        if (dueDate < minDueDate)
            dueDate.setDate(minDueDate.getDate());
        // return dueDate, but add on a day to dueDate if hasDirectDeposit is false
        return hasDirectDeposit
            ? dueDate
            : new Date(dueDate.setDate(dueDate.getDate() + 1));
        //return dueDate;
    };
    return PayDateCalculator;
}());
// Create a weekly instance of the PayDateCalculator class
var calculatorWeekly = new PayDateCalculator();
// Define some test data for a weekly pay span
var fundDayWeekly = new Date(2023, 2, 27); // March 27, 2023
var holidaysWeekly = [new Date(2023, 3, 1)]; // April 1, 2023 is a holiday
var paySpanWeekly = "weekly";
var payDayWeekly = new Date(2023, 2, 30); // March 30, 2023
var hasDirectDepositWeekly = true;
// Calculate the due date using the PayDateCalculator instance for a weekly pay span
var dueDateWeekly = calculatorWeekly.calculateDueDate(fundDayWeekly, holidaysWeekly, paySpanWeekly, payDayWeekly, hasDirectDepositWeekly);
console.log("Weekly Pay Date: " + dueDateWeekly); // Weekly Pay Date: Thu Apr 06 2023 00:00:00 GMT-0400 (Eastern Daylight Time)
// Create a bi-weekly instance of the PayDateCalculator class
var calculatorBiWeekly = new PayDateCalculator();
// Define some test data
var fundDayBiWeekly = new Date(2023, 2, 27); // March 27, 2023
var holidaysBiWeekly = [new Date(2023, 3, 1)]; // April 1, 2023 is a holiday
var paySpanBiWeekly = "bi-weekly";
var payDayBiWeekly = new Date(2023, 2, 31); // March 31, 2023
var hasDirectDepositBiWeekly = true;
// Calculate the due date using the PayDateCalculator instance
var dueDateBiWeekly = calculatorBiWeekly.calculateDueDate(fundDayBiWeekly, holidaysBiWeekly, paySpanBiWeekly, payDayBiWeekly, hasDirectDepositBiWeekly);
console.log("BiWeekly Pay Date: " + dueDateBiWeekly); // BiWeekly Pay Date: Mon Apr 10 2023 00:00:00 GMT-0400 (Eastern Daylight Time)
// Create a weekly instance of the PayDateCalculator class
var calculatorMonthly = new PayDateCalculator();
// Define some test data for a monthly pay span
var fundDayMonthly = new Date(2023, 2, 1); // March 1, 2023
var holidaysMonthly = [new Date(2023, 3, 15)]; // April 15, 2023 is a holiday
var paySpanMonthly = "monthly";
var payDayMonthly = new Date(2023, 2, 28); // March 28, 2023
var hasDirectDepositMonthly = true;
// Calculate the due date using the PayDateCalculator instance for a monthly pay span
var dueDateMonthly = calculatorWeekly.calculateDueDate(fundDayMonthly, holidaysMonthly, paySpanMonthly, payDayMonthly, hasDirectDepositMonthly);
console.log("Monthly Pay Date: " + dueDateMonthly); // Monthly Pay Date: Mon Apr 03 2023 00:00:00 GMT-0400 (Eastern Daylight Time)
