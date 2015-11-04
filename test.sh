#!/usr/bin/env bash

COMMAND="node index.js"

$COMMAND

$COMMAND --version

$COMMAND --help

$COMMAND https://rawgit.com/ThibWeb/is-js-error/master/test/no-error.html
echo $?

$COMMAND https://rawgit.com/ThibWeb/is-js-error/master/test/error.html
echo $?
