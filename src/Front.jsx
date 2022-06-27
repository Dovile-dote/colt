import { useEffect, useState } from 'react';
import axios from 'axios';
import FrontContext from './Components/front/FrontContext';
import FrontList from './Components/front/List';
import ColtList from './Components/front/ColtList';

function Front() {
  const [colors, setColors] = useState(null);
  const [paspirtukai, setPaspirtukai] = useState(null);
  const [createComment, setCreateComment] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3003/front/spalvos').then((res) => {
      console.log(res.data);
      setColors(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3003/front/coltai').then((res) => {
      console.log(res.data);
      setPaspirtukai(res.data);
    });
  }, []);

  // create comments
  useEffect(() => {
    if (null === createComment) return;
    axios
      .post('http://localhost:3003/front/komentarai', createComment)
      .then((_) => {
        // setLastUpdate(Date.now());
      });
  }, [createComment]);

  return (
    <FrontContext.Provider
      value={{
        colors,
        paspirtukai,
        setCreateComment,
      }}
    >
      <div>
        <FrontList />
        <ColtList />
      </div>
    </FrontContext.Provider>
  );
}

export default Front;
