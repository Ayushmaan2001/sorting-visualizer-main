#!/bin/bash
./main 3 &
pid=$!
sleep 1
pmap -X $pid > pmap.txt
mv pmap.txt 

