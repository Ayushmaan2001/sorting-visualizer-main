void countingSort(int arr[], int n, int max) {
    int count[max + 1];
  
    // Initialize count array with all elements as 0
    for (int i = 0; i <= max; i++) {
        count[i] = 0;
    }
  
    // Store the count of each element
    for (int i = 0; i < n; i++) {
        count[arr[i]]++;
    }
  
    int outputIndex = 0;
    // Build the output array directly from the count array
    for (int i = 0; i <= max; i++) {
        while (count[i] > 0) {
            arr[outputIndex] = i;
            outputIndex++;
            count[i]--;
        }
    }
}
