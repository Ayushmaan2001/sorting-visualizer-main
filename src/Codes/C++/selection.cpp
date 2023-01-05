#include <iostream>

// Function to find the position of the smallest element
// in the range [start, end)
int findSmallest(int *arr, int start, int end)
{
    int smallest = arr[start]; // Store the first element as the smallest value so far
    int smallestIndex = start; // Store the index of the smallest value
 
    // Loop through the remaining elements
    for (int i = start + 1; i < end; i++)
    {
        // If an element is smaller than the current smallest value
        if (arr[i] < smallest)
        {
            // Set it as the new smallest value
            smallest = arr[i];
            smallestIndex = i;
        }
    }
 
    return smallestIndex; // Return the index of the smallest element
}

// Selection sort function
void selectionSort(int *arr, int n)
{
    // Loop through the array
    for (int i = 0; i < n; i++)
    {
        // Find the position of the smallest element in the range [i, n)
        int smallestIndex = findSmallest(arr, i, n);
 
        // Swap the element at the current position with the smallest element
        std::swap(arr[i], arr[smallestIndex]);
    }
}

int main()
{
    int arr[] = {5, 3, 6, 2, 10};
    int n = sizeof(arr) / sizeof(arr[0]);
 
    // Sort the array
    selectionSort(arr, n);
 
    // Print the sorted array
    for (int i = 0; i < n; i++)
        std::cout << arr[i] << " ";
 
    return 0;
}
