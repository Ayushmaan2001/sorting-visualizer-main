#include <vector>
#include <chrono>
#include <random>
#include <algorithm>

std::mt19937 rng(std::chrono::steady_clock::now().time_since_epoch().count());

std::vector<int> generateRandomizedArray(int arraySize){
    std::vector<int> randomizedArray;
    for(int i = 0; i < arraySize; i++){
        int x = std::uniform_int_distribution<int>(1, 10)(rng);
        randomizedArray.push_back(x);
    }
    return randomizedArray;
}

void swapInArray(std::vector<int>& arr, int size, int swaps) {
    for (int i = 0; i < swaps; i++) {
      int index1 = std::uniform_int_distribution<int>(0, size - 2)(rng);
      int index2 = index1 + 1;
      if (index2 >= size) {
        index2 = index1 - 1;
      }
      int temp = arr[index1];
      arr[index1] = arr[index2];
      arr[index2] = temp;
    }
}
  
std::vector<int> generateNearlySortedArray(int arraySize) {
    std::vector<int> arr = generateRandomizedArray(arraySize);
    std::sort(arr.begin(), arr.end());
    // 10 - 30% of length direct inversions created
    int perc = std::uniform_int_distribution<int>(10, 40)(rng);
    int numSwaps = perc * arraySize / 100; 
    swapInArray(arr, arraySize, numSwaps);
    return arr;
}

std::vector<int> generateNearlyReverseSortedArray(int arraySize){
    std::vector<int> arr = generateRandomizedArray(arraySize);
    std::sort(arr.rbegin(), arr.rend());
    int perc = std::uniform_int_distribution<int>(10, 40)(rng);
    int numSwaps = perc * arraySize / 100; 
    swapInArray(arr, arraySize, numSwaps);
    return arr;
}

std::vector<int> generateSortedArray(int arraySize){
    std::vector<int> arr = generateRandomizedArray(arraySize);
    std::sort(arr.begin(), arr.end());
    return arr;
}

std::vector<int> generateReverseSortedArray(int arraySize){
    std::vector<int> arr = generateRandomizedArray(arraySize);
    std::sort(arr.rbegin(), arr.rend());
    return arr;
}
