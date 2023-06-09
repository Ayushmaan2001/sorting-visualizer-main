void countingSort(int arr[], int n, int max) {
    int count[max + 1];
    int output[n];
  
    // Initialize count array with all elements as 0
    for (int i = 0; i <= max; i++) {
        count[i] = 0;
    }
  
    // Store the count of each element
    for (int i = 0; i < n; i++) {
        count[arr[i]]++;
    }
  
    // Calculate the cumulative count
    for (int i = 1; i <= max; i++) {
        count[i] += count[i - 1];
    }
  
    // Build the output array
    for (int i = 0; i < n; i++) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }
  
    // Copy the sorted elements to the original array
    for (int i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}
