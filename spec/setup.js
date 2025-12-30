if (typeof require !== "undefined") {
  var ValidatorModule = require("../src/validator.mjs");
  var Validator = ValidatorModule.default || ValidatorModule;
  var expect = require("chai").expect;
} else {
  var Validator = window.Validator;
  var expect = window.chai.expect;
}

module.exports = { Validator, expect };
