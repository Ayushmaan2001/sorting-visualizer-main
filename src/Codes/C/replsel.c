#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

#define MEMORY_SIZE 10

typedef struct {
    int value;
    int fileNum;
} Record;

int comparator(const void* a, const void* b) {
    const Record* recordA = (const Record*)a;
    const Record* recordB = (const Record*)b;

    if (recordA->value < recordB->value)
        return -1;
    else if (recordA->value > recordB->value)
        return 1;
    else
        return 0;
}


void merge(Record* outputBuffer, int bufferSize, FILE** files, int numFiles) {
    int i, j;
    Record minRecord;
    int minIndex;
    
    for (i = 0; i < bufferSize; i++) {
        minRecord.value = INT_MAX;
        minIndex = -1;

        for (j = 0; j < numFiles; j++) {
            if (files[j] != NULL && files[j] != EOF) {
                Record record;
                fread(&record, sizeof(Record), 1, files[j]);

                if (record.value < minRecord.value) {
                    minRecord = record;
                    minIndex = j;
                }
            }
        }

        if (minIndex != -1) {
            outputBuffer[i] = minRecord;
            fseek(files[minIndex], sizeof(Record), SEEK_CUR);
        }
    }
}

void replacementSelectionSort(FILE* input, FILE* output) {
    Record memory[MEMORY_SIZE];
    Record outputBuffer[MEMORY_SIZE];
    FILE** files = (FILE**)malloc(MEMORY_SIZE * sizeof(FILE*));
    int numFiles = 0;
    int i, j;

    for (i = 0; i < MEMORY_SIZE; i++)
        files[i] = NULL;

    while (!feof(input)) {
        for (i = 0; i < MEMORY_SIZE && !feof(input); i++) {
            Record record;
            fread(&record, sizeof(Record), 1, input);
            memory[i] = record;
        }

        if (i < MEMORY_SIZE)
            i--;

        qsort(memory, i, sizeof(Record), comparator);

        FILE* tempFile = tmpfile();
        files[numFiles++] = tempFile;

        for (j = 0; j < i; j++)
            fwrite(&memory[j], sizeof(Record), 1, tempFile);

        rewind(tempFile);
    }

    merge(outputBuffer, MEMORY_SIZE, files, numFiles);

    while (numFiles > 0) {
        fwrite(outputBuffer, sizeof(Record), MEMORY_SIZE, output);
        merge(outputBuffer, MEMORY_SIZE, files, numFiles);
    }

    for (i = 0; i < numFiles; i++)
        fclose(files[i]);

    free(files);
}
