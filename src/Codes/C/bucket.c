#include <stdio.h>
#include <stdlib.h>

void insertionSort(int arr[], int n) {
    int i, j, key;
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }

        arr[j + 1] = key;
    }
}

void bucketSort(int arr[], int n, int maxVal) {
    int i, j;
    int* buckets = (int*)malloc(maxVal * sizeof(int));

    for (i = 0; i < maxVal; i++)
        buckets[i] = 0;

    for (i = 0; i < n; i++)
        buckets[arr[i]]++;

    for (i = 0, j = 0; i < maxVal; i++) {
        while (buckets[i] > 0) {
            arr[j++] = i;
            buckets[i]--;
        }
    }

    free(buckets);
}
