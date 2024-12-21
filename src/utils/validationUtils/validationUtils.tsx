export const stringIsNotEmpty = (value: string | undefined | null): boolean => {
  return value && value.trim().length > 0 ? true : false;
};

export const removeNonIntegerChars = (value: string): string => {
  return value.replace(/[.,]/g, "").trim();
};
