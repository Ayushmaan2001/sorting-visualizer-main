import React, { useEffect, useState } from 'react';
import generateArray from '../../helpers/randomizeArray';
import SortingBar from '../SortingBar/SortingBar';
import HomeHeader from '../HomeHeader/HomeHeader';
import '../../index.css';

//Button Import
import { Inpbutton } from '../Input Button';

//import Download Button
import { Downloadbtn,DownloadArray } from '../Download Btn';

//import Analysis Components
import { Comparisons, Swaps, Time, AnalysisGraph } from '../Analysis';

//algorithms import
import { selectionSort, bubbleSort, insertionSort, mergeSortWrapper, quickSortLWrapper, countingSort, heapSort, KWAYEXTSORT, externalReplacementSort, radixSort, Combsort,Genomesort, Strandsort, Stoogesort, bucketSort } from '../../algorithms';

//CodeEditors import
import {SelectionSort, RadixSort, QuickSort, MergeSort, InsertionSort, HeapSort, CountingSort, BubbleSort, KwayExternal,ReplacementSort,CombSort,StrandSort,GenomeSort,StoogeSort, BucketSort} from '../CodeEdior';

//import graphs
import { BubbleSortGraph,CountingSortGraph,InsertionSortGraph,HeapSortGraph,KWayExternalSortGraph,MergeSortGraph,QuickSortGraph,SelectionSortGraph,CombSortGraph,StrandSortGraph,GenomeSortGraph,StoogeSortGraph,ReplacementSelectionSortGraph } from '../GraphShows';

//Runs Bars Import
import RunsBars from '../RunsBars/RunsBars';
import StrandSortBars from '../RunsBars/StrandSortBars';

//import details
import { BubbleSortDetails, InsertionSortDetails, SelectionSortDetails, CountingSortDetails, HeapSortDetails, QuickSortDetails,CombSortDetails,StrandSortDetails,GenomeSortDetails,StoogeSortDetails, BucketSortDetails } from '../Details';
import BucketSortBars from '../RunsBars/BucketSortBars';
import BucketSortGraph from '../GraphShows/BucketSortGraph';
import Footer from '../Footer/Footer';
import FlowChart from '../FlowChart/FlowChart';
import assets from '../../assets';

