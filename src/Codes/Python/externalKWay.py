def merge_files(file_names, output_file):
    streams = [] # List to store the input streams
 
    # Open the input streams
    for file_name in file_names:
        streams.append(open(file_name, 'r'))
 
    output_stream = open(output_file, 'w') # Output stream to the output file
 
    min_values = [None] * len(streams) # List to store the current minimum value of each stream
    is_finished = [False] * len(streams) # List to store whether each stream has reached the end
 
    # Loop until all streams have reached the end
    while any(not finished for finished in is_finished):
        # Find the minimum value among the current minimum values of the streams
        min_index = -1
        min_value = float('inf')
        for i, stream in enumerate(streams):
            if not is_finished[i] and min_values[i] < min_value:
                min_value = min_values[i]
                min_index = i
 
        output_stream.write(str(min_value) + ' ') # Add the minimum value to the output file
 
        # Read the next value from the stream with the minimum value
        line = streams[min_index].readline()
        if line:
            min_values[min_index] = int(line.strip())
        else:
            is_finished[min_index] = True # Set the finished flag if the stream has reached the end
 
    # Close the streams
    for stream in streams:
        stream.close()

def main():
    chunk_size = 3 # Size of each chunk
 
    file_names = [] # List to store the names of the temporary files
 
    chunk_index = 0 # Index of the current chunk
    chunk = [] # Current chunk
 
    # Read the input file and split it into chunks
    with open('input.txt', 'r') as input_stream:
        for line in input_stream:
            value = int(line.strip())
            chunk.append(value)
 
            if len(chunk) == chunk_size:
                # Sort and write the current chunk to a file
                chunk.sort()
 
                file_name = 'temp' + str(chunk_index) + '.txt'
                file_names.append(file_name)
 
                with open(file_name, 'w') as output_stream:
                    for i in chunk:
                        output_stream.write(str(i) + ' ')
 
                chunk.clear() # Clear the chunk for the next batch of values
                chunk_index += 1
 
    # If there are any remaining values in the chunk, write them to a file
    if chunk:
        # Sort and write the current chunk to a file
        chunk.sort()

        file_name = 'temp' + str(chunk_index) + '.txt'
        file_names.append(file_name)
 
        with open(file_name, 'w') as output_stream:
            for i in chunk:
                output_stream.write(str(i) + ' ')
 
    # Merge the sorted chunks into one file
    merge_files(file_names, 'output.txt')

if __name__ == '__main__':
    main()
