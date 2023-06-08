#include <stdio.h>
#include <stdlib.h>

void merge(int arr[], int left[], int leftSize, int right[], int rightSize) {
    int i = 0, j = 0, k = 0;

    while (i < leftSize && j < rightSize) {
        if (left[i] <= right[j])
            arr[k++] = left[i++];
        else
            arr[k++] = right[j++];
    }

    while (i < leftSize)
        arr[k++] = left[i++];

    while (j < rightSize)
        arr[k++] = right[j++];
}

void mergeSort(int arr[], int n, int k) {
    if (n <= 1)
        return;

    int chunkSize = (n + k - 1) / k; // Size of each chunk

    // Perform sorting on each chunk individually
    for (int i = 0; i < n; i += chunkSize)
        mergeSort(arr + i, chunkSize, k);

    // Merge the sorted chunks
    for (int size = chunkSize; size < n; size *= k) {
        for (int i = 0; i < n - size; i += k * size) {
            int leftIndex = i;
            int rightIndex = i + size;
            int endIndex = i + k * size;

            if (endIndex > n)
                endIndex = n;

            int* left = arr + leftIndex;
            int leftSize = size;

            int* right = arr + rightIndex;
            int rightSize = endIndex - rightIndex;

            merge(arr + leftIndex, left, leftSize, right, rightSize);
        }
    }
}
