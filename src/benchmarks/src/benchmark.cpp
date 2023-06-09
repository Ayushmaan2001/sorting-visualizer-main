#include "timer.h"
#include "sortings.h"
#include "inputGenerator.h"
#include <vector>
#include <iostream>
#include <iomanip>
#include <algorithm>
#include <fstream>
#include <random>
#include <chrono>
#include <algorithm>
#include <assert.h>

int num_sizes;
std::vector<int> sizes;
std::vector<Sorting *> getInternalSortingFamily(int);
std::vector<std::vector<int *>> getInputs();
int **getCopies(std::vector<std::vector<int *>> v, int x);
void clearCopies(int **a);
void cleanInputs(std::vector<std::vector<int *>> v);
std::ofstream outFile;
void clean(std::vector<Sorting *> v);
void test_all();

int main(int argc, char **argv)
{
    int user_stats = std::stoi(argv[2]);
    if (!user_stats)
    {
        outFile.close();
    }
    else{
        std::string filename(argv[3]);
        outFile.open(filename, std::ios::out);
    }

    /*
        Below code tests all algorithms
        // test_all();
        // return 0;
    */

    for (int x = 1000; x <= 10000; x += 500)
    {
        sizes.push_back(x);
    }
    num_sizes = sizes.size();
    std::vector<Sorting *> sortings = getInternalSortingFamily(std::stoi(argv[1]));
    std::vector<std::vector<int *>> inputs = getInputs();

    for (Sorting *sorter : sortings)
    {
        if (outFile.is_open())
        {
            outFile << sorter->name << std::endl;
        }
        double times[num_sizes][5];
        long long comparisons[num_sizes][5], swaps[num_sizes][5];
        for (int i = 0; i < num_sizes; i++)
        {
            int input_size = sizes[i];
            int **copy_inputs = getCopies(inputs, i);
            for (int j = 0; j < 5; j++)
            {
                {
                    Timer t;
                    sorter->sort(copy_inputs[j], input_size);
                    times[i][j] = t.Stop();
                }
                assert(std::is_sorted(copy_inputs[j], copy_inputs[j] + input_size));
                comparisons[i][j] = sorter->comparisons;
                swaps[i][j] = sorter->swaps;
                sorter->comparisons = 0;
                sorter->swaps = 0;
            }
            clearCopies(copy_inputs);
        }
        if (outFile.is_open())
        {
            outFile << "Time" << std::endl;
            outFile << "Input Size,Sorted,Nearly Sorted,Random,Nearly Reverse Sorted,Reverse Sorted" << std::endl;
            for (int i = 0; i < num_sizes; i++)
            {
                outFile << sizes[i] << ",";
                for (int j = 0; j < 5; j++)
                {
                    outFile << std::fixed << std::setprecision(6) << times[i][j] << ",";
                }
                outFile << std::endl;
            }
            outFile << std::endl;

            outFile << "Comparisons" << std::endl;
            outFile << "Input Size,Sorted,Nearly Sorted,Random,Nearly Reverse Sorted,Reverse Sorted" << std::endl;
            for (int i = 0; i < num_sizes; i++)
            {
                outFile << sizes[i] << ",";
                for (int j = 0; j < 5; j++)
                {
                    outFile << comparisons[i][j] << ",";
                }
                outFile << std::endl;
            }
            outFile << std::endl;

            outFile << "Swaps" << std::endl;
            outFile << "Input Size,Sorted,Nearly Sorted,Random,Nearly Reverse Sorted,Reverse Sorted" << std::endl;
            for (int i = 0; i < num_sizes; i++)
            {
                outFile << sizes[i] << ",";
                for (int j = 0; j < 5; j++)
                {
                    outFile << swaps[i][j] << ",";
                }
                outFile << std::endl;
            }
            outFile << std::endl;
        }
    }
    if (outFile.is_open())
        outFile.close();
    cleanInputs(inputs);
    clean(sortings);
}

void cleanInputs(std::vector<std::vector<int *>> v)
{
    for (int i = 0; i < num_sizes; i++)
    {
        for (int j = 0; j < 5; j++)
        {
            delete[] v[i][j];
        }
    }
}

void clearCopies(int **a)
{
    for (int i = 0; i < 5; i++)
    {
        delete[] a[i];
    }
    delete[] a;
}

std::vector<Sorting *> getInternalSortingFamily(int val)
{
    std::vector<Sorting *> v;
    switch (val)
    {
    case 1:
        v.push_back(new BubbleSort());
        break;
    case 2:
        v.push_back(new InsertionSort());
        break;
    case 3:
        v.push_back(new SelectionSort());
        break;
    case 4:
        v.push_back(new QuickSort());
        break;
    case 5:
        v.push_back(new MergeSort());
        break;
    case 6:
        v.push_back(new CountingSort());
        break;
    case 7:
        v.push_back(new RadixSort());
        break;
    case 8:
        v.push_back(new HeapSort());
        break;
    case 9:
        v.push_back(new GnomeSort());
        break;
    case 10:
        v.push_back(new CombSort());
        break;
    case 11:
        v.push_back(new BucketSort());
        break;
    case 12:
        v.push_back(new StrandSort());
        break;
    case 13:
        v.push_back(new StoogeSort());
        break;
    }
    return v;
}

