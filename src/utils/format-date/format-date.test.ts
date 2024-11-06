import { formattedDate } from "@/utils/format-date/index";

describe('formattedDate', () => {
  it('should format a valid Date object correctly', () => {
    const date = new Date('2023-10-06T00:00:00Z');
    const locale = 'en-US';
    expect(formattedDate(date, locale)).toBe('October 6, 2023');
  });

  it('should format a valid date string correctly', () => {
    const dateString = '2023-10-06';
    const locale = 'en-US';
    expect(formattedDate(dateString, locale)).toBe('October 6, 2023');
  });

  it('should format a valid timestamp correctly', () => {
    const timestamp = 1696540800000; // Corresponds to '2023-10-06T00:00:00Z'
    const locale = 'en-US';
    expect(formattedDate(timestamp, locale)).toBe('October 6, 2023');
  });

  it('should throw an error for invalid date input', () => {
    const invalidInput = {};
    const locale = 'en-US';
    expect(() => formattedDate(invalidInput, locale)).toThrow('Invalid date input');
  });

  it('should throw an error for invalid date format', () => {
    const invalidDateString = 'invalid-date';
    const locale = 'en-US';
    expect(() => formattedDate(invalidDateString, locale)).toThrow('Invalid date format');
  });
});