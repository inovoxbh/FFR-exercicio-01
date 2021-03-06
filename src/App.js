import React from 'react';
import logo from './logo.svg';
import './App.css';
import CompArtigo from './CompArtigo.js'
import CompSideBar from './CompSideBar.js'
import CompMenu from './CompMenu.js'
import CompCabecalho from './CompCabecalho.js'
import CompRodape from './CompRodape.js'

function App() {
  return (
    <div className="App">
      <div>
        <h1> Cabeçalho </h1>
        <CompCabecalho />
      </div>

      <hr></hr>
      <div>
        <h1> Side Bar </h1>
        <CompSideBar />
      </div>

      <hr></hr>      
      <div>
        <h1> Menu </h1>
        <CompMenu />
      </div>

      <hr></hr>      
      <div>
        <h1> Artigos </h1>
        <CompArtigo />
        <CompArtigo />
        <CompArtigo />
      </div>

      <hr></hr>      
      <div>
        <h1> Rodapé </h1>
        <CompRodape />
      </div>

    </div>
  );
}

export default App;
