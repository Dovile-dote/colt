import './App.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [paspirtukai, setPaspirtukai] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3003/coltai').then((res) => {
      setPaspirtukai(res.data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>COLTAI</h1>
        {paspirtukai.map((p) => (
          <div key={p.id}>{p.registrationCode}</div>
        ))}
      </header>
    </div>
  );
}

export default App;
