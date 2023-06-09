#include <stdio.h>
#include <stdlib.h>

void merge(int arr[], int left[], int leftSize, int right[], int rightSize) {
    int i = 0, j = 0, k = 0;

    while (i < leftSize && j < rightSize) {
        if (left[i] < right[j])
            arr[k++] = left[i++];
        else
            arr[k++] = right[j++];
    }

    while (i < leftSize)
        arr[k++] = left[i++];

    while (j < rightSize)
        arr[k++] = right[j++];
}

void strandSort(int arr[], int n) {
    if (n <= 1)
        return;

    int i, j, k;
    int* sublist = malloc(n * sizeof(int));
    int sublistSize = 0;
    int* remaining = malloc(n * sizeof(int));
    int remainingSize = 0;

    sublist[sublistSize++] = arr[0];

    for (i = 1; i < n; i++) {
        if (arr[i] < sublist[sublistSize - 1])
            sublist[sublistSize++] = arr[i];
        else
            remaining[remainingSize++] = arr[i];
    }

    strandSort(sublist, sublistSize);
    strandSort(remaining, remainingSize);
    merge(arr, sublist, sublistSize, remaining, remainingSize);

    free(sublist);
    free(remaining);
}
