#include <iostream>
#include <vector>

// Counting sort function
void countingSort(const std::vector<int>& arr, std::vector<int>& sorted_arr, int max)
{
    std::vector<int> counts(max + 1); // Vector to store the counts of each element
 
    // Loop through the array and count the occurences of each element
    for (int i : arr)
        counts[i]++;
 
    // Loop through the counts and add the elements to the sorted array
    for (int i = 0, j = 0; i <= max; i++)
        for (int k = 0; k < counts[i]; k++)
            sorted_arr[j++] = i;
}

/*
    Note that this implementation of counting sort requires the maximum element in the array to be known in advance. If the maximum element is not known, you can use a variation of counting sort called "radix sort" which works by sorting the elements based on their digits (e.g., ones place, tens place, etc.)
*/

int main()
{
    std::vector<int> arr = {5, 3, 6, 2, 10};
    std::vector<int> sorted_arr(arr.size()); // Vector to store the sorted array
 
    // Sort the array
    countingSort(arr, sorted_arr, 10);
 
    // Print the sorted array
    for (int i : sorted_arr)
        std::cout << i << " ";
 
    return 0;
}
