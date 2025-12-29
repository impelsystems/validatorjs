if (typeof require !== "undefined") {
  var Validator = require("../src/validator.mjs");
  var expect = require("chai").expect;
} else {
  var Validator = window.Validator;
  var expect = window.chai.expect;
}

module.exports = { Validator, expect };
