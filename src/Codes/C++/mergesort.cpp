#include <iostream>
#include <vector>

// Function to merge two sorted arrays
std::vector<int> merge(const std::vector<int>& left, const std::vector<int>& right)
{
    std::vector<int> result; // Vector to store the merged array
 
    // Indexes to track the current position in the left and right arrays
    int i = 0, j = 0;
 
    // Loop until one of the arrays is fully processed
    while (i < left.size() && j < right.size())
    {
        // If the element in the left array is smaller, add it to the result
        if (left[i] < right[j])
            result.push_back(left[i++]);
        else // Otherwise, add the element in the right array
            result.push_back(right[j++]);
    }
 
    // Add the remaining elements from the left array (if any)
    while (i < left.size())
        result.push_back(left[i++]);
 
    // Add the remaining elements from the right array (if any)
    while (j < right.size())
        result.push_back(right[j++]);
 
    return result;
}

// Recursive function to sort an array using mergesort
std::vector<int> mergesort(std::vector<int> arr)
{
    // If the array has more than one element, split it in half
    if (arr.size() > 1)
    {
        // Calculate the midpoint of the array
        int mid = arr.size() / 2;
 
        // Split the array into two halves
        std::vector<int> left(arr.begin(), arr.begin() + mid);
        std::vector<int> right(arr.begin() + mid, arr.end());
 
        // Sort the two halves
        left = mergesort(left);
        right = mergesort(right);
 
        // Merge the sorted halves
        arr = merge(left, right);
    }
 
    return arr;
}

int main()
{
    std::vector<int> arr = {5, 3, 6, 2, 10};
 
    // Sort the array
    arr = mergesort(arr);
 
    // Print the sorted array
    for (int i : arr)
        std::cout << i << " ";
 
    return 0;
}
