import './App.css';
import './Style.css';

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
        <div class="container" id="Brother">
          <Box id={1} brotherCount={count2} boxClicked={boxClicked}/>
        </div>  
        <br/>
        <div class="container" id="Sister">  
          <Box id={2} brotherCount={count1} boxClicked={boxClicked}/> 
        </div>
        <br/>
        <div class="container" id="cousin">   
          <Box id={3} brotherCount={count1} boxClicked={boxClicked}/> 
        </div>
        <br/>
        <div class="container" id="Fathers"> 
          <p class="Father">Contador Padre: {count}</p>
        </div>  
      </header>
      
    </div>
  );
}

export default App;
