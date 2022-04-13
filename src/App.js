import React from 'react';
// import Circle from './Pages/Components/Home/Circle';
import Ring from './Pages/Components/Home/Ring';
import './App.css';
import Circle from './Pages/Components/Home/Circle';

function App() {
  return (
    <section>
      <div className="buttonsSpiners">
        <button>Proximo spinner</button>
      </div>
      <div className="loandingComponent">
        <Ring />
      </div>
    </section>
  );
}

export default App;
