import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

const App = () => {
  const pageSize = 9;
  const [progress,setProgress]=useState(0)
  
 
    return (<>
      <div>
        <Router>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          />
          <Navbar />
          <Routes>
            <Route path="/" element={<News setProgress = {setProgress} key="general" pageSize={pageSize} category="general" />} />
            <Route path='/business' element={<News setProgress = {setProgress} key="business" pageSize={pageSize} category="business" />} />
            <Route path='/entertainment' element={<News setProgress = {setProgress} key="entertainment" pageSize={pageSize} category="entertainment" />} />
            <Route path='/general' element={<News setProgress = {setProgress} key="general" pageSize={pageSize} category="general" />} />
            <Route path='health' element={<News setProgress = {setProgress} key="health" pageSize={pageSize} category="health" />} />
            <Route path='/science' element={<News setProgress = {setProgress} key="science" pageSize={pageSize} category="science" />} />
            <Route path='/sports' element={<News setProgress = {setProgress} key="sports" pageSize={pageSize} category="sports" />} />
            <Route path='/technology' element={<News setProgress = {setProgress} key="technology" pageSize={pageSize} category="technology" />} />
          </Routes>
        </Router>

      </div>
    </>
    )
 
}

export default App