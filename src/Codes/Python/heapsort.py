def heapify(heap, i, heap_size):
    left = 2 * i + 1    # Index of the left child
    right = 2 * i + 2   # Index of the right child
    largest = i         # Index of the largest element
 
    # If the left child is larger than the root
    if left < heap_size and heap[left] > heap[largest]:
        largest = left
 
    # If the right child is larger than the largest element
    if right < heap_size and heap[right] > heap[largest]:
        largest = right
 
    # If the largest element is not the root
    if largest != i:
        heap[i], heap[largest] = heap[largest], heap[i] # Swap the root with the largest element
 
        # Fix the heap property for the new subtree
        heapify(heap, largest, heap_size)

def heapsort(heap):
    # Build the heap
    for i in range(len(heap) // 2 - 1, -1, -1):
        heapify(heap, i, len(heap))
 
    # Sort the heap
    for i in range(len(heap) - 1, 0, -1):
        heap[0], heap[i] = heap[i], heap[0] # Swap the root with the last element
 
        # Fix the heap property for the new subtree
        heapify(heap, 0, i)

# Test the function
print(heapsort([5, 3, 6, 2, 10])) # [2, 3, 5, 6, 10]
