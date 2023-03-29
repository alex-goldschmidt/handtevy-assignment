class PayDateCalculator {
  public calculateDueDate(
    fundDay: Date,
    holidays: Date[],
    paySpan: "weekly" | "bi-weekly" | "monthly",
    payDay: Date,
    hasDirectDeposit: boolean
  ): Date {
    // Calculate the minimum due date based on the pay frequency
    const dueDate = new Date(fundDay);
    if (paySpan === "weekly") dueDate.setDate(fundDay.getDate() + 7);
    else if (paySpan === "bi-weekly") dueDate.setDate(fundDay.getDate() + 14);
    else if (paySpan === "monthly") dueDate.setMonth(fundDay.getMonth() + 1);

    // Check if the due date falls on a holiday or weekend
    while (
      holidays.some((holiday) => holiday.getTime() === dueDate.getTime()) ||
      dueDate.getDay() === 0 ||
      dueDate.getDay() === 6
    ) {
      dueDate.setDate(dueDate.getDate() + 1);
    }

    // Check if the due date is at least 10 days in the future from the fund day
    const minDueDate = new Date(fundDay);
    minDueDate.setDate(fundDay.getDate() + 10);
    if (dueDate < minDueDate) dueDate.setDate(minDueDate.getDate());

    // return dueDate, but add on a day to dueDate if hasDirectDeposit is false
    return hasDirectDeposit
      ? dueDate
      : new Date(dueDate.setDate(dueDate.getDate() + 1));
    //return dueDate;
  }
}

// Create a weekly instance of the PayDateCalculator class
const calculatorWeekly = new PayDateCalculator();

// Define some test data for a weekly pay span
const fundDayWeekly = new Date(2023, 2, 27); // March 27, 2023
const holidaysWeekly = [new Date(2023, 3, 1)]; // April 1, 2023 is a holiday
const paySpanWeekly = "weekly";
const payDayWeekly = new Date(2023, 2, 30); // March 30, 2023
const hasDirectDepositWeekly = true;

// Calculate the due date using the PayDateCalculator instance for a weekly pay span
const dueDateWeekly = calculatorWeekly.calculateDueDate(
  fundDayWeekly,
  holidaysWeekly,
  paySpanWeekly,
  payDayWeekly,
  hasDirectDepositWeekly
);

console.log("Weekly Pay Date: " + dueDateWeekly); // Weekly Pay Date: Thu Apr 06 2023 00:00:00 GMT-0400 (Eastern Daylight Time)

// Create a bi-weekly instance of the PayDateCalculator class
const calculatorBiWeekly = new PayDateCalculator();

// Define some test data
const fundDayBiWeekly = new Date(2023, 2, 27); // March 27, 2023
const holidaysBiWeekly = [new Date(2023, 3, 1)]; // April 1, 2023 is a holiday
const paySpanBiWeekly = "bi-weekly";
const payDayBiWeekly = new Date(2023, 2, 31); // March 31, 2023
const hasDirectDepositBiWeekly = true;

// Calculate the due date using the PayDateCalculator instance
const dueDateBiWeekly = calculatorBiWeekly.calculateDueDate(
  fundDayBiWeekly,
  holidaysBiWeekly,
  paySpanBiWeekly,
  payDayBiWeekly,
  hasDirectDepositBiWeekly
);

console.log("BiWeekly Pay Date: " + dueDateBiWeekly); // BiWeekly Pay Date: Mon Apr 10 2023 00:00:00 GMT-0400 (Eastern Daylight Time)

// Create a weekly instance of the PayDateCalculator class
const calculatorMonthly = new PayDateCalculator();

// Define some test data for a monthly pay span
const fundDayMonthly = new Date(2023, 2, 1); // March 1, 2023
const holidaysMonthly = [new Date(2023, 3, 15)]; // April 15, 2023 is a holiday
const paySpanMonthly = "monthly";
const payDayMonthly = new Date(2023, 2, 28); // March 28, 2023
const hasDirectDepositMonthly = true;

// Calculate the due date using the PayDateCalculator instance for a monthly pay span
const dueDateMonthly = calculatorWeekly.calculateDueDate(
  fundDayMonthly,
  holidaysMonthly,
  paySpanMonthly,
  payDayMonthly,
  hasDirectDepositMonthly
);

console.log("Monthly Pay Date: " + dueDateMonthly); // Monthly Pay Date: Mon Apr 03 2023 00:00:00 GMT-0400 (Eastern Daylight Time)
