import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [valentine, setValentine] = useState(false);

  return (
    <section>
      {count}
      <br />
      {valentine.toString()}
      <h1>Will you be my valentine?</h1>
      <img
        src={count > 0 ? '/images/cat_sad.jpg' : '/images/Cat_heart.jpg'}
        alt='cute cat'
        className='cat-image'
      />
      <div className='buttons-container'>
        <button
          type='button'
          className='btn btn-enhance'
          style={
            count > 0 ? { height: `${count}rem`, width: `${count}rem` } : {}
          }
          onClick={() => {
            setValentine(true);
            setCount(0);
          }}
        >
          Yes ofc
        </button>
        <button
          type='button'
          className='btn'
          onClick={() => {
            setCount(count + 5);
            setValentine(false);
          }}
        >
          No
        </button>
      </div>
    </section>
  );
}

export default App;
