import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'
import Home from "./pages/Home.jsx";

function App() {

  return (
      <Router>
        <div className="App">
          <div style={{padding: 0}} className="content">
            <Routes>
              <Route path='/' element={<Home/>}/>

            </Routes>
          </div>
        </div>

      </Router>
        )
      }
      export default App;
