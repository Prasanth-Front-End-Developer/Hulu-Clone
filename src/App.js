import React, { useState } from 'react'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import requests from "./helpers/requests";
import Results from "./components/Results/Results";

import "./App.css"
const App = () => {
  const [selectOption,setSelectedOption] = useState(requests.fetchTrending);
  console.log(selectOption);
  return (
    <div className='app'>
      <Header/>
      <Navbar setSelectedOption={setSelectedOption}/>
      <Results selectOption={selectOption}/>
    </div>
  )
}

export default App
