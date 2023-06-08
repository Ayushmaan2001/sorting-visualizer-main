#include "sortings.h"
#include <vector>
#include <algorithm>
#include <iostream>

BubbleSort::BubbleSort()
{
    name = "Bubble Sort";
}
InsertionSort::InsertionSort()
{
    name = "Insertion Sort";
}
SelectionSort::SelectionSort()
{
    name = "Selection Sort";
}
QuickSort::QuickSort()
{
    name = "Quick Sort";
}
MergeSort::MergeSort()
{
    name = "Merge Sort";
}
CountingSort::CountingSort()
{
    name = "Counting Sort";
}
RadixSort::RadixSort()
{
    name = "Radix Sort";
}
HeapSort::HeapSort()
{
    name = "Heap Sort";
}
GnomeSort::GnomeSort()
{
    name = "Gnome Sort";
}
BucketSort::BucketSort()
{
    name = "Bucket Sort";
}
StrandSort::StrandSort()
{
    name = "Strand Sort";
}
StoogeSort::StoogeSort()
{
    name = "Stooge Sort";
}
CombSort::CombSort()
{
    name = "Comb Sort";
}

void BubbleSort::sort(int arr[], int n)
{
    bool sorted = false;

    while (!sorted)
    {
        sorted = true;

        for (int i = 0; i < n - 1; i++)
        {
            comparisons++;
            if (arr[i] > arr[i + 1])
            {

                swaps++;
                std::swap(arr[i], arr[i + 1]);
                sorted = false;
            }
        }
    }
}

void InsertionSort::sort(int arr[], int n)
{

    for (int i = 1; i < n; i++)
    {
        int current = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > current)
        {
            comparisons++;
            swaps++;
            arr[j + 1] = arr[j];
            j--;
        }
        comparisons++;
        arr[j + 1] = current;
    }
}

int SelectionSort::findSmallest(int *arr, int start, int end)
{
    int smallest = arr[start];
    int smallestIndex = start;

    for (int i = start + 1; i < end; i++)
    {
        comparisons++;
        if (arr[i] < smallest)
        {

            smallest = arr[i];
            smallestIndex = i;
        }
    }

    return smallestIndex;
}

void SelectionSort::sort(int arr[], int n)
{

    for (int i = 0; i < n; i++)
    {

        int smallestIndex = findSmallest(arr, i, n);

        if(i != smallestIndex) swaps++;
        std::swap(arr[i], arr[smallestIndex]);
    }
}

int QuickSort::partition(int *arr, int start, int end)
{
    int pivot = arr[end];
    int i = start - 1;

    for (int j = start; j < end; j++)
    {

        comparisons++;
        if (arr[j] < pivot)
        {
            i++;
            swaps++;
            std::swap(arr[i], arr[j]);
        }
    }

    swaps++;
    std::swap(arr[i + 1], arr[end]);
    return i + 1;
}

void QuickSort::quicksort(int *arr, int start, int end)
{
    if (start < end)
    {
        int pivotIndex = partition(arr, start, end);
        quicksort(arr, start, pivotIndex - 1);
        quicksort(arr, pivotIndex + 1, end);
    }
}

void QuickSort::sort(int arr[], int n)
{
    quicksort(arr, 0, n - 1);
}

void MergeSort::merge(int arr[], int left, int mid, int right)
{
    int i, j, k;
    int n1 = mid - left + 1;
    int n2 = right - mid;

    int L[n1], R[n2];

    for (i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];

    i = 0;
    j = 0;
    k = left;

    while (i < n1 && j < n2)
    {
        comparisons++;
        if (L[i] <= R[j])
        {
            arr[k] = L[i];
            i++;
        }
        else
        {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1)
    {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2)
    {
        arr[k] = R[j];
        j++;
        k++;
    }
}

void MergeSort::mergeSort(int arr[], int left, int right)
{
    if (left < right)
    {
        int mid = left + (right - left) / 2;

        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);

        merge(arr, left, mid, right);
    }
}

void MergeSort::sort(int arr[], int n)
{
    mergeSort(arr, 0, n - 1);
}

void CountingSort::sort(int arr[], int n)
{
    int maxElement = arr[0];
    for (int i = 1; i < n; i++)
    {
        comparisons++;
        if (arr[i] > maxElement)
            maxElement = arr[i];
    }

    int count[maxElement + 1];

    for (int i = 0; i <= maxElement; i++)
    {
        count[i] = 0;
    }

    for (int i = 0; i < n; i++)
        count[arr[i]]++;

    for (int i = 0, p = 0; i <= maxElement; i++)
    {
        for (int j = 0; j < count[i]; j++)
        {
            arr[p++] = i;
        }
    }
}

