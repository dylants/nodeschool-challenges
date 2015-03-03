"use strict";

var inputs = process.argv.slice(2);
var result = inputs.map( string => string.charAt(0) )
    .reduce( (previous, current) => previous + current );

console.log(`[${inputs}] becomes "${result}"`);
