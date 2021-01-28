// Check is payload is a valid JSON payload
const validatePayload = (err, req, res, next) => {
  if (err instanceof SyntaxError) {
    res.json({
      message: "Invalid JSON payload passed.",
      status: "error",
      data: null,
    });
  }
};

// Exports the function
module.exports = { validatePayload };