void HeapSort::heapify(int arr[], int n, int i)
{
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < n)
        comparisons++;
    if (left < n && arr[left] > arr[largest])
        largest = left;

    if (right < n)
        comparisons++;
    if (right < n && arr[right] > arr[largest])
        largest = right;

    if (largest != i)
    {
        swaps++;
        std::swap(arr[i], arr[largest]);
        heapify(arr, n, largest);
    }
}

void HeapSort::sort(int arr[], int n)
{

    for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);

    for (int i = n - 1; i >= 0; i--)
    {
        swaps++;
        std::swap(arr[0], arr[i]);
        heapify(arr, i, 0);
    }
}

int RadixSort::getMax(int arr[], int size)
{
    int max = arr[0];
    for (int i = 1; i < size; i++)
    {
        comparisons++;
        if (arr[i] > max)
            max = arr[i];
    }
    return max;
}

void RadixSort::countingSort(int arr[], int size, int place)
{
    const int radix = 10;
    int count[radix] = {0};
    int output[size];

    for (int i = 0; i < size; i++)
        count[(arr[i] / place) % radix]++;

    for (int i = 1; i < radix; i++)
        count[i] += count[i - 1];

    for (int i = size - 1; i >= 0; i--)
    {
        output[count[(arr[i] / place) % radix] - 1] = arr[i];
        count[(arr[i] / place) % radix]--;
    }

    for (int i = 0; i < size; i++)
        arr[i] = output[i];
}

void RadixSort::sort(int arr[], int n)
{
    int max = getMax(arr, n);
    for (int place = 1; max / place > 0; place *= 10)
        countingSort(arr, n, place);
}

int CombSort::getNextGap(int gap)
{
    gap = (gap * 10) / 13;
    if (gap < 1)
        return 1;
    return gap;
}

void CombSort::sort(int arr[], int n)
{
    int gap = n;
    bool swapped = true;

    while (gap != 1 || swapped)
    {
        gap = getNextGap(gap);
        swapped = false;

        for (int i = 0; i < n - gap; i++)
        {
            comparisons++;
            if (arr[i] > arr[i + gap])
            {
                swaps++;
                std::swap(arr[i], arr[i + gap]);
                swapped = true;
            }
        }
    }
}

void StrandSort::strandSort(std::list<int> &ip, std::list<int> &op)
{
    if (ip.empty())
        return;

    std::list<int> sublist;
    sublist.push_back(ip.front());
    ip.pop_front();

    for (auto it = ip.begin(); it != ip.end();)
    {

        comparisons++;
        if (*it > sublist.back())
        {
            sublist.push_back(*it);

            it = ip.erase(it);
        }

        else
            it++;
    }
    op.merge(sublist);
    strandSort(ip, op);
}

void StrandSort::sort(int arr[], int size)
{
    std::list<int> ip(arr, arr + size);
    std::list<int> op;
    strandSort(ip, op);
    int index = 0;
    for (int element : op)
    {
        arr[index++] = element;
    }
}

void StoogeSort::swap(int &a, int &b)
{
    int temp = a;
    a = b;
    b = temp;
}

void StoogeSort::stoogeSort(int arr[], int start, int end)
{
    if (start >= end)
        return;

    comparisons++;
    if (arr[start] > arr[end])
    {
        swaps++;
        swap(arr[start], arr[end]);
    }

    if (end - start + 1 > 2)
    {
        int third = (end - start + 1) / 3;

        stoogeSort(arr, start, end - third);

        stoogeSort(arr, start + third, end);

        stoogeSort(arr, start, end - third);
    }
}

void StoogeSort::sort(int arr[], int n)
{
    stoogeSort(arr, 0, n - 1);
}

void BucketSort::bucketSort(int *arr, int n, int numBuckets)
{
    std::vector<std::vector<int>> buckets(numBuckets);
    std::cout << "hi" << std::endl;
    for (int i = 0; i < n; i++)
    {
        int bucketIndex = numBuckets * arr[i] / (n + 1);
        buckets[bucketIndex].push_back(arr[i]);
    }
    std::cout << "hi" << std::endl;
    for (int i = 0; i < numBuckets; i++)
    {
        std::sort(buckets[i].begin(), buckets[i].end(), [&](int a, int b){
            comparisons++;
            if(a > b) swaps++;
            return a < b; 
        });
    }
    std::cout << "hi" << std::endl;
    int index = 0;
    for (int i = 0; i < numBuckets; i++)
    {
        for (int j = 0; j < buckets[i].size(); j++)
        {
            arr[index++] = buckets[i][j];
        }
    }
}

void BucketSort::sort(int arr[], int n)
{
    bucketSort(arr, n, n);
}

void GnomeSort::sort(int arr[], int n)
{
    int index = 0;

    while (index < n)
    {
        if (index > 0)
            comparisons++;
        if (index == 0 || arr[index] >= arr[index - 1])
        {
            index++;
        }
        else
        {
            swaps++;
            std::swap(arr[index], arr[index - 1]);
            index--;
        }
    }
}