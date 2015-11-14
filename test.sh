#!/usr/bin/env bash

COMMAND="node index.js"

$COMMAND

$COMMAND --version

$COMMAND --help

$COMMAND https://rawgit.com/ThibWeb/is-js-error/master/test/no-error.html
CODE=$?
echo $CODE
if [ $CODE -ne 0 ];
then
    exit 1;
fi

$COMMAND https://rawgit.com/ThibWeb/is-js-error/master/test/error.html
CODE=$?
echo $CODE
if [ $CODE -ne 2 ];
then
    exit 1;
fi

$COMMAND https://rawgit.com/ThibWeb/is-js-error/master/test/notfound.html
CODE=$?
echo $CODE
if [ $CODE -ne 1 ];
then
    exit 1;
fi
