# Pay Date Calculator

The PayDateCalculator class is used to calculate the due date for a pay period based on the fund day, holidays, pay span, pay day, and whether direct deposit is used.

# Usage

To use the PayDateCalculator class, first create an instance of the class:

`const calculator = new PayDateCalculator();`

Then call the calculateDueDate() method, passing in the necessary parameters:

```
const dueDate = calculator.calculateDueDate(
  fundDay: Date,
  holidays: Date[],
  paySpan: "weekly" | "bi-weekly" | "monthly",
  payDay: Date,
  hasDirectDeposit: boolean
);
```

# Parameters

- `fundDay`: A Date object representing the fund day for the pay period.
- `holidays`: An array of Date objects representing holidays during the pay period.
- `paySpan`: A string representing the pay span for the pay period. Must be one of the following values: "weekly", "bi-weekly", or "monthly".
- `payDay`: A Date object representing the pay day for the pay period.
- `hasDirectDeposit`: A boolean representing whether direct deposit is used for the pay period.

# Return value

The `calculateDueDate()` method returns a Date object representing the due date for the pay period.

# Example

```
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
```
