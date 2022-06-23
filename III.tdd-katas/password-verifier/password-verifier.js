class PasswordVerifier {
  constructor(password) {
    this.password = password;
  }
  verify() {
    this.notNull();

    const requiredValidations = [leastOneLowercase];
    const validations = [largerThan8Chars, leastOneUppercase, leastOneNumber];

    const requiredErrors = requiredValidations
      .map((validations) => validations(this.password))
      .filter((err) => err !== "");

    const errors = validations
      .map((validation) => validation(this.password))
      .filter((err) => err !== "");

    if (atLeast3Validations(requiredErrors, errors, validations)) {
      return "OK";
    }
    if (thereAreErrors(requiredErrors, errors)) {
      const msg = errors.join();
      throw new Error(msg);
    }
    //if (requiredErrors.length > 0)
    else {
      const msg = requiredErrors.join();
      throw new Error(msg);
    }
  }

  notNull () {
    if (this.password === null) {
      throw new Error("Password should be not null");
    }
  };
}

const leastOneLowercase = (password) => {
  return password.search(/[a-z]/) < 0
    ? "Your password must have at least one lowercase letter"
    : "";
};

const largerThan8Chars = (password) => {
  return password.length <= 8
    ? "Your password must have more than 8 characters"
    : "";
};

const leastOneUppercase = (password) => {
  return password.search(/[A-Z]/) < 0
    ? "Your password must have at least one uppercase letter"
    : "";
};

const leastOneNumber = (password) => {
  return password.search(/[0-9]/) < 0
    ? "Your password must have at least one number"
    : "";
};

const thereAreErrors = (requiredErrors, errors) => {
  return !requiredErrors.length && errors.length >= 1;
};

const atLeast3Validations = (requiredErrors, errors, validations) => {
  return (
    (!requiredErrors.length && !errors.length) ||
    (!requiredErrors.length && errors.length >= validations.length - 1)
  );
};

module.exports = {
  PasswordVerifier,
};
