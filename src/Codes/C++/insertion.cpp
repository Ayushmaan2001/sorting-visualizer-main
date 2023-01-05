#include <iostream>

// Insertion sort function
void insertionSort(int *arr, int n)
{
    // Loop through the array
    for (int i = 1; i < n; i++)
    {
        // Store the current element
        int current = arr[i];
 
        // Initialize the position where the element should be inserted
        int j = i - 1;
 
        // Shift the elements to the right until the correct position is found
        while (j >= 0 && arr[j] > current)
        {
            arr[j + 1] = arr[j];
            j--;
        }
 
        // Insert the element into the correct position
        arr[j + 1] = current;
    }
}

int main()
{
    int arr[] = {5, 3, 6, 2, 10};
    int n = sizeof(arr) / sizeof(arr[0]);
 
    // Sort the array
    insertionSort(arr, n);
 
    // Print the sorted array
    for (int i = 0; i < n; i++)
        std::cout << arr[i] << " ";
 
    return 0;
}
