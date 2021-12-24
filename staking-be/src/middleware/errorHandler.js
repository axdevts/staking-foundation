import { logger } from '../utils';
import { errorCodes } from '../constants/errors';

// eslint-disable-next-line no-unused-vars
export const errorHandler = (err, _req, res, _next) => {
  logger.info(err);
  const errorBody = { code: err.status, message: err.message };
  if (err.errors && err.errors.length > 0) {
    if (err.errors[0].msg) {
      // process validation(express-validator) error
      const uniqueErrors = err.errors.filter(
        (elem, pos) => pos === err.errors.findIndex((value) => value.param === elem.param)
      );

      errorBody.code = errorCodes.INPUT_VALIDATION_FAILED;
      errorBody.errors = uniqueErrors.map((elem) => ({ msg: elem.msg, param: elem.param }));
    }
  }
  res.status(200);
  res.json({ error: errorBody, success: false });
};
