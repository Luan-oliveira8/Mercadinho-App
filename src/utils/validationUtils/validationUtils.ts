export const stringIsNotEmpty = (value: string | undefined | null): boolean => {
  return value && value.trim().length > 0 ? true : false;
};

export const removeNonIntegerChars = (value: string): string => {
  return value.replace(/[.,]/g, "").trim();
};

export const listIsNotEmpty = (value: any[] | undefined | null): boolean => {
  return Array.isArray(value) && value.length > 0;
};

export const listIsEmpty = (value: any[] | undefined | null): boolean => {
  return Array.isArray(value) && value.length === 0;
};
