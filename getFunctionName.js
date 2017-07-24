"use strict";
const fs = require('fs');


/**
 * A module for reading package.json
 * @module getFunctionName
 */

/**
 * Get lambda name module
 * @param  {function} callback
 * @return {string}          The name of the lambda function
 */
module.exports = function(callback) {
  fs.readFile('package.json', 'utf-8', function(err, data) {
    if (err) {
      callback(err);
    } else {
      let functionName = JSON.parse(data).name;
      callback(null, functionName);
    }
  });
};
