#include <iostream>
#include <vector>

// Function to get the digit at the given place value
int getDigit(int num, int place)
{
    int digit = 0;
    while (place > 0)
    {
        digit = num % 10;
        num /= 10;
        place--;
    }
    return digit;
}

// Function to get the number of digits in the largest number
int getMaxNumDigits(const std::vector<int>& arr)
{
    int max_digits = 0;
    for (int i : arr)
    {
        int digits = 0;
        int num = i;
        while (num > 0)
        {
            digits++;
            num /= 10;
        }
        max_digits = std::max(max_digits, digits);
    }
    return max_digits;
}

// Radix sort function
void radixSort(std::vector<int>& arr)
{
    int max_digits = getMaxNumDigits(arr); // Get the number of digits in the largest number
 
    // Loop through each place value (starting with the ones place)
    for (int place = 1; place <= max_digits; place++)
    {
        // Create a bucket for each digit
        std::vector<std::vector<int>> buckets(10);
 
        // Loop through the array and add each element to the appropriate bucket
        for (int i : arr)
            buckets[getDigit(i, place)].push_back(i);
 
        // Flatten the buckets back into
        // Flatten the buckets back into the array
        arr.clear();
        for (const auto& bucket : buckets)
            arr.insert(arr.end(), bucket.begin(), bucket.end());
    }
}

int main()
{
    std::vector<int> arr = {5, 3, 6, 2, 10};
 
    // Sort the array
    radixSort(arr);
 
    // Print the sorted array
    for (int i : arr)
        std::cout << i << " ";
 
    return 0;
}
