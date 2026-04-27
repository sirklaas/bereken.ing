/**
 * Date Utilities for Holidays
 */

export const getEaster = (year: number) => {
  const f = Math.floor,
    G = year % 19,
    C = f(year / 100),
    H = (C - f(C / 4) - f((8 * C + 13) / 25) + 19 * G + 15) % 30,
    I = H - f(H / 28) * (1 - f(29 / (H + 1)) * f((21 - G) / 11)),
    J = (year + f(year / 4) + I + 2 - C + f(C / 4)) % 7,
    L = I - J,
    month = 3 + f((L + 40) / 44),
    day = L + 28 - 31 * f(month / 4);
  return new Date(year, month - 1, day);
};

// Simplified estimated dates for Ramadan/Suikerfeest 2026 (based on Hijri calendar)
export const getRamadan = (year: number) => {
  if (year === 2026) return new Date(2026, 1, 18); // Feb 18
  return new Date(2027, 1, 7); // Feb 7 (estimate)
};

export const getSuikerfeest = (year: number) => {
  if (year === 2026) return new Date(2026, 2, 20); // Mar 20
  return new Date(2027, 2, 9); // Mar 9 (estimate)
};
