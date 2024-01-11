export function formatAmountValue(value: number): string {
  if (value >= 1000000) {
    const millions = (value / 1000000).toFixed(2);
    return `$${millions}M`;
  } else {
    const formattedValue = new Intl.NumberFormat().format(value);
    return formattedValue;
  }
}

export function getDateRange(date: string, range: string) {
  if (!range) return;

  const newDate = new Date(date);

  if (range === "week") {
    newDate.setDate(newDate.getDate() - 7);
  }

  if (range === "month") {
    newDate.setMonth(newDate.getMonth() - 1);
  }

  if (range === "six-months") {
    newDate.setMonth(newDate.getMonth() - 6);
  }

  if (range === "year") {
    newDate.setFullYear(newDate.getFullYear() - 1);
  }

  return newDate.toISOString().split("T")[0];
}
