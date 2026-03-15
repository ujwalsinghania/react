export const unique = <T>(arr: T[]): T[] => {
  return Array.from(new Set(arr));
};

export const chunk = <T>(arr: T[], size: number): T[][] => {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_v, i) =>
    arr.slice(i * size, i * size + size)
  );
};
