def merge(left, right):
    result = [] # List to store the merged array
 
    # Indexes to track the current position in the left and right lists
    i = 0
    j = 0
 
    # Loop until one of the lists is fully processed
    while i < len(left) and j < len(right):
        # If the element in the left list is smaller, add it to the result
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else: # Otherwise, add the element in the right list
            result.append(right[j])
            j += 1
 
    # Add the remaining elements from the left list (if any)
    result.extend(left[i:])
 
    # Add the remaining elements from the right list (if any)
    result.extend(right[j:])
 
    return result

def mergesort(arr):
    # If the array has more than one element, split it in half
    if len(arr) > 1:
        # Calculate the midpoint of the array
        mid = len(arr) // 2
 
        # Split the array into two halves
        left = arr[:mid]
        right = arr[mid:]
 
        # Sort the two halves
        left = mergesort(left)
        right = mergesort(right)
 
        # Merge the sorted halves
        arr = merge(left, right)
 
    return arr

# Test the function
print(mergesort([5, 3, 6, 2, 10])) # [2, 3, 5, 6, 10]
