import React, { useState } from 'react';
import generateRandomizedArray from '../../helpers/randomizeArray';
import SortingBar from '../SortingBar/SortingBar';
import HomeHeader from '../HomeHeader/HomeHeader';
import '../../index.css';

//algorithms import
import { selectionSort, bubbleSort, insertionSort, mergeSortWrapper, quickSortLWrapper, countingSort, radixSort, heapSort, KWAYEXTSORT, externalReplacementSort } from '../../algorithms';

//CodeEditors import
import {SelectionSort, RadixSort, QuickSort, MergeSort, InsertionSort, HeapSort, CountingSort, BubbleSort, KwayExternal, ReplacementSort} from '../CodeEdior';

//import graphs
import { BubbleSortGraph } from '../GraphShows';
//Runs Bars Import
import RunsBars from '../RunsBars/RunsBars';

const Home = () => {
  const arraySize = 40;
  const [isVisualizing, setIsVisualizing] = useState(false);
  const [runsArray1, setrunsArray1] = useState([]);
  const [unsortedRunsArray1, setunsortedRunsArray1] = useState([]);
  const [unsortedRunsArray2,setunsortedRunsArray2] = useState([]);
  const [runsArray2, setrunsArray2] = useState([]);
  const [runsArray, setrunsArray] = useState([]);
  const [randomizedArray, setRandomizedArray] = useState(
    generateRandomizedArray({ arraySize: arraySize })
  );
  const [colorsArray, setColorsArray] = useState(
    new Array(randomizedArray.length).fill(0)
  );
  const [visualizationSpeed, setVisualizationSpeed] = useState(30);
  const [maxItem, setMaxItem] = useState(Math.max(...randomizedArray));
  const EditorSelector = ({ algo, ...props }) => {
    switch (algo) {
      case "Bubble Sort":
        return <BubbleSort {...props} />;
      case "Insertion Sort":
        return <InsertionSort {...props} />
      case "Selection Sort":
        return <SelectionSort {...props} />
      case "QuickSort":
        return <QuickSort {...props} />
      case "Merge Sort":
        return <MergeSort {...props} />
      case "Counting Sort":
        return <CountingSort {...props} />
      case "Radix Sort":
        return <RadixSort {...props} />
      case "Heap Sort":
        return <HeapSort {...props} />
      case "K-Way External Sort":
        return <KwayExternal {...props} array={randomizedArray} />
      case "Replacement Ext Sort":
        return <ReplacementSort {...props} runs={runsArray} />
      default:
        return null;
    }
  }
  const GraphSelector = ({ algo, ...props }) => {
    switch (algo) {
      case "Bubble Sort":
        return <BubbleSortGraph {...props} />;
      // case "Insertion Sort":
      //   return <InsertionSort {...props} />
      // case "Selection Sort":
      //   return <SelectionSort {...props} />
      // case "QuickSort":
      //   return <QuickSort {...props} />
      // case "Merge Sort":
      //   return <MergeSort {...props} />
      // case "Counting Sort":
      //   return <CountingSort {...props} />
      // case "Radix Sort":
      //   return <RadixSort {...props} />
      // case "Heap Sort":
      //   return <HeapSort {...props} />
      // case "K-Way External Sort":
      //   return <KwayExternal {...props} array={randomizedArray} />
      // case "Replacement Ext Sort":
      //   return <ReplacementSort {...props} runs={runsArray} />
      default:
        return null;
    }
  }
  const [currentAlgorithm, setCurrentAlgorithm] = useState('Bubble Sort');
  const algorithms = [
    'Bubble Sort',
    'Insertion Sort',
    'Selection Sort',
    'QuickSort',
    'Merge Sort',
    'Counting Sort',
    // 'Radix Sort',
    'Heap Sort',
    'K-Way External Sort',
    // 'Replacement Ext Sort'
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
          array: randomizedArray,
          setArray: setRandomizedArray,
          visualizationSpeed: visualizationSpeed,
          setColorsArray: setColorsArray
        });
        break;
      // case 'Radix Sort':
      //   await radixSort({
      //     array: randomizedArray,
      //     setArray: setRandomizedArray,
      //     visualizationSpeed: visualizationSpeed,
      //     setColorsArray: setColorsArray
      //   });
      //   break;
      case 'Heap Sort':
        await heapSort({
          array: randomizedArray,
          setArray: setRandomizedArray,
          visualizationSpeed: visualizationSpeed,
          setColorsArray: setColorsArray
        });
        break;
      case 'K-Way External Sort':
        await KWAYEXTSORT.k_way_external({
          array: randomizedArray,
          setArray: setRandomizedArray,
          visualizationSpeed: visualizationSpeed,
          setColorsArray: setColorsArray,
          setrunsArray: setrunsArray,
          setrunsArray1: setrunsArray1,
          setrunsArray2: setrunsArray2,
          runsArray1: runsArray1,
          runsArray2: runsArray2,
          unsortedRunsArray1:unsortedRunsArray1,
          unsortedRunsArray2:unsortedRunsArray2,
          setunsortedRunsArray2: setunsortedRunsArray2,
          setunsortedRunsArray1: setunsortedRunsArray1
        });
        break;
      // case 'Replacement Ext Sort':
      //   await externalReplacementSort({
      //     array: randomizedArray,
      //     setArray: setRandomizedArray,
      //     visualizationSpeed: visualizationSpeed,
      //     setColorsArray: setColorsArray,
      //     setrunsArray: setrunsArray,
      //     setrunsArray1: setrunsArray1,
      //     setrunsArray2: setrunsArray2,
      //     runsArray1: runsArray1,
      //     runsArray2: runsArray2,
      //     unsortedRunsArray1: unsortedRunsArray1,
      //     unsortedRunsArray2: unsortedRunsArray2,
      //     setunsortedRunsArray2: setunsortedRunsArray2,
      //     setunsortedRunsArray1: setunsortedRunsArray1
      //   });
      //   break;
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
      <div>
        <GraphSelector algo={currentAlgorithm} val={'sample'}/>
      </div>
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100vw',
          flexDirection: 'row',
          alignItems: 'end',
          padding: '0px 0px 0px 0px',
          minHeight: '34rem'
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
                position:'relative'
              }}
            >
              <SortingBar
                colorCode={colorsArray[index]}
                style={{
                  height: `calc(${height}% - 20px)`,
                  width: '100%',
                  margin: '10% 10% 0 10%',
                  // position:'absolute',
                  zIndex:'1'
                }}
              >
                
              </SortingBar>
              <div style={{color:' #4169e1',fontWeight:'bold',position:'absolute',zIndex:'1',marginLeft:`${width+15}%`}}>{item}</div>
              
            </div>
          );
        })}
        {/* {end here} */}
      </div>
      {currentAlgorithm === 'K-Way External Sort' || currentAlgorithm === 'Replacement Ext Sort' ? <RunsBars colorsArray={colorsArray} runsArray1={runsArray1} runsArray2={runsArray2} maxItem={maxItem} unsortedRunsArray2={unsortedRunsArray2} unsortedRunsArray1={unsortedRunsArray1}/> : null}
      <EditorSelector algo={currentAlgorithm} val={'sample'} />
    </div>
  );
};

export default Home;
