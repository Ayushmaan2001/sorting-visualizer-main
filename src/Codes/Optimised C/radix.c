// Queue data structure
#define MAX_QUEUE_SIZE 1000

typedef struct {
    int items[MAX_QUEUE_SIZE];
    int front;
    int rear;
} Queue;

// Initialize the queue
void initQueue(Queue* queue) {
    queue->front = 0;
    queue->rear = -1;
}

// Check if the queue is empty
int isEmpty(Queue* queue) {
    return (queue->rear < queue->front);
}

// Insert an element at the rear of the queue
void enqueue(Queue* queue, int value) {
    queue->items[++(queue->rear)] = value;
}

// Remove and return the element at the front of the queue
int dequeue(Queue* queue) {
    return queue->items[(queue->front)++];
}

// Get the maximum value in the array
int getMax(int arr[], int n) {
    int max = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Counting sort for each digit using queues
void countingSort(int arr[], int n, int exp) {
    const int radix = 10; // Base of the number system
    Queue buckets[radix]; // Queue array for each digit (0-9)
  
    // Initialize the queues
    for (int i = 0; i < radix; i++) {
        initQueue(&buckets[i]);
    }
  
    // Place elements into the appropriate bucket
    for (int i = 0; i < n; i++) {
        int digit = (arr[i] / exp) % radix;
        enqueue(&buckets[digit], arr[i]);
    }
  
    // Gather elements from the buckets into the output array
    int index = 0;
    for (int i = 0; i < radix; i++) {
        while (!isEmpty(&buckets[i])) {
            arr[index++] = dequeue(&buckets[i]);
        }
    }
}

// Radix Sort
void radixSort(int arr[], int n) {
    int max = getMax(arr, n);
  
    // Perform counting sort for each digit from least significant to most significant
    for (int exp = 1; max / exp > 0; exp *= 10) {
        countingSort(arr, n, exp);
    }
}
