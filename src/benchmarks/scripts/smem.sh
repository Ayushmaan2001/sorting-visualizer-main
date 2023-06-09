#!/bin/bash
program="./benchmarks"
path="reports/"
sortname="bubbleSort"
filename="/smem.csv"
file=${path}${sortname}${filename}

interval=0.001

echo "Starting $program..."
$program &

pid=$!

while ps -p $pid >/dev/null; do
    ram_usage=$(smem -t --processfilter="main" | awk '$3=="./main" {print $1","$2","$3","$4","$5","$6","$7}')
    echo "$ram_usage" >> $file

    sleep $interval
done

echo "$program has finished."
