#include <iostream>

// Function to partition the array and return the pivot index
int partition(int *arr, int start, int end)
{
    int pivot = arr[end]; // Choose the last element as the pivot
    int i = start - 1;   // Index of the smaller element
 
    // Loop through the array and swap elements if necessary
    for (int j = start; j < end; j++)
    {
        // If the current element is smaller than the pivot
        if (arr[j] < pivot)
        {
            i++; // Increment the index of the smaller element
            std::swap(arr[i], arr[j]); // Swap the elements
        }
    }
 
    std::swap(arr[i + 1], arr[end]); // Swap the pivot element into its correct position
    return i + 1; // Return the pivot index
}

// Recursive quicksort function
void quicksort(int *arr, int start, int end)
{
    if (start < end) // If the array has more than one element
    {
        int pivotIndex = partition(arr, start, end); // Partition the array and get the pivot index
 
        // Sort the elements before and after the pivot
        quicksort(arr, start, pivotIndex - 1);
        quicksort(arr, pivotIndex + 1, end);
    }
}

int main()
{
    int arr[] = {5, 3, 6, 2, 10};
    int n = sizeof(arr) / sizeof(arr[0]);
 
    // Sort the array
    quicksort(arr, 0, n - 1);
 
    // Print the sorted array
    for (int i = 0; i < n; i++)
        std::cout << arr[i] << " ";
 
    return 0;
}
