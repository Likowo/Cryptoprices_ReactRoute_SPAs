//SPAs with Multiple Pages
///React Router BitCoin PriceFinder
    // Purpose of this lesson is to Build A Crypto Price Discovery App and learn

    // How to setup react router
    // How to create Router, Route, Link and Routes components
    // How to pass router props
    // How to use URL Params

    import React from 'react'
    
//Import route and our components
import { Route, Routes } from "react-router-dom";
import Currencies from "./pages/Currencies";
import Main from "./pages/Main";
import Price from "./pages/Price";
import Nav from "./components/Nav"

     function App () {
  // We will use the Route component to specify each route
  return (
    <div className="App">
      <Nav />
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/currencies" element={<Currencies/>}/>
      <Route path="/price/:symbol" element={<Price/>}/>
    </Routes>
    </div>
  );
}

//The :symbol part is a URL Param, a variable in the url. Whatever is in that spot in the path will be accessible by using the useParams hook.

    export default App