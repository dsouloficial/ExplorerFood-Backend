class AppError extends Error {
  statusCode;

  constructor(message, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
  }
}

const appErrorMiddleware = (error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  console.error('error: ', error);

  return response.status(500).json({
    status: 'error',
    message: 'internal server error',
  });
};

module.exports = { AppError, appErrorMiddleware };
