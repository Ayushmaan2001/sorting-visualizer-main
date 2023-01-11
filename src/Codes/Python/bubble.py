def bubble_sort(arr):
    # Keep looping until the array is sorted
    while True:
        # Set a flag to track if any elements were swapped
        swapped = False
 
        # Loop through the array and swap adjacent elements if they are out of order
        for i in range(len(arr) - 1):
            if arr[i] > arr[i + 1]:
                # Swap the elements
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
 
                # Set the flag to True
                swapped = True
 
        # If no elements were swapped, the array is sorted
        if not swapped:
            break

# Test the function
print(bubble_sort([5, 3, 6, 2, 10])) # [2, 3, 5, 6, 10]
