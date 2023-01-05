#include <iostream>
#include <vector>

// Function to fix the heap property at the given index
void heapify(std::vector<int>& heap, int i, int heap_size)
{
    int left = 2 * i + 1;    // Index of the left child
    int right = 2 * i + 2;   // Index of the right child
    int largest = i;         // Index of the largest element
 
    // If the left child is larger than the root
    if (left < heap_size && heap[left] > heap[largest])
        largest = left;
 
    // If the right child is larger than the largest element
    if (right < heap_size && heap[right] > heap[largest])
        largest = right;
 
    // If the largest element is not the root
    if (largest != i)
    {
        std::swap(heap[i], heap[largest]); // Swap the root with the largest element
 
        // Fix the heap property for the new subtree
        heapify(heap, largest, heap_size);
    }
}

// Heapsort function
void heapsort(std::vector<int>& heap)
{
    // Build the heap
    for (int i = heap.size() / 2 - 1; i >= 0; i--)
        heapify(heap, i, heap.size());
 
    // Sort the heap
    for (int i = heap.size() - 1; i >= 0; i--)
    {
        std::swap(heap[0], heap[i]); // Swap the root with the last element
 
        // Fix the heap property for the new subtree
        heapify(heap, 0, i);
    }
}

int main()
{
    std::vector<int> arr = {5, 3, 6, 2, 10};
 
    // Sort the array
    heapsort(arr);
 
    // Print the sorted array
    for (int i : arr)
        std::cout << i << " ";
 
    return 0;
}

