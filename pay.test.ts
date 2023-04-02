import { PayDateCalculator } from "./pay";

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

console.log(`Weekly Pay Date: ${dueDateWeekly}`); // Weekly Pay Date: Thu Apr 06 2023 00:00:00 GMT-0400 (Eastern Daylight Time)

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

console.log(`BiWeekly Pay Date: ${dueDateBiWeekly}`); // BiWeekly Pay Date: Mon Apr 10 2023 00:00:00 GMT-0400 (Eastern Daylight Time)

// Create a weekly instance of the PayDateCalculator class
const calculatorMonthly = new PayDateCalculator();

// Define some test data for a monthly pay span
const fundDayMonthly = new Date(2023, 2, 1); // March 1, 2023
const holidaysMonthly = [new Date(2023, 3, 15)]; // April 15, 2023 is a holiday
const paySpanMonthly = "monthly";
const payDayMonthly = new Date(2023, 2, 28); // March 28, 2023
const hasDirectDepositMonthly = true;

// Calculate the due date using the PayDateCalculator instance for a monthly pay span
const dueDateMonthly = calculatorMonthly.calculateDueDate(
  fundDayMonthly,
  holidaysMonthly,
  paySpanMonthly,
  payDayMonthly,
  hasDirectDepositMonthly
);

console.log(`Monthly Pay Date: ${dueDateMonthly}`); // Monthly Pay Date: Mon Apr 03 2023 00:00:00 GMT-0400 (Eastern Daylight Time)
