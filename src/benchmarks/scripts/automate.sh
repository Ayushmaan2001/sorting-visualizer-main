#!/bin/bash

log_file="automation_log.txt"
truncate -s 0 ${log_file}

echo "Making C++ Executable" 
echo "Making C++ Executable" >> ${log_file}
make all

program="./main"
report="reports"
paths=("" "bubbleSort" "insertionSort" "selectionSort" "quickSort" "mergeSort" "countingSort" "radixSort" "heapSort" "gnomeSort" "combSort")
len=10

# Cleanup Previous Reports
echo "Cleaning previous reports"
echo "Cleaning previous reports" >> ${log_file}
for ((i = 1; i <= ${len}; i++)); do
    report_path="${report}/${paths[i]}"
    cd ${report_path}
    rm *
    cd ..
    cd ..
done

for ((i = 1; i <= ${len}; i++)); do

    report_path="${report}/${paths[i]}"
    echo "Reporting to ${report_path}"
    echo "Reporting to ${report_path}" >> ${log_file}
    
    # Generate User Statistics
    echo "Generating User Report for ${paths[i]}"
    echo "Generating User Report for ${paths[i]}" >> ${log_file}
    ${program} $i 1 "${report_path}/user_stats.csv"

    #Generate pmap data
    echo "Generating PMAP for ${paths[i]}" 
    echo "Generating PMAP for ${paths[i]}" >> ${log_file}
    ${program} $i 0 "" &
    pid=$!
    sleep 1
    pmap -X $pid > pmap.txt
    mv pmap.txt ${report_path}

    #Generate smem data
    echo "Generating SMEM for ${paths[i]}"
    echo "Generating SMEM for ${paths[i]}" >> ${log_file}
    ${program} $i 0 "" &
    pid=$!
    interval=0.01
    echo "Process ID,UserCommand,Swap,Unique Set Size,Proportionate Set Size,Resident Set Size" >> smem.csv
    while ps -p $pid >/dev/null; do
        ram_usage=$(smem -t --processfilter="main" | awk '$3=="./main" {print $1","$2","$3","$4","$5","$6","$7}')
        echo "${ram_usage}" >> smem.csv
        sleep $interval
    done
    mv smem.csv ${report_path}

    
    echo "Running Valgrind Massif for ${paths[i]}"
    echo "Running Valgrind Massif for ${paths[i]}" >> ${log_file}
    valgrind --tool=massif ${program} $i 0 ""
    mv massif.out.* ${report_path}
    echo "Valgrind Massif complete for ${paths[i]}"
    echo "Valgrind Massif complete for ${paths[i]}" >> ${log_file}
    
    echo "Running Valgrind Memcheck for ${paths[i]}"
    echo "Running Valgrind Memcheck for ${paths[i]}" >> ${log_file}
    valgrind --tool=memcheck ${program} $i 0 "" 2> memcheck.out
    mv memcheck.out ${report_path}
    echo "Valgrind Memcheck complete for ${paths[i]}"
    echo "Valgrind Memcheck complete for ${paths[i]}" >> ${log_file}
    
    echo "Running Valgrind Cachegrind for ${paths[i]}" 
    echo "Running Valgrind Cachegrind for ${paths[i]}" >> ${log_file}
    valgrind --tool=cachegrind ${program} $i 0 ""
    mv cachegrind.out.* ${report_path}
    echo "Valgrind Cachegrind complete for ${paths[i]}"
    echo "Valgrind Cachegrind complete for ${paths[i]}" >> ${log_file}
    
    echo "Running Valgrind Callgrind for ${paths[i]}"
    echo "Running Valgrind Callgrind for ${paths[i]}" >> ${log_file}
    valgrind --tool=callgrind ${program} $i 0 ""
    mv callgrind.out.* ${report_path}
    echo "Valgrind Callgrind complete for ${paths[i]}"
    echo "Valgrind Callgrind complete for ${paths[i]}" >> ${log_file}
    
done