class PasswordVerifier {
  constructor(password) {
    this.password = password;
    this.requiredValidations = [this.leastOneLowercase.bind(this)];
    this.validations = [
      this.largerThan8Chars.bind(this),
      this.leastOneUppercase.bind(this),
      this.leastOneNumber.bind(this),
    ];
  }
  verify() {
    this.notNull();

    const requiredErrors = this.requiredValidations
      .map((validations) => validations())
      .filter((err) => err !== "");

    const errors = this.validations
      .map((validation) => validation())
      .filter((err) => err !== "");

    if (this.atLeast3Validations(requiredErrors, errors)) {
      return "OK";
    }
    if (this.thereAreErrors(requiredErrors, errors)) {
      const msg = errors.join();
      throw new Error(msg);
    }
    //if (requiredErrors.length > 0)
    else {
      const msg = requiredErrors.join();
      throw new Error(msg);
    }
  }

  thereAreErrors(requiredErrors, errors) {
    return !requiredErrors.length && errors.length >= 1;
  }

  notNull() {
    if (this.password === null) {
      throw new Error("Password should be not null");
    }
  }

  leastOneLowercase() {
    return this.password.search(/[a-z]/) < 0
      ? "Your password must have at least one lowercase letter"
      : "";
  }

  largerThan8Chars() {
    return this.password.length <= 8
      ? "Your password must have more than 8 characters"
      : "";
  }

  leastOneUppercase() {
    return this.password.search(/[A-Z]/) < 0
      ? "Your password must have at least one uppercase letter"
      : "";
  }

  leastOneNumber() {
    return this.password.search(/[0-9]/) < 0
      ? "Your password must have at least one number"
      : "";
  }
  // validation functions
  atLeast3Validations(requiredErrors, errors) {
    return (
      (!requiredErrors.length && !errors.length) ||
      (!requiredErrors.length && errors.length >= this.validations.length - 1)
    );
  }
}

module.exports = {
  PasswordVerifier,
};