const Home = () => {
  const arraySize = 40;
  const [isVisualizing, setIsVisualizing] = useState(false);
  const [runsArray1, setrunsArray1] = useState([]);
  const [unsortedRunsArray1, setunsortedRunsArray1] = useState([]);
  const [unsortedRunsArray2,setunsortedRunsArray2] = useState([]);
  const [runsArray2, setrunsArray2] = useState([]);
  const [runsArray, setrunsArray] = useState([]);
  const [comparisons,setComparisons] = useState(0);
  const [swaps, setswaps] = useState(0);
  const [I, setI] = useState(0);
  const [J, setJ] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [timeRequired, setTimeRequired] = useState(0);
  const [randomizedArray, setRandomizedArray] = useState(
    generateArray.generateRandomizedArray({ arraySize: arraySize })

  );
  const [colorsArray, setColorsArray] = useState(
    new Array(randomizedArray.length).fill(0)
  );
  const [visualizationSpeed, setVisualizationSpeed] = useState(30);
  const [maxItem, setMaxItem] = useState(Math.max(...randomizedArray));
  const [changesize, setChangesize] = useState(true);

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
      case "Comb Sort":
        return <CombSort {...props}/>
      case "Strand Sort":
        return <StrandSort {...props}/>
      case "Gnome Sort":
        return <GenomeSort {...props}/>
      case "Stooge Sort":
        return <StoogeSort {...props}/>
      case "K-Way External Sort":
        return <KwayExternal {...props} />
      case "Replacement Ext Sort":
        return <ReplacementSort {...props} runs={runsArray} />
      case "Bucket Sort":
        return <BucketSort {...props} />
      default:
        return null;
    }
  }
  const GraphSelector = ({ algo, ...props }) => {
    switch (algo) {
      case "Bubble Sort":
        return <BubbleSortGraph {...props} />;
      case "Insertion Sort":
        return <InsertionSortGraph {...props} />
      case "Selection Sort":
        return <SelectionSortGraph {...props} />
      case "QuickSort":
        return <QuickSortGraph {...props} />
      case "Merge Sort":
        return <MergeSortGraph {...props} />
      case "Counting Sort":
        return <CountingSortGraph {...props} />
      // case "Radix Sort":
      //   return <RadixSortGraph {...props} />
      case "Heap Sort":
        return <HeapSortGraph {...props} />
      case "Comb Sort":
        return <CombSortGraph {...props}/>
      case "Strand Sort":
        return <StrandSortGraph {...props}/>
      case "Gnome Sort":
        return <GenomeSortGraph {...props}/>
      case "Stooge Sort":
        return <StoogeSortGraph {...props}/>
      case "K-Way External Sort":
        return <KWayExternalSortGraph {...props} array={randomizedArray} />
      case "Replacement Ext Sort":
        return <ReplacementSelectionSortGraph {...props} runs={runsArray} />
      case "Bucket Sort":
        return <BucketSortGraph {...props}/>
      default:
        return null;
    }
  }
  const DetailsSelector = ({ algo, ...props }) => {
    switch (algo) {
      case "Bubble Sort":
        return <BubbleSortDetails {...props} I={I} J={J} num1={num1} num2={num2} />;
      case "Insertion Sort":
        return <InsertionSortDetails {...props} I={I} J={J} num1={num1} num2={num2} />
      case "Selection Sort":
        return <SelectionSortDetails {...props} I={I} J={J} num1={num1} num2={num2} />
      case "QuickSort":
        return <QuickSortDetails {...props} I={I} J={J} num1={num1} num2={num2} />
      case "Counting Sort":
        return <CountingSortDetails {...props} I={I} J={J} num1={num1} num2={num2} />
      case "Comb Sort":
        return <CombSortDetails {...props} I={I} num1={num1} num2={num2} />
      case "Strand Sort":
        return <StrandSortDetails {...props} I={I} num1={num1} num2={num2} />
      case "Gnome Sort":
        return <GenomeSortDetails {...props} I={I} J={J} num1={num1} num2={num2} />
      case "Stooge Sort":
        return <StoogeSortDetails {...props} I={I} J={J} num1={num1} num2={num2} />
      // // case "Radix Sort":
      // //   return <RadixSort {...props} />
      case "Heap Sort":
        return <HeapSortDetails {...props} I={I} J={J} num1={num1} num2={num2} />
      case "Bucket Sort":
        return <BucketSortDetails {...props} I={I} J={J} num1={num1} num2={num2}/>
      default:
        return null;
    }
  }
  const FlowChartSelector = ({algo,...props}) => {
    switch(algo){
      case "Bubble Sort":
        return <FlowChart {...props} f1={true} f2={false} f3={false} val1={assets.images.bubbleSort1}/>
      case "Insertion Sort":
        return <FlowChart {...props} f1={true} f2={false} f3={false} val1={assets.images.insertionSort} />
      case "Selection Sort":
        return <FlowChart {...props} f1={true} f2={false} f3={false} val1={assets.images.selectionSort}/>
      case "QuickSort":
        return <FlowChart {...props} f1={true} f2={false} f3={false} val1={assets.images.quickSort}/>
      case "Merge Sort":
        return <FlowChart {...props} f1={true} f2={true} f3={false} val1={assets.images.mergeSort1} val2={assets.images.mergeSort2}/>
      case "Counting Sort":
        return <FlowChart {...props} f1={true} f2={false} f3={false} val1={assets.images.countSort}/>
      case "Radix Sort":
        return <FlowChart {...props} f1={true} f2={false} f3={false} val1={assets.images.radixSort}/>
      case "Heap Sort":
        return<FlowChart {...props} f1={true} f2={true} f3={true} val1={assets.images.heapSort1} val2={assets.images.heapSort2} val3={assets.images.heapSort3}/>
      case "Comb Sort":
        return <FlowChart {...props} f1={true} f2={false} f3={false} val1={assets.images.combSort}/>
      case "Strand Sort":
        return <FlowChart {...props} f1={true} f2={false} f3={false} val1={assets.images.strandSort}/>
      case "Gnome Sort":
        return <FlowChart {...props} f1={true} f2={false} f3={false} val1={assets.images.gnomeSort}/>
      case "Stooge Sort":
        return <FlowChart {...props} f1={true} f2={false} f3={false} val1={assets.images.stoogeSort}/>
      case "K-Way External Sort":
        return <FlowChart {...props} f1={true} f2={false} f3={false} val1={assets.images.kWayExternal}/>
      case "Replacement Ext Sort":
        return <FlowChart {...props} f1={true} f2={false} f3={false} val1={assets.images.replacementSort}/>
      case "Bucket Sort":
        return <FlowChart {...props} f1={true} f2={false} f3={false} val1={assets.images.bucketSort}/>
      default:
        return null;
    }
  }

  const AnalysisGraphSelector = ({algo,...props}) => {
    switch(algo){
      case "Bubble Sort":
        return <AnalysisGraph cmp={assets.images.bubble_cmp} swap={assets.images.bubble_swap} time={assets.images.bubble_time} mem={assets.images.bubble_mem} {...props}/>
      case "Insertion Sort":
        return <AnalysisGraph cmp={assets.images.insertion_cmp} swap={assets.images.insertion_swap} time={assets.images.insertion_time} mem={assets.images.insertion_mem} {...props}/>
      case "Selection Sort":
        return <AnalysisGraph cmp={assets.images.selection_cmp} swap={assets.images.selection_swap} time={assets.images.selection_time} mem={null} {...props}/>
      case "QuickSort":
        return <AnalysisGraph cmp={assets.images.quick_cmp} swap={assets.images.quick_swap} time={assets.images.quick_time} mem={assets.images.quick_mem} {...props}/>
      case "Merge Sort":
        return <AnalysisGraph cmp={assets.images.merge_cmp} swap={null} time={assets.images.merge_time} mem={assets.images.merge_mem} {...props}/>
      case "Counting Sort":
        return <AnalysisGraph cmp={assets.images.counting_cmp} swap={null} time={assets.images.counting_time} mem={null} {...props}/>
      case "Radix Sort":
        return <AnalysisGraph cmp={assets.images.radix_cmp} swap={null} time={assets.images.radix_time} mem={null} {...props}/>
      case "Heap Sort":
        return <AnalysisGraph cmp={assets.images.heap_cmp} swap={assets.images.heap_swap} time={assets.images.heap_time} mem={null} {...props}/>
      case "Comb Sort":
        return <AnalysisGraph cmp={assets.images.comb_cmp} swap={assets.images.comb_swap} time={assets.images.comb_time} mem={null} {...props}/>
      case "Strand Sort":
        return <AnalysisGraph cmp={assets.images.strand_cmp} swap={null} time={assets.images.strand_time} mem={null} {...props}/>
      case "Gnome Sort":
        return <AnalysisGraph cmp={assets.images.gnome_cmp} swap={assets.images.gnome_swap} time={assets.images.gnome_time} mem={null} {...props}/>
      case "Stooge Sort":
        return <AnalysisGraph cmp={assets.images.stooge_cmp} swap={assets.images.stooge_swap} time={assets.images.stooge_time} mem={null} {...props}/>
      case "Bucket Sort":
        return <AnalysisGraph cmp={assets.images.bucket_cmp} swap={null} time={assets.images.bucket_time} mem={null} {...props}/>
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
    'Radix Sort',
    'Heap Sort',
    'Bucket Sort',
    'Comb Sort',
    'Gnome Sort',
    'Strand Sort',
    'Stooge Sort',
    'K-Way External Sort',
    'Replacement Ext Sort'
  ];
  const [currentArray,setCurrentArray] = useState('Random Array')
  const array = [
    "Random Array",
    "Nearly Sorted",
    "Nearly Reverse Sorted",
    "Sorted",
    "Reverse Sorted"
  ];
  function generateArrayChoice(array,val){
    let tmp;
    switch(array){
      case "Random Array":
        tmp = generateArray.generateRandomizedArray({arraySize:val});
        return tmp;
      case "Nearly Sorted":
        tmp = generateArray.generateNearlySortedArray({arraySize:val});
        return tmp;
      case "Nearly Reverse Sorted":
        tmp = generateArray.generateNearlyReverseSortedArray({arraySize:val});
        return tmp
      case "Sorted":
        tmp = generateArray.generateSortedArray({arraySize:val});
        return tmp;
      case "Reverse Sorted":
        tmp = generateArray.generateReverseSortedArray({arraySize:val});
        return tmp;
      default:
        break;
    }
  }

  useEffect(() => {
    if(changesize === true){
      let tmp = generateArrayChoice(currentArray,randomizedArray.length)
    setRandomizedArray(tmp)
    }
  }, [currentArray,randomizedArray.length]);

  const onRandomize = () => {
    if (isVisualizing) return;
    const nextRandomizedArray = generateArrayChoice(currentArray,randomizedArray.length)
    setRandomizedArray(nextRandomizedArray);
    setMaxItem(Math.max(...nextRandomizedArray));
  };
  const onInputSizeChanged = (val) => {
    if (isVisualizing) return;
    const nextRandomizedArray = generateArrayChoice(currentArray,val)
    setRandomizedArray(nextRandomizedArray);
    setMaxItem(Math.max(...nextRandomizedArray));
    setColorsArray(new Array(nextRandomizedArray.length).fill(0));
  };
  const onSpeedChange = (val) => {
    if (isVisualizing) return;
    setVisualizationSpeed(100 - val + 1);
  };

  const onVisualize = async () => {
    if(randomizedArray.length<6 || randomizedArray.length>40){
      alert('Array size should be in between 6 and 40')
      return;
    }
    if (isVisualizing) return;

    setIsVisualizing(true);
    switch (currentAlgorithm) {
      case 'Selection Sort':
        await selectionSort({
          array: randomizedArray,
          setArray: setRandomizedArray,
          visualizationSpeed: visualizationSpeed,
          setColorsArray: setColorsArray,
          setI:setI,
          setJ:setJ,          
          setNum1:setNum1,          
          setNum2:setNum2,
          comparisons:comparisons,
          setComparisons:setComparisons,
          swaps:swaps,
          setswaps:setswaps,
          timeRequired:timeRequired,
          setTimeRequired:setTimeRequired
        });
        break;
      case 'Bucket Sort':
        await bucketSort({
          array:randomizedArray,
          setArray:setRandomizedArray,
          setColorsArray:setColorsArray,
          visualizationSpeed:visualizationSpeed,
          unsortedRunsArray1:unsortedRunsArray1,
          unsortedRunsArray2:unsortedRunsArray2,
          setunsortedRunsArray2: setunsortedRunsArray2,
          setunsortedRunsArray1: setunsortedRunsArray1,
          setNum1:setNum1,
          setI:setI,
          timeRequired:timeRequired,
          setTimeRequired:setTimeRequired
        })
        break;
      case 'Bubble Sort':
        await bubbleSort({
          array: randomizedArray,
          setArray: setRandomizedArray,
          visualizationSpeed: visualizationSpeed,
          setColorsArray: setColorsArray,
          setI:setI,
          setJ:setJ,
          setNum1:setNum1,          
          setNum2:setNum2,
          comparisons:comparisons,
          setComparisons:setComparisons,
          swaps:swaps,
          setswaps:setswaps,
          timeRequired:timeRequired,
          setTimeRequired:setTimeRequired
        });
        break;
      case 'Insertion Sort':
        console.log(comparisons)
        await insertionSort({
          array: randomizedArray,
          setArray: setRandomizedArray,
          visualizationSpeed: visualizationSpeed,
          setColorsArray: setColorsArray,
          setI:setI,
          setJ:setJ,
          setNum1:setNum1,          
          setNum2:setNum2,
          comparisons:comparisons,
          setComparisons:setComparisons,
          swaps:swaps,
          setswaps:setswaps,
          timeRequired:timeRequired,
          setTimeRequired:setTimeRequired
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
          setI:setI,
          setJ:setJ,
          setNum1:setNum1,          
          setNum2:setNum2,
          comparisons:comparisons,
          setComparisons:setComparisons,
          swaps:swaps,
          setswaps:setswaps,
          timeRequired:timeRequired,
          setTimeRequired:setTimeRequired
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
          comparisons:comparisons,
          setComparisons:setComparisons,
          swaps:swaps,
          setswaps:setswaps,
          timeRequired:timeRequired,
          setTimeRequired:setTimeRequired
        });
        break;
      case 'Counting Sort':
        await countingSort({
          array: randomizedArray,
          setArray: setRandomizedArray,
          visualizationSpeed: visualizationSpeed,
          setColorsArray: setColorsArray,
          setI:setI,
          setJ:setJ,
          setNum1:setNum1,          
          setNum2:setNum2,
          timeRequired:timeRequired,
          setTimeRequired:setTimeRequired
        });
        break;
      case 'Radix Sort':
        await radixSort({
          array: randomizedArray,
          setArray: setRandomizedArray,
          visualizationSpeed: visualizationSpeed,
          setColorsArray: setColorsArray,
          timeRequired:timeRequired,
          setTimeRequired:setTimeRequired
        });
        break;
      case 'Heap Sort':
        await heapSort({
          array: randomizedArray,
          setArray: setRandomizedArray,
          visualizationSpeed: visualizationSpeed,
          setColorsArray: setColorsArray,
          setI:setI,
          setJ:setJ,
          setNum1:setNum1,          
          setNum2:setNum2,
          comparisons:comparisons,
          setComparisons:setComparisons,
          swaps:swaps,
          setswaps:setswaps,
          timeRequired:timeRequired,
          setTimeRequired:setTimeRequired
        });
        break;
      case 'Comb Sort':
        await Combsort({
          array:randomizedArray,
          setArray:setRandomizedArray,
          setColorsArray:setColorsArray,
          visualizationSpeed:visualizationSpeed,
          setI:setI,
          setNum1:setNum1,
          setNum2:setNum2,
          comparisons:comparisons,
          setComparisons:setComparisons,
          swaps:swaps,
          setswaps:setswaps,
          timeRequired:timeRequired,
          setTimeRequired:setTimeRequired
        })
        break;
      case "Gnome Sort":
        await Genomesort({
          array:randomizedArray,
          setArray:setRandomizedArray,
          setColorsArray:setColorsArray,
          visualizationSpeed:visualizationSpeed,
          setI:setI,
          setNum1:setNum1,
          setNum2:setNum2,
          comparisons:comparisons,
          setComparisons:setComparisons,
          swaps:swaps,
          setswaps:setswaps,
          timeRequired:timeRequired,
          setTimeRequired:setTimeRequired
        })
        break;
      case "Strand Sort":
        await Strandsort({
          array:randomizedArray,
          setArray:setRandomizedArray,
          setColorsArray:setColorsArray,
          visualizationSpeed:visualizationSpeed,
          unsortedRunsArray1:unsortedRunsArray1,
          unsortedRunsArray2:unsortedRunsArray2,
          setunsortedRunsArray2: setunsortedRunsArray2,
          setunsortedRunsArray1: setunsortedRunsArray1,
          setNum1:setNum1,
          setNum2:setNum2,
          comparisons:comparisons,
          setComparisons:setComparisons,
          timeRequired:timeRequired,
          setTimeRequired:setTimeRequired
        })
        break;
      case "Stooge Sort":
        await Stoogesort({
          array:randomizedArray,
          setArray:setRandomizedArray,
          setColorsArray:setColorsArray,
          visualizationSpeed:visualizationSpeed,
          comparisons:comparisons,
          setComparisons:setComparisons,
          timeRequired:timeRequired,
          setTimeRequired:setTimeRequired
        })
        break;
      case 'K-Way External Sort':
        setChangesize(false)
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
          setunsortedRunsArray1: setunsortedRunsArray1,
          timeRequired:timeRequired,
          setTimeRequired:setTimeRequired
        });
        setChangesize(true);
        break;
      case 'Replacement Ext Sort':
        setChangesize(false)
        await externalReplacementSort({
          array: randomizedArray,
          setArray: setRandomizedArray,
          visualizationSpeed: visualizationSpeed,
          setColorsArray: setColorsArray,
          setrunsArray: setrunsArray,
          setrunsArray1: setrunsArray1,
          setrunsArray2: setrunsArray2,
          runsArray1: runsArray1,
          runsArray2: runsArray2,
          unsortedRunsArray1: unsortedRunsArray1,
          unsortedRunsArray2: unsortedRunsArray2,
          setunsortedRunsArray2: setunsortedRunsArray2,
          setunsortedRunsArray1: setunsortedRunsArray1,
          timeRequired:timeRequired,
          setTimeRequired:setTimeRequired
        });
        setChangesize(true)
        break;
      default:
        break;
    }
    setIsVisualizing(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }} id='home'>
      <HomeHeader
        algorithms={algorithms}
        array={array}
        onArrayChange={setCurrentArray}
        currentArray = {currentArray}
        onAlgorithmChange={setCurrentAlgorithm}
        currentAlgorithm={currentAlgorithm}
        onRandomize={onRandomize}
        onInputSizeChanged={onInputSizeChanged}
        onSpeedChange={onSpeedChange}
        onStart={onVisualize}
        isVisualizing={isVisualizing}
      />
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
        <Comparisons comparisons={comparisons}/>
        <Swaps swaps={swaps}/>
        <Time Time={timeRequired}/>
      </div>
      <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',alignContent:'space-between',justifyContent:'space-between',maxHeight:'210px'}}>
        <GraphSelector algo={currentAlgorithm} val={'sample'}/>
          <DetailsSelector algo={currentAlgorithm} val={'sample'}/>
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
      </div>
      {currentAlgorithm === 'K-Way External Sort' || currentAlgorithm === 'Replacement Ext Sort' ? <RunsBars colorsArray={colorsArray} runsArray1={runsArray1} runsArray2={runsArray2} maxItem={maxItem} unsortedRunsArray2={unsortedRunsArray2} unsortedRunsArray1={unsortedRunsArray1}/> : null}
      {currentAlgorithm === 'Strand Sort' ? <StrandSortBars colorsArray={colorsArray} sublist={unsortedRunsArray1} output={unsortedRunsArray2} maxItem={maxItem}/> : null}
      {currentAlgorithm === 'Bucket Sort' ? <BucketSortBars colorsArray={colorsArray} tmp1={unsortedRunsArray1} tmp2={unsortedRunsArray2} maxItem={maxItem}/> : null}
      <div>
        <Inpbutton setRandomizedArray={setRandomizedArray} setMaxItem={setMaxItem} isVisualizing={isVisualizing}/>
      </div>
      <div>
        {
          currentAlgorithm === 'Stooge Sort' || currentAlgorithm === 'Bucket Sort' || currentAlgorithm === 'Counting Sort' || currentAlgorithm === 'K-Way External Sort' || currentAlgorithm === 'Replacement Ext Sort' || currentAlgorithm === 'Quick Sort' || currentAlgorithm === 'Radix Sort' || currentAlgorithm === 'Merge Sort' ? 
          null :
          <div>
          <div style={{color:'orange',display:'flex',justifyContent:'space-around',marginTop:'60px',fontSize:'30px'}}>
            See all Intermediate Stages
          </div>
          <div>
          <DownloadArray />
          </div>
        </div>
        }
        {currentAlgorithm === 'K-Way External Sort' || currentAlgorithm === 'Replacement Ext Sort' ? 
        <div>
          <div style={{color:'orange',display:'flex',justifyContent:'space-around',marginTop:'60px',fontSize:'30px'}}>
            Download File
          </div>
          <div>
          <Downloadbtn />
          </div>
        </div>
        : null}
        </div>
      <EditorSelector algo={currentAlgorithm} val={'sample'} />
      <FlowChartSelector algo={currentAlgorithm} val={'sample'}/>
      <AnalysisGraphSelector algo={currentAlgorithm} val={'sample'}/>
      <Footer />
    </div>
  );
};

export default Home;
