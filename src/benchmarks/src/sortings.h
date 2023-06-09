#ifndef SORTINGS_H
#define SORTINGS_H
#include<string>
#include<list>

class Sorting {
    public:
        std::string name;
        long long comparisons = 0;
        long long swaps = 0;
        virtual void sort(int arr[], int n) {
        }
};

class BubbleSort : public Sorting {
    public:
        BubbleSort();
        void sort(int arr[], int n) override;
};

class InsertionSort : public Sorting {
    public:
        InsertionSort();
        void sort(int arr[], int n) override;
};

class SelectionSort : public Sorting {
    public:
        SelectionSort();
        void sort(int arr[], int n) override;
        int findSmallest(int *arr, int start, int end);
};


class QuickSort : public Sorting {
    public:
        QuickSort();
        void sort(int arr[], int n) override;
        int partition(int *arr, int start, int end);
        void quicksort(int *arr, int start, int end);
};

class MergeSort : public Sorting {
    public:
        MergeSort();
        void sort(int arr[], int n) override;
        void merge(int arr[], int left, int mid, int right);
        void mergeSort(int arr[], int left, int right);
};

class CountingSort : public Sorting {
    public:
        CountingSort();
        void sort(int arr[], int n) override;
};

class RadixSort : public Sorting {
    public:
        RadixSort();
        void sort(int arr[], int n) override;
        int getMax(int arr[], int size);
        void countingSort(int arr[], int size, int place);
        
};

class BucketSort : public Sorting {
    public:
        BucketSort();
        void sort(int arr[], int n) override;
        void bucketSort(int* arr, int n, int numBuckets);
        bool compare(int a, int b);
};

class GnomeSort : public Sorting {
    public:
        GnomeSort();
        void sort(int arr[], int n) override;
}; 

class HeapSort : public Sorting {
    public:
       HeapSort();
       void sort(int arr[], int n) override;
       void heapify(int arr[], int n, int i);
};


class CombSort : public Sorting {
    public:
       CombSort();
       void sort(int arr[], int n) override;
       int getNextGap(int gap);
};

class StrandSort : public Sorting {
    public:
        StrandSort();
        void sort(int arr[], int n) override;
        void strandSort(std::list<int> &ip, std::list<int> &op);
};

class StoogeSort : public Sorting {
    public:
        StoogeSort();
        void sort(int arr[], int n) override;
        void stoogeSort(int arr[], int start, int end);
        void swap(int& a, int& b);
};

#endif