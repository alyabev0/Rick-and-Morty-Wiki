import './App.css';
import React, { useState, useEffect } from "react";


let api = `https://rickandmortyapi.com/api/character/?page=1`

function App() {

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      console.log(data);
    })();
  }, [api]);

  
  return (
    <div className="App">
  <h1 className="text-center mb-3">Characters</h1>
  <div className="container">
  <div className="row">
    Filter component will be placed here
    <div className="col-lg-8 col-12">
      <div className="row">
        Card component will be placed here
      </div>
    </div>
  </div>
  </div>
</div>

  );
}

export default App;
