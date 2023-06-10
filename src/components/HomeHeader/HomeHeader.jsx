import { Row } from 'antd';
import React from 'react';
import assets from '../../assets';
import AlgorithmDropDown from './AlgorithmDropDown';
import InputSizeSlider from './InputSizeSlider';
import RandomizeButton from './RandomizeButton';
import SpeedSlider from './SpeedSlider';
import StartButton from './StartButton';
import ArrayDropDown from './ArrayDropDown';
import BenchmarkingButton from './BenchmarkingButton';

const HomeHeader = ({
  algorithms,
  array,
  onAlgorithmChange,
  currentAlgorithm,
  onSpeedChange,
  onInputSizeChanged,
  onRandomize,
  onStart,
  isVisualizing,
  onArrayChange,
  currentArray,
}) => {
  const openUrl = (url) => {
    window.open(url, '_blank')?.focus();
  };

  return (
    <Row
      style={{
        background: '#02E095',
        color: 'white',
        padding: '10px 0px 10px 0px',
        width: '100%',
      }}
      align="middle"
      justify="space-around"
    >
      <img
        alt=""
        src={assets.images.githubLogo}
        width={125}
        height={30}
        style={{ cursor: 'pointer' }}
        onClick={() =>
          openUrl('https://github.com/Ayushmaan2001/sorting-visualizer-main')
        }
      ></img>

      <AlgorithmDropDown
        currentAlgorithm={currentAlgorithm}
        algorithms={algorithms}
        isVisualizing={isVisualizing}
        onAlgorithmChange={(algo) => onAlgorithmChange(algo)}
      />
      <ArrayDropDown 
      array={array} 
      isVisualizing={isVisualizing} 
      currentArray={currentArray}
      onArrayChange={(arr) => onArrayChange(arr)}
      />
      <SpeedSlider
        onSpeedChange={onSpeedChange}
        isVisualizing={isVisualizing}
      />
      <InputSizeSlider
        onInputSizeChanged={onInputSizeChanged}
        isVisualizing={isVisualizing}
      />
      <BenchmarkingButton />
      <RandomizeButton onClick={onRandomize} />
      <StartButton onClick={onStart}/>
    </Row>
  );
};

export default HomeHeader;

