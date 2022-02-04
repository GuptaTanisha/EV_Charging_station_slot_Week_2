import React from 'react';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Homescreen from './screens/Homescreen.js';

const App = () => {
    return(
<BrowserRouter>
    <div> 
    <Routes>
    <Route path="/" element={<Homescreen />} exact></Route>
        </Routes>
  </div>
  </BrowserRouter>
        )
}

export default App;