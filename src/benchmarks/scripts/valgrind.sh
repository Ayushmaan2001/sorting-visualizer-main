#!/bin/bash

path=reports/bubbleSort

cd reports/bubbleSort
rm *
cd ..
cd ..

echo $(ls)

echo "Running Valgrind Massif..."
valgrind --tool=massif ./main
mv massif.out.* ${path}
echo "Valgrind Massif complete."

echo "Running Valgrind Memcheck..."
valgrind --tool=memcheck ./main 2> memcheck.out
mv memcheck.out ${path}
echo "Valgrind Memcheck complete."

echo "Running Valgrind Cachegrind..."
valgrind --tool=cachegrind ./main
mv cachegrind.out.* ${path}
echo "Valgrind Cachegrind complete."

echo "Running Valgrind Callgrind..."
valgrind --tool=callgrind ./main
mv callgrind.out.* ${path}
echo "Valgrind Callgrind complete."

echo "All Valgrind tools executed successfully."
