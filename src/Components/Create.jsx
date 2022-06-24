import { useContext } from 'react';
import { useState } from 'react';
import rand from '../Functions/rand';
import ColtContext from './ColtContext';

function Create() {
  const { setCreateData, colors } = useContext(ColtContext);

  const kodoElem = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'Y',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'Z',
    'W',
    'X',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
  ];
  let kodas = '';
  for (let i = 0; i < 8; i++) {
    kodas += kodoElem[rand(0, kodoElem.length - 1)];
  }

  const [registrationCode, setRegistrationCode] = useState(kodas);
  const [isBusy, setIsBusy] = useState(1);
  const [lastUseTime, setLastUseTime] = useState('');
  const [totalRideKilometres, setTotalRideKilometres] = useState(0);
  const [color, setColor] = useState('0');

  const handleCreate = () => {
    const data = {
      registrationCode,
      isBusy,
      lastUseTime,
      totalRideKilometres,
      color,
    };
    setCreateData(data);
    setRegistrationCode(kodas);
    setIsBusy(1);
    setLastUseTime('');
    setTotalRideKilometres(0);
    setColor('0');
  };

  return (
    <>
      <div className="rodykle">
        <div className="kv">
          <h2>
            CLICK <br /> THE <br />
            BUTTON!
          </h2>
        </div>
        <div className="tr"></div>
      </div>
      <div>
        <div className="selektas">
          <label>COLOR</label>
          <select onChange={(e) => setColor(e.target.value)} value={color}>
            <option value="0" disabled>
              Select Color
            </option>
            {colors
              ? colors.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.color}
                  </option>
                ))
              : null}
          </select>
        </div>
        <button onClick={handleCreate}>
          <span>NEW COLT</span>
        </button>
      </div>
    </>
  );
}
export default Create;
