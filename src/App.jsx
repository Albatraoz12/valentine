import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h1>Will you be my valentine?</h1>
      <img
        src='../public/images/Cat_heart.jpg'
        alt='cute cat'
        className='cat-image'
      />
      <div className='buttons-container'>
        <button type='button' className='btn btn-enhance'>
          Yes ofc
        </button>
        <button
          type='button'
          className='btn'
          onClick={() => setCount(count + 1)}
        >
          No
        </button>
      </div>
    </section>
  );
}

export default App;
