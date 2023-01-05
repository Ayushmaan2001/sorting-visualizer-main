def insertion_sort(arr):
    # Loop through the array
    for i in range(1, len(arr)):
        # Store the current element
        current = arr[i]
 
        # Initialize the position where the element should be inserted
        j = i - 1
 
        # Shift the elements to the right until the correct position is found
        while j >= 0 and arr[j] > current:
            arr[j + 1] = arr[j]
            j -= 1
 
        # Insert the element into the correct position
        arr[j + 1] = current

# Test the function
print(insertion_sort([5, 3, 6, 2, 10])) # [2, 3, 5, 6, 10]
