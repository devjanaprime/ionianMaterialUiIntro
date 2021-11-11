import './App.css';
import { TextField, Button, Select, MenuItem, InputLabel } from '@material-ui/core';
import { useState } from 'react';

function App() {

  const [size, setSize] = useState( 'small' );

  const getName = (event)=>{
    console.log( event.target.value );
  }
  
  const getSize = (event)=>{
    console.log( 'in getSize:', event.target.value );
    setSize( event.target.value );
  }
  
  return (
    <div className="App">
      <h1>Material UI Intro</h1>
      <input type="text" placeholder="oldschool" onChange={ (event)=>getName(event)}></input>
      <TextField placeholder="newschool" onChange={ (event)=>getName(event)} />
      <button>oldschool</button><Button>newschool</Button>
      <InputLabel>Select Size</InputLabel>
      <Select
        value={ size }
        onChange={ getSize }
      >
        <MenuItem value="tiny">Tiny (smaller than pea)</MenuItem>
        <MenuItem value="small">Small (less than a cup)</MenuItem>
        <MenuItem value="medium">Med (fits on a kitchen table)</MenuItem>
        <MenuItem value="large">Large (can't get it thru a door)</MenuItem>
      </Select>
    </div>
  );
}

export default App;
