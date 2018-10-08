# @sprakash1/sp-number-format

JavaScript number format method and add unit letters like 1000 to 1K

A small library that adds commas to numbers

## Installation

`npm install @sprakash1/sp-number-format`

## Usage

    var numFormatter = require('@sprakash1/sp-number-format');

    var formattedNum = numFormatter(1000);

Output should be `1K`

    var formattedNum = numFormatter(12600);

Similler Output should be
4===>4
40===>40
400===>400
4000===>4K
8767===>8.76K
87449===>87.44K
989485===>989.48K
12347659===>12.34M
4224424421===>4.22B
103984447575===>103.98B

## Tests

`npm test`
