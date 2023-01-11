#include <iostream>

// Bubble sort function
void bubbleSort(int *arr, int n)
{
    bool sorted = false; // Flag to track if the array is sorted
 
    // Keep looping until the array is sorted
    while (!sorted)
    {
        sorted = true; // Set the flag to true
 
        // Loop through the array and swap adjacent elements if they are out of order
        for (int i = 0; i < n - 1; i++)
        {
            if (arr[i] > arr[i + 1])
            {
                // Swap the elements
                std::swap(arr[i], arr[i + 1]);
 
                // Set the flag to false
                sorted = false;
            }
        }
    }
}

int main()
{
    int arr[] = {5, 3, 6, 2, 10};
    int n = sizeof(arr) / sizeof(arr[0]);
 
    // Sort the array
    bubbleSort(arr, n);
 
    // Print the sorted array
    for (int i = 0; i < n; i++)
        std::cout << arr[i] << " ";
 
    return 0;
}
