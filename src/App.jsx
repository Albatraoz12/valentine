import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [valentine, setValentine] = useState(false);
  const [title, setTitle] = useState('Will you be my valentine? ♥️');

  return (
    <section>
      <h1>{title}</h1>
      {valentine ? (
        <img src='/images/Cat_Dance.gif' alt='dancing cat gif' />
      ) : (
        <img
          src={count > 0 ? '/images/cat_sad.jpg' : '/images/Cat_heart.jpg'}
          alt='cute cat'
          className='cat-image'
        />
      )}
      <div className='buttons-container'>
        {valentine ? (
          <h2>Woohooo you're my valentine!!!</h2>
        ) : (
          <>
            <button
              type='button'
              className='btn btn-enhance'
              style={
                count > 0 ? { height: `${count}rem`, width: `${count}rem` } : {}
              }
              onClick={() => {
                setValentine(true);
                setCount(0);
                setTitle('Yiipiie i luv you! ♥️♥️♥️♥️♥️');
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
                setTitle('What do you mean No?! 💔💔💔');
              }}
            >
              No
            </button>
          </>
        )}
      </div>
    </section>
  );
}

export default App;
