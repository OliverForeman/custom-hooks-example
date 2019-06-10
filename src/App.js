import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const name = useInputForm('Mary');
  const surname = useInputForm('Poppins');
  const windowWidth = useWindowWidth();
  useDocumentTitle(`${name.value} ${surname.value}`)

  return (
    <div className="App">
      <div>
        <label>Name</label>
        <input {...name} />
      </div>
      <div>
        <label>Surname</label>
        <input {...surname} />
      </div>
      <div>{`Window width: ${windowWidth}`}</div>
    </div>
  );
}

export default App;

// ##################################################

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowWidth;
}

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;
  })
}

const useInputForm = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleValueChange = (e) => {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleValueChange
  }
}
