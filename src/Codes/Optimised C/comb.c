void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

void combSort(int arr[], int n) {
    int gap = n;
    float shrink = 1.3;
    int sorted = 0;

    while (gap > 1 || sorted == 0) {
        gap = (int)(gap / shrink);
        if (gap < 1)
            gap = 1;

        sorted = 1;
        for (int i = 0; i < n - gap; i++) {
            if (arr[i] > arr[i + gap]) {
                swap(&arr[i], &arr[i + gap]);
                sorted = 0;
            }
        }
    }
}
