"use strict";

var expect = require("chai").expect;
var numFormatter = require("../index");

describe("#numFormatter", function() {
  it("should convert single digits", function() {
    var result = numFormatter("4");
    expect(result).to.equal("4");
  });

  it("should convert double digits", function() {
    var result = numFormatter("40");
    expect(result).to.equal("40");
  });

  it("should convert triple digits", function() {
    var result = numFormatter("400");
    expect(result).to.equal("400");
  });

  it("should convert 4 digits", function() {
    var result = numFormatter("4000");
    expect(result).to.equal("4K");
  });

  it("should convert 5 digits", function() {
    var result = numFormatter("8767");
    expect(result).to.equal("8.76K");
  });

  it("should convert 6 digits", function() {
    var result = numFormatter("87449");
    expect(result).to.equal("87.44K");
  });

  it("should convert 7 digits", function() {
    var result = numFormatter("989485");
    expect(result).to.equal("989.48K");
  });

  it("should convert 8 digits", function() {
    var result = numFormatter("12347659");
    expect(result).to.equal("12.34M");
  });

  it("should convert 8 digits", function() {
    var result = numFormatter("4224424421");
    expect(result).to.equal("4.22B");
  });

  it("should convert 8 digits", function() {
    var result = numFormatter("103984447575");
    expect(result).to.equal("103.98B");
  });
});
