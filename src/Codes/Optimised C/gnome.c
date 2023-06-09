void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

void gnomeSort(int arr[], int n) {
    int pos = 0;

    while (pos < n) {
        if (pos == 0 || arr[pos] >= arr[pos - 1]) {
            pos++;
        } else {
            swap(&arr[pos], &arr[pos - 1]);
            pos--;
        }

        if (pos > 1 && arr[pos] < arr[pos - 1]) {
            pos--;
        }
    }
}
