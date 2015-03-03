"use strict";

// old way...
// module.exports = function(lower = 0, upper = 1) {
//     return (lower + upper) / 2;
// };

// new way...
module.exports = (lower = 0, upper = 1) => (lower + upper) / 2;
