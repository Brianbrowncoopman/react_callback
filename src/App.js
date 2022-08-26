import './App.css';
import { useEffect, useState } from 'react';
import Box from "./components/Box"

function App() {

const [count, updateCount] = useState (0);

  function boxClicked(brother) {
    updateCount (count + 1);
    if (brother === 1) {
      updateCount1 (count1 + 1);
    } else {
      updateCount2 (count2 + 1);
    }
  }


  const [count1, updateCount1] = useState(0);
  const [count2, updateCount2] = useState(0);



  return (
    <div className="App">
      <header className="App-header">
        <Box id={1} brotherCount={count2} boxClicked={boxClicked}/>
        <Box id={2} brotherCount={count1} boxClicked={boxClicked}/> 
        <Box id={3} brotherCount={count1} boxClicked={boxClicked}/> 
        <br/>
        <p>Contador Padre: {count}</p>
  
      </header>
    </div>
  );
}

export default App;
