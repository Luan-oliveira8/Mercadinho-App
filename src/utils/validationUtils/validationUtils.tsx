export const stringIsNotEmpty = (value: string | undefined | null): boolean => {
  return value && value.trim().length > 0 ? true : false;
};
