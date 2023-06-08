#include <stdio.h>

void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

void stoogeSort(int arr[], int low, int high) {
    if (low >= high)
        return;

    if (arr[low] > arr[high])
        swap(&arr[low], &arr[high]);

    if (high - low + 1 > 2) {
        int third = (high - low + 1) / 3;

        stoogeSort(arr, low, high - third);
        stoogeSort(arr, low + third, high);
        stoogeSort(arr, low, high - third);
    }
}
