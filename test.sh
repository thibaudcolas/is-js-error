#!/usr/bin/env bash

COMMAND="node index.js"

$COMMAND

$COMMAND --version

$COMMAND --help

node test/start-server.js &
SERVER_PID=$!

$COMMAND http://localhost:4001/no-error
CODE=$?
echo $CODE
if [ $CODE -ne 0 ];
then
    exit 1;
fi

$COMMAND http://localhost:4001/error
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
