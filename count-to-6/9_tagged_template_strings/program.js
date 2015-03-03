"use strict";

function escape(string) {
    // the "&" replacement has to be first!
    return string.replace(/&/g, "&amp;")
        .replace(/'/g, "&apos;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

function html(template, ...input) {
    var i, result;

    result = template[0];
    for (i = 0; i < input.length; i++) {
        result += escape(input[i]) + template[i + 1];
    }

    return result;
}

console.log(html `<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