int **getCopies(std::vector<std::vector<int *>> v, int x)
{
    int **res = new int *[5];
    for (int i = 0; i < 5; i++)
    {
        res[i] = new int[sizes[x]];
    }
    for (int i = 0; i < 5; i++)
    {
        for (int j = 0; j < sizes[x]; j++)
        {
            res[i][j] = v[x][i][j];
        }
    }
    return res;
}

std::vector<std::vector<int *>> getInputs()
{
    std::vector<std::vector<int *>> inputs(num_sizes, std::vector<int *>(5));

    for (int i = 0; i < num_sizes; i++)
    {
        int input_size = sizes[i];
        for (int j = 0; j < 5; j++)
        {
            inputs[i][j] = new int[input_size];
        }
        std::vector<int> nearly_sorted = generateNearlySortedArray(input_size);
        std::copy(nearly_sorted.begin(), nearly_sorted.end(), inputs[i][1]);

        std::vector<int> sorted = generateSortedArray(input_size);
        std::copy(sorted.begin(), sorted.end(), inputs[i][0]);

        std::vector<int> random_array = generateRandomizedArray(input_size);
        std::copy(random_array.begin(), random_array.end(), inputs[i][2]);

        std::vector<int> reverse_sorted = generateReverseSortedArray(input_size);
        std::copy(reverse_sorted.begin(), reverse_sorted.end(), inputs[i][4]);

        std::vector<int> nearly_reverse_sorted = generateNearlyReverseSortedArray(input_size);
        std::copy(nearly_reverse_sorted.begin(), nearly_reverse_sorted.end(), inputs[i][3]);
    }
    return inputs;
}

void clean(std::vector<Sorting *> v)
{
    while (!v.empty())
    {
        delete v[v.size() - 1];
        v.pop_back();
    }
}

void test_all()
{
    int *inputs[5];
    int input_size = 5000;
    for (int i = 0; i < 5; i++)
    {
        inputs[i] = new int[input_size];
    }
    std::vector<int> nearly_sorted = generateNearlySortedArray(input_size);
    std::copy(nearly_sorted.begin(), nearly_sorted.end(), inputs[1]);

    std::vector<int> sorted = generateSortedArray(input_size);
    std::copy(sorted.begin(), sorted.end(), inputs[0]);

    std::vector<int> random_array = generateRandomizedArray(input_size);
    std::copy(random_array.begin(), random_array.end(), inputs[2]);

    std::vector<int> reverse_sorted = generateReverseSortedArray(input_size);
    std::copy(reverse_sorted.begin(), reverse_sorted.end(), inputs[4]);

    std::vector<int> nearly_reverse_sorted = generateNearlyReverseSortedArray(input_size);
    std::copy(nearly_reverse_sorted.begin(), nearly_reverse_sorted.end(), inputs[3]);

    Sorting *sorter[] = {new BubbleSort(), new SelectionSort(), new InsertionSort(),
                         new QuickSort(), new MergeSort(), new CountingSort(), new RadixSort(),
                         new CombSort(), new StrandSort(), new HeapSort()};
    double times[5][10];
    long long comparisons[5][10], swaps[5][10];
    for (int j = 0; j < 5; j++)
    {
        for (int i = 0; i < 10; i++)
        {
            int copy_arr[5000];
            std::copy(inputs[j], inputs[j] + 5000, copy_arr);
            {
                Timer t;
                sorter[i]->sort(copy_arr, 5000);
                times[j][i] = t.Stop();
            }
            assert(std::is_sorted(copy_arr, copy_arr + 5000));
            comparisons[j][i] = sorter[i]->comparisons;
            swaps[j][i] = sorter[i]->swaps;
        }
    }

    if (outFile.is_open())
    {
        outFile << "Time" << std::endl;
        outFile << "Input Type,Bubble Sort,Selection Sort,Insertion Sort,Quick Sort,Merge Sort,Counting Sort,Radix Sort,Comb Sort,Strand Sort,Heap Sort"
                << "\n";
        for (int i = 0; i < 5; i++)
        {
            outFile << "x,";
            for (int j = 0; j < 10; j++)
            {
                outFile << std::fixed << std::setprecision(6) << times[i][j] << ",";
            }
            outFile << std::endl;
        }

        outFile << std::endl
                << std::endl;

        outFile << "Comparison" << std::endl;
        outFile << "Input Type,Bubble Sort,Selection Sort,Insertion Sort,Quick Sort,Merge Sort,Counting Sort,Radix Sort,Comb Sort,Strand Sort,Heap Sort"
                << "\n";
        for (int i = 0; i < 5; i++)
        {
            outFile << "x,";
            for (int j = 0; j < 10; j++)
            {
                outFile << comparisons[i][j] << ",";
            }
            outFile << std::endl;
        }

        outFile << std::endl
                << std::endl;

        outFile << "Swaps" << std::endl;
        outFile << "Input Type,Bubble Sort,Selection Sort,Insertion Sort,Quick Sort,Merge Sort,Counting Sort,Radix Sort,Comb Sort,Strand Sort,Heap Sort"
                << "\n";
        for (int i = 0; i < 5; i++)
        {
            outFile << "x,";
            for (int j = 0; j < 10; j++)
            {
                outFile << swaps[i][j] << ",";
            }
            outFile << std::endl;
        }
        outFile.close();
    }
}
