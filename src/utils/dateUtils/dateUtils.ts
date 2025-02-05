export const parseDateToRef = (date: Date): string => {
  return date.toLocaleDateString("pt-BR", {
    month: "2-digit",
    year: "numeric",
  });
};
