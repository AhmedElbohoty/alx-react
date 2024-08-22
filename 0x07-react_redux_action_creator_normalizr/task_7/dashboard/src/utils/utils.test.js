import { getFooterCopy, getFullYear, getLatestNotification } from './utils';

test('Test getFullYear function', () => {
  const currentYear = new Date().getFullYear();
  expect(getFullYear()).toBe(currentYear);
});

describe('Test getFooterCopy function', () => {
  test('getFooterCopy returns "Holberton School" for true argument', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  test('getFooterCopy returns "Holberton School main dashboard" for false argument', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });
});

test('test getLatestNotification function', () => {
  const notification = getLatestNotification();
  expect(notification).toContain('<strong>Urgent Requirement</strong>');
});
