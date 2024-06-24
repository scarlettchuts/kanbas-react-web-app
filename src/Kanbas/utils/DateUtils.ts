// Helper function to format date to YYYY-MM-DD
export const formatDate = (date: string | number | Date) => {
  if (!date) return "";
  const d = new Date(date);
  return d.toISOString().split("T")[0];
};
