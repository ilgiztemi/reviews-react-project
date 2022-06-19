import { useState } from 'react';
import './App.css';
import {reviews} from './components/Data'
import Main from './components/Main';

function App() {
  const [index, setIndex] = useState(0);
  console.log(reviews);
  return (
    <div className="container">
        <h1 className="header">Our Reviews</h1>
        <div className="border"></div>
        <Main index={index} setIndex={setIndex} />
    </div>
  );
}

export default App;
