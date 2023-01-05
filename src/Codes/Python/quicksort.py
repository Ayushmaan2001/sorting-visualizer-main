def partition(arr, start, end):
    # Choose the last element as the pivot
    pivot = arr[end]
 
    # Index of the smaller element
    i = start - 1
 
    # Loop through the array and swap elements if necessary
    for j in range(start, end):
        # If the current element is smaller than the pivot
        if arr[j] < pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
 
    # Swap the pivot element into its correct position
    arr[i + 1], arr[end] = arr[end], arr[i + 1]
 
    return i + 1

def quicksort(arr, start, end):
    if start < end:
        # Partition the array and get the pivot index
        pivot_index = partition(arr, start, end)
 
        # Sort the elements before and after the pivot
        quicksort(arr, start, pivot_index - 1)
        quicksort(arr, pivot_index + 1, end)

# Test the function
print(quicksort([5, 3, 6, 2, 10], 0, 4)) # [2, 3, 5, 6, 10]
