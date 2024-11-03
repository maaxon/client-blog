export const formattedDate = (dateInput: unknown, locale: string) => {
  let date: Date;

  if (dateInput instanceof Date) {
    date = dateInput;
  } else if (typeof dateInput === "string" || typeof dateInput === "number") {
    date = new Date(dateInput);
  } else {
    throw new Error("Invalid date input");
  }

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date format");
  }

  return date.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};