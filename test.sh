#!/usr/bin/env bash

COMMAND="node index.js"

$COMMAND

$COMMAND --version

$COMMAND --help

node -e "require('babel-core/register'); require('./test/server').default(4002);" &
SERVER_PID=$!

$COMMAND http://localhost:4002/no-error
CODE=$?
echo $CODE
if [ $CODE -ne 0 ];
then
    exit 1;
fi

$COMMAND http://localhost:4002/error
CODE=$?
echo $CODE
if [ $CODE -ne 2 ];
then
    exit 1;
fi

$COMMAND http://localhost:9999/notfound
CODE=$?
echo $CODE
if [ $CODE -ne 1 ];
then
    exit 1;
fi

kill $SERVER_PID
