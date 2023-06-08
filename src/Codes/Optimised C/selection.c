void selectionSort(int arr[], int n) {
    int i, j, minIndex, maxIndex, temp;
    for (i = 0; i < n / 2; i++) {
        minIndex = i;
        maxIndex = i;
        for (j = i + 1; j < n - i; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            } else if (arr[j] > arr[maxIndex]) {
                maxIndex = j;
            }
        }
        // Swap arr[i] and arr[minIndex]
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
        // Handle the case when the maximum element is swapped with arr[i]
        if (maxIndex == i)
            maxIndex = minIndex;
        // Swap arr[n-i-1] and arr[maxIndex]
        temp = arr[n - i - 1];
        arr[n - i - 1] = arr[maxIndex];
        arr[maxIndex] = temp;
    }
}
