import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ColorIndex from './ColorIndex';
import NewColor from './NewColor';
import ColorDetail from './ColorDetail';


function App() {
  const [colors, setColors] = useState([]);
    const addColor = (newColor) => {
        setColors(colors => [...colors, {...newColor}]);
    }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/colors/:color" element={<ColorDetail colors={colors}/>}/>
          <Route path="/colors/new" element={<NewColor addColor={addColor}/>}/>
          <Route path="/colors/" element={<ColorIndex colors={colors}/>}/>
          <Route path="/colors/*" element={<Navigate to="/colors/" replace/>}/>
          <Route path="*" element={<Navigate to="/colors/" replace/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
