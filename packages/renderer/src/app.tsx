import React, { useState } from 'react';
import { render } from 'react-dom';

import './app.css';

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='app'>
      <header className='app-header'>
        Hello World!

        <p>
          <button onClick={() => setCount((count: number) => count + 1)}>
            count is: {count}
          </button>
        </p>
      </header>
    </div>
  );
};

export default App;
