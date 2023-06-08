#ifndef input_h
#define input_h
#include <vector>

std::vector<int> generateRandomizedArray(int arraySize);
void swapInArray(std::vector<int>& arr, int size, int swaps);
std::vector<int> generateNearlySortedArray(int arraySize);
std::vector<int> generateNearlyReverseSortedArray(int arraySize);
std::vector<int> generateSortedArray(int arraySize);
std::vector<int> generateReverseSortedArray(int arraySize);

#endif