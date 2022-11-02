import React, { useState } from 'react';
import generateRandomizedArray from '../../helpers/randomizeArray';
import SortingBar from '../SortingBar/SortingBar';
import HomeHeader from '../HomeHeader/HomeHeader';
import '../../index.css';


//algorithms import
import selectionSort from '../../algorithms/selection-sort';
import bubbleSort from '../../algorithms/bubble-sort';
import insertionSort from '../../algorithms/insertion-sort';
import mergeSortWrapper from '../../algorithms/merge-sort';
import quickSortLWrapper from '../../algorithms/quick-sort-l';
import countingSort from '../../algorithms/counting-sort';
import radixSort from '../../algorithms/radix-sort';
import heapSort from '../../algorithms/heap-sort';

//CodeEditors import
import SelectionSort from '../CodeEdior/SelectionSort';
import RadixSort from '../CodeEdior/RadixSort';
import QuickSort from '../CodeEdior/QuickSort';
import MergeSort from '../CodeEdior/MergeSort';
import InsertionSort from '../CodeEdior/InsertionSort';
import HeapSort from '../CodeEdior/HeapSort'
import CountingSort from '../CodeEdior/CountingSort'
import BubbleSort from '../CodeEdior/BubbleSort';

const EditorSelector = ({ algo, ...props }) => {
  console.log(algo);
  switch(algo){
    case"Bubble Sort":
      return <BubbleSort {...props} />;
    case "Insertion Sort":
      return <InsertionSort {...props}/>
    case "Selection Sort":
      return <SelectionSort {...props}/>
    case "QuickSort":
      return <QuickSort {...props}/>
    case "Merge Sort":
      return <MergeSort {...props}/>
    case "Counting Sort":
      return <CountingSort {...props}/>
    case "Radix Sort":
      return <RadixSort {...props}/>
    case "Heap Sort":
      return <HeapSort {...props}/>
    default:
      return null;
  }
}

const Home = () => {
  const arraySize = 100;
  const [isVisualizing, setIsVisualizing] = useState(false);
  const [randomizedArray, setRandomizedArray] = useState(
    generateRandomizedArray({ arraySize: arraySize })
  );
  const [colorsArray, setColorsArray] = useState(
    new Array(randomizedArray.length).fill(0)
  );
  const [visualizationSpeed, setVisualizationSpeed] = useState(30);
  const [maxItem, setMaxItem] = useState(Math.max(...randomizedArray));
  const [currentAlgorithm, setCurrentAlgorithm] = useState('Bubble Sort');
  const algorithms = [
    'Bubble Sort',
    'Insertion Sort',
    'Selection Sort',
    'QuickSort',
    'Merge Sort',
    'Counting Sort',
    'Radix Sort',
    'Heap Sort'
  ];

  const onRandomize = () => {
    if (isVisualizing) return;
    const nextRandomizedArray = generateRandomizedArray({
      arraySize: randomizedArray.length,
    });
    setRandomizedArray(nextRandomizedArray);
    setMaxItem(Math.max(...nextRandomizedArray));
  };
  const onInputSizeChanged = (val) => {
    if (isVisualizing) return;
    const nextRandomizedArray = generateRandomizedArray({ arraySize: val });
    setRandomizedArray(nextRandomizedArray);
    setMaxItem(Math.max(...nextRandomizedArray));
    setColorsArray(new Array(nextRandomizedArray.length).fill(0));
  };
  const onSpeedChange = (val) => {
    if (isVisualizing) return;
    setVisualizationSpeed(100 - val + 1);
  };

  const onVisualize = async () => {
    if (isVisualizing) return;

    setIsVisualizing(true);
    switch (currentAlgorithm) {
      case 'Selection Sort':
        await selectionSort({
          array: randomizedArray,
          setArray: setRandomizedArray,
          visualizationSpeed: visualizationSpeed,
          setColorsArray: setColorsArray,
        });
        break;

      case 'Bubble Sort':
        await bubbleSort({
          array: randomizedArray,
          setArray: setRandomizedArray,
          visualizationSpeed: visualizationSpeed,
          setColorsArray: setColorsArray,
        });
        break;

      case 'Insertion Sort':
        await insertionSort({
          array: randomizedArray,
          setArray: setRandomizedArray,
          visualizationSpeed: visualizationSpeed,
          setColorsArray: setColorsArray,
        });
        break;

      case 'QuickSort':
        await quickSortLWrapper({
          array: randomizedArray,
          leftIndex: 0,
          rightIndex: randomizedArray.length - 1,
          setArray: setRandomizedArray,
          visualizationSpeed: visualizationSpeed,
          setColorsArray: setColorsArray,
        });
        break;
      
      case 'Merge Sort':
        await mergeSortWrapper({
          array: randomizedArray,
          leftIndex: 0,
          rightIndex: randomizedArray.length - 1,
          setArray: setRandomizedArray,
          visualizationSpeed: visualizationSpeed,
          setColorsArray: setColorsArray,
        });
        break;
      case 'Counting Sort':
        await countingSort({
          array:randomizedArray,
          setArray:setRandomizedArray,
          visualizationSpeed:visualizationSpeed,
          setColorsArray:setColorsArray
        });
        break;
        case 'Radix Sort':
        await radixSort({
          array:randomizedArray,
          setArray:setRandomizedArray,
          visualizationSpeed:visualizationSpeed,
          setColorsArray:setColorsArray
        });
        break;
        case 'Heap Sort':
        await heapSort({
          array:randomizedArray,
          setArray:setRandomizedArray,
          visualizationSpeed:visualizationSpeed,
          setColorsArray:setColorsArray
        });
        break;

      default:
        break;
    }

    setIsVisualizing(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <HomeHeader
        algorithms={algorithms}
        onAlgorithmChange={setCurrentAlgorithm}
        currentAlgorithm={currentAlgorithm}
        onRandomize={onRandomize}
        onInputSizeChanged={onInputSizeChanged}
        onSpeedChange={onSpeedChange}
        onStart={onVisualize}
        isVisualizing={isVisualizing}
      />
      <div
        style={{
          backgroundColor: '#0D1929',
          display: 'flex',
          height: '100%',
          width: '100vw',
          flexDirection: 'row',
          alignItems: 'end',
          padding: '0px 0px 0px 0px',
          minHeight:'34rem'
        }}
      >
        {randomizedArray.map((item, index) => {
          const height = (item / maxItem) * 100;
          const width = (1 / randomizedArray.length) * 100;
          return (
            <div
              key={index}
              style={{
                height: '100%',
                display: 'flex',
                alignItems: 'end',
                width: `${width}%`,
              }}
            >
              <SortingBar
                colorCode={colorsArray[index]}
                style={{
                  height: `calc(${height}% - 20px)`,
                  width: '100%',
                  margin: 'auto 10% 0 10%',
                }}
              ></SortingBar>
            </div>
          );
        })}
      </div>
      <EditorSelector algo={currentAlgorithm} val={'sample'} />
    </div>
  );
};

export default Home;
