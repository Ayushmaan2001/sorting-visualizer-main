def get_digit(num, place):
    digit = 0
    while place > 0:
        digit = num % 10
        num //= 10
        place -= 1
    return digit

def get_max_num_digits(arr):
    max_digits = 0
    for i in arr:
        digits = 0
        num = i
        while num > 0:
            digits += 1
            num //= 10
        max_digits = max(max_digits, digits)
    return max_digits

def radix_sort(arr):
    max_digits = get_max_num_digits(arr) # Get the number of digits in the largest number
 
    # Loop through each place value (starting with the ones place)
    for place in range(1, max_digits + 1):
        # Create a bucket for each digit
        buckets = [[] for _ in range(10)]
 
        # Loop through the array and add each element to the appropriate bucket
        for i in arr:
            buckets[get_digit(i, place)].append(i)
 
        # Flatten the buckets back into the array
        arr.clear()
        for bucket in buckets:
            arr.extend(bucket)

# Test the function
print(radix_sort([5, 3, 6, 2, 10])) # [2, 3, 5, 6, 10]
