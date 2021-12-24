const errorMessages = {
  OWNER_IN_USE: "owner is not correct"
};

const errorCodes = {
  INPUT_VALIDATION_FAILED: 422,
  AUTH_FAILED: 401,
  PERSONAL_EMAIL_NOT_VERIFIED: 403,

  USER_EXIST: 409,
  PASSWORDS_NOT_MATCH: 400,
  INVALID_PASSWORD: 400,
  PERSONAL_EMAIL_EXIST: 409,
  UNKNOWN_ERROR: 500,
  INVALID_REFRESH_TOKEN: 401,
};

export { errorMessages, errorCodes };
