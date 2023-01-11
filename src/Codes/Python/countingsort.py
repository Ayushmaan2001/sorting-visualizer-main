def counting_sort(arr, max):
    counts = [0] * (max + 1) # List to store the counts of each element
 
    # Loop through the array and count the occurences of each element
    for i in arr:
        counts[i] += 1
 
    # Initialize the sorted array
    sorted_arr = []
 
    # Loop through the counts and add the elements to the sorted array
    for i, count in enumerate(counts):
        for j in range(count):
            sorted_arr.append(i)
 
    return sorted_arr

# Test the function
print(counting_sort([5, 3, 6, 2, 10], 10)) # [2, 3, 5, 6, 10]
