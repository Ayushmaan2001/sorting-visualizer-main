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

void mergeSort(int arr[], int temp[], int low, int high, int k) {
    if (low < high) {
        int mid = (low + high) / 2;
        mergeSort(arr, temp, low, mid, k);
        mergeSort(arr, temp, mid + 1, high, k);

        int i, j;
        for (i = low; i <= high; i++)
            temp[i] = arr[i];

        i = low;
        int chunkSize = (high - low + 1) / k;

        for (int chunk = 0; chunk < k; chunk++) {
            int chunkStart = i;
            int chunkEnd = (chunk == k - 1) ? high : (chunkStart + chunkSize - 1);

            int* chunkArr = temp + chunkStart;
            int chunkSize = chunkEnd - chunkStart + 1;

            merge(arr + chunkStart, chunkArr, chunkSize, arr + chunkStart + chunkSize, chunkSize);

            i += chunkSize;
        }
    }
}

void externalKWayMergeSort(int arr[], int n, int k) {
    int* temp = (int*)malloc(n * sizeof(int));
    mergeSort(arr, temp, 0, n - 1, k);
    free(temp);
}
