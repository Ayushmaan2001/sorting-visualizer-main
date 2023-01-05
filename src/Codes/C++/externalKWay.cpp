#include <iostream>
#include <fstream>
#include <vector>
#include <algorithm>

// Function to merge k sorted files into one
void mergeFiles(const std::vector<std::string>& fileNames, const std::string& outputFile)
{
    std::vector<std::ifstream> streams; // Vector to store the input streams
 
    // Open the input streams
    for (const auto& fileName : fileNames)
        streams.emplace_back(fileName);
 
    std::ofstream outputStream(outputFile); // Output stream to the output file
 
    std::vector<int> minValues(streams.size()); // Vector to store the current minimum value of each stream
    std::vector<bool> isFinished(streams.size()); // Vector to store whether each stream has reached the end
 
    // Loop until all streams have reached the end
    while (std::any_of(isFinished.begin(), isFinished.end(), [](bool b){ return !b; }))
    {
        // Find the minimum value among the current minimum values of the streams
        int minIndex = -1;
        int minValue = std::numeric_limits<int>::max();
        for (size_t i = 0; i < streams.size(); i++)
        {
            if (!isFinished[i] && minValues[i] < minValue)
            {
                minValue = minValues[i];
                minIndex = i;
            }
        }
 
        outputStream << minValue << " "; // Add the minimum value to the output file
 
        // Read the next value from the stream with the minimum value
        if (!(streams[minIndex] >> minValues[minIndex]))
            isFinished[minIndex] = true; // Set the finished flag if the stream has reached the end
    }
 
    // Close the streams
    for (auto& stream : streams)
        stream.close();
}

int main()
{
    std::ifstream inputStream("input.txt"); // Input stream from the input file
 
    const int chunkSize = 3; // Size of each chunk
 
    std::vector<std::string> fileNames; // Vector to store the names of the temporary files
 
    int chunkIndex = 0; // Index of the current chunk
    std::vector<int> chunk; // Current chunk
 
    int value; // Current value being read from the input file
 
    // Read the input file and split it into chunks
    while (inputStream >> value)
    {
        chunk.push_back(value);
 
        if (chunk.size() == chunkSize)
        {
            // Sort and write the current chunk to a file
            std::sort(chunk.begin(), chunk.end());
 
            std::string fileName = "temp" + std::to_string(chunkIndex) + ".txt";
            fileNames.push_back(fileName);
 
            std::ofstream outputStream(fileName);
            for (int i : chunk)
                outputStream << i << " ";
 
            chunk.clear(); // Clear the chunk for the next batch of values
            chunkIndex++;
        }
    }
 
    // If there are any remaining values in the chunk, write them to a file
    if (!chunk.empty())
    {
        std::sort(chunk.begin(), chunk.end());
 
        std::string fileName = "temp" + std::to_string(chunkIndex) + ".txt";
        fileNames.push_back(fileName);
 
        std::ofstream outputStream(fileName);
        for (int i : chunk)
            outputStream << i << " ";
    }
 
    // Merge the sorted chunks into one file
    mergeFiles(fileNames, "output.txt");
 
    return 0;
}
