import { useContext, useState } from 'react';
import FrontContext from './FrontContext';

function Pasp({ paspirtukas }) {
  const { setCreateComment } = useContext(FrontContext);

  const [com, setCom] = useState('');

  const handleComment = () => {
    setCreateComment({ com, coltId: paspirtukas.id });
    setCom('');
  };

  return (
    <li>
      <div className="aprasas">
        <div>
          <p>
            {' '}
            {/* <b>{paspirtukas.id}. </b> */}
            <b>Registration code: {paspirtukas.registrationCode}</b>
          </p>
          <p>
            <b>Total Ride: </b> {paspirtukas.totalRideKilometres.toFixed(2)}{' '}
            <b> Km</b>
          </p>

          <b>Last use time: {paspirtukas.lastUseTime}</b>
          <b style={{ color: paspirtukas.color }}>COLOR: {paspirtukas.color}</b>
        </div>
        <div className="busy">
          <b>{paspirtukas.isBusy ? 'Available' : 'Busy'}</b>
          <div
            className={paspirtukas.isBusy ? 'burbuliukas' : 'burbuliukas-busy'}
          ></div>
        </div>
        <textarea
          value={com}
          onChange={(e) => setCom(e.target.value)}
        ></textarea>
        <div className="buttons">
          <button className="delete" onClick={handleComment}>
            COMMENT
          </button>
        </div>
        <ul>
          {paspirtukas.comments
            ? paspirtukas.comments
                .slice(0, -5)
                .split('-^o^-')
                .map((c, i) => <li key={i}>{c}</li>)
            : null}
        </ul>
      </div>
    </li>
  );
}

export default Pasp;
