#!/bin/bash
echo Hello World
PID=`pgrep -f test`

echo $PID

for p in $PID
do 
    echo $p
    kill -9 $p
done

../bin/startup.sh
less catalina.out
