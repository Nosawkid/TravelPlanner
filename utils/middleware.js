const unknownEndPoint = (req, res) => {
  res.status(404).json({ error: "Unknown Endpoint" });
};

const errorHandler = (error, req, res, next) => {
  console.log("Error name: ", error.name);
  console.log("Error message: ", error.message);

  if (error.name === "ValidationError") {
    return res.status(400).json({ error: error.message });
  }
  if (error.name === "CustomValidationError") {
    return res.status(error.status).json({ error: error.message });
  }
  if (error.name === "CastError") {
    return res.status(400).json({ error: "Malformatted Id" });
  }

  if (
    error.name === "MongoServerError" &&
    error.message.includes("E11000 duplicate key error")
  )
    next(error);
};

module.exports = {
  unknownEndPoint,
  errorHandler,
};
