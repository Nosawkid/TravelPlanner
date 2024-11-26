class CustomError extends Error {
  constructor(error, message, status) {
    super(message);
    this.error = error;
    this.status = status;
    this.name = error;
  }
}

module.exports = CustomError;
