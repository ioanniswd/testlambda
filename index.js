#!/usr/bin/env node

var path = require('path');
var exec = require('child_process').exec;
var homedir = require('os').homedir() + '/';
var fs = require("fs");
var ncp = require('ncp').ncp;

var localPath = 'localLambdas/';

var invokeFolder = process.cwd();
// console.log('current directory: ', invokeFolder);

if (invokeFolder.indexOf('lambdafns') == -1) {
  console.log('You are in the wrong folder');
} else {
  console.log('Correct folder');
  exec('echo ${PWD##*lambdafns/}', function(err, stdout, stderr) {
    if (err) {
      console.log(err);
    } else if (stderr) {
      console.log('stderr: ', stderr);
    } else {
      localPath += stdout.slice(0, -1);
      // console.log('localPath: ', localPath);
      process.chdir(homedir);
      if (!fs.existsSync(localPath)) {
        console.log('local path does not exist');
        var dirs = localPath.split('/');
        // console.log('dirs: ', dirs);
        dirs.forEach(function(dir) {
          if (!fs.existsSync(dir)) {
            console.log('making dir: ', dir);
            fs.mkdirSync(dir);
          }
          process.chdir(dir);
        });
      } else {
        console.log('local path exists');
        process.chdir(localPath);

        // console.log('invokeFolder:', invokeFolder);
        // console.log('process.cwd():', process.cwd());
        ncp(invokeFolder, process.cwd(), function(err, files) {
          console.log('Removing unnecessary modules...');

          exec('npm prune', function(err, stdout, stderr) {
            if (err) {
              console.log('err:', err);
            } else {
              console.log('stderr: ', stderr);
              console.log('Installing missing modules...');

              exec('npm-install-missing', function(err, stdout, stderr) {
                console.log('err:', err);
                console.log('stderr: ', stderr);
                console.log(stdout);

                console.log('Running tests..');
                exec('node ./node_modules/.bin/mocha --reporter spec', function(err, stdout, stderr) {
                  console.log(err);
                  console.log(stderr);
                  console.log(stdout);
                });
              });
            }
          });
        });
      }
    }
  });
}
