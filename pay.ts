export class DateHelper {
  public static isWeekend(date: Date): boolean {
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  }

  public static isHoliday(date: Date, holidays: Date[]): boolean {
    return holidays.some((holiday) => holiday.getTime() === date.getTime());
  }
}

export class PayDateCalculator {
  private getNextPayDate(
    fundDay: Date,
    paySpan: "weekly" | "bi-weekly" | "monthly"
  ): Date {
    const dueDate = new Date(fundDay);
    if (paySpan === "weekly") dueDate.setDate(fundDay.getDate() + 7);
    else if (paySpan === "bi-weekly") dueDate.setDate(fundDay.getDate() + 14);
    else if (paySpan === "monthly") dueDate.setMonth(fundDay.getMonth() + 1);

    const minDueDate = new Date(fundDay);
    minDueDate.setDate(fundDay.getDate() + 10);

    return dueDate < minDueDate ? minDueDate : dueDate;
  }

  public calculateDueDate(
    fundDay: Date,
    holidays: Date[],
    paySpan: "weekly" | "bi-weekly" | "monthly",
    payDay: Date,
    hasDirectDeposit: boolean
  ): Date {
    let dueDate = this.getNextPayDate(fundDay, paySpan);

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
  }
}
