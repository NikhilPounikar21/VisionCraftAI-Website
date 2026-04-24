// ======================================================
// 📌 CUSTOM ERROR HANDLER FUNCTION
// ======================================================

export const createError = (status = 500, message = "Something went wrong") => {
  const error = new Error(message);

  // ✅ Add custom properties
  error.status = status;
  error.success = false;

  return error;
};