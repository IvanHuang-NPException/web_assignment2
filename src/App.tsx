/**
 * Name: Ivan Huang
 * Date: 4/10/25
 * Assignment 2
 * Description: create a webpage + add a button + 
 * make the background change color and alternate between 3-5 colors
 */

import { useState } from 'react'
import './App.css'

// To ensure no out of bounds of colorList is accessed
const final_index = 4;

function App() {
  // Store className of background colors
  const colorList = ['red-bg', 'green-bg', 'blue-bg', 'purple-bg', 'orange-bg'];
  // currentIndex is the state variable, setCurrentIndex is the setter function name
  const [currentIndex, setCurrentIndex] = useState(0);

  // Lambda in order to increment (or loop back) the index of colors
  const changeIndex = () => {
    if(currentIndex == final_index){
      setCurrentIndex(0);
    }
    else{
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    // Applies two classes to this div (container) + (background color)
    <div className={`container ${colorList[currentIndex]}`}>
      <button onClick={changeIndex}>Click me!</button>
    </div>
  )
}

export default App
