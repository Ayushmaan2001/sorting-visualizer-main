def find_smallest(arr):
    # Store the position of the smallest element
    smallest = arr[0]
    smallest_index = 0
 
    # Loop through the array and find the smallest element
    for i in range(1, len(arr)):
        if arr[i] < smallest:
            smallest = arr[i]
            smallest_index = i
 
    return smallest_index

def selection_sort(arr):
    # Create a new sorted array
    sorted_arr = []
 
    # Find the smallest element in the array and add it to the sorted array
    for i in range(len(arr)):
        smallest = find_smallest(arr)
        sorted_arr.append(arr.pop(smallest))
 
    return sorted_arr

# Test the function
print(selection_sort([5, 3, 6, 2, 10])) # [2, 3, 5, 6, 10]
