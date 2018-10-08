"use strict";

/**
 * Adds commas to a number
 * @author {sprakash1}
 * @param {string} numberStr
 * @return {string}
 */
module.exports = function(numberStr) {
  return numberStr
    .split(",")
    .map(function(num) {
      return formatter(parseInt(num, 10));
    })
    .join();
};

function formatter(num) {
  let pow = Math.pow,
    floor = Math.floor,
    abs = Math.abs,
    log = Math.log;
  let base = floor(log(abs(num)) / log(1000));
  let suffix = "KMB"[base - 1];
  return suffix ? truncNum(num / pow(1000, base), 2) + suffix : "" + num;
}

function truncNum(n, precision) {
  let calcDec = Math.pow(10, precision);
  return Math.trunc(n * calcDec) / calcDec;
}
