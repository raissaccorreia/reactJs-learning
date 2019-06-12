import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyApp from './components/MyApp';
import MyFooter from './components/MyFooter';
import MyNavBar from './components/MyNavBar';

function App() {
  return (
    <div>
      <MyNavBar/>
      <MyApp/>
      <MyFooter/>
</div>
  );
}

export default App;
