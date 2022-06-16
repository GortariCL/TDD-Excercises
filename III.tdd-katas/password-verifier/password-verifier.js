const verify = (password) => {
  if (isNotString(password)) {
    throw new Error("Your password must contain letters and numbers");
  }
  if (isBeLargerThan8Chars(password)) {
    throw new Error("Your password must have more than 8 characters");
  }
  if (isAtLeastOneLowercase(password)) {
    throw new Error("Your password must have at least one lowercase letter");
  }
  if (isAtLeastOneUppercase(password)) {
    throw new Error("Your password must have at least one uppercase letter");
  }
  if (isAtLeastOneNumber(password)) {
    throw new Error("Your password must have at least one number");
  }
  return "OK"
};

module.exports = {
  verify,
};

const isAtLeastOneNumber = (password) => {
    return password.search(/[0-9]/) < 0;
}

const isAtLeastOneUppercase = (password) => {
    return password.search(/[A-Z]/) < 0;
}

const isAtLeastOneLowercase = (password) => {
    return password.search(/[a-z]/) < 0;
}

const isBeLargerThan8Chars = (password) => {
    return password.length <= 8;
}

const isNotString = (password) => {
    return typeof password !== "string";
}

