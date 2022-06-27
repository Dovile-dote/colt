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
            <b>{paspirtukas.registrationCode}</b>
          </p>
          <p>
            <b>Last use time: {paspirtukas.lastUseTime}</b>
          </p>

          <b className="color-svg">
            <svg style={{ fill: paspirtukas.color }}>
              <use href="#deme" />
            </svg>{' '}
          </b>
          <div className="busy">
            <b>{paspirtukas.isBusy ? 'Available' : 'Busy'}</b>
            <div
              className={
                paspirtukas.isBusy ? 'burbuliukas' : 'burbuliukas-busy'
              }
            ></div>
          </div>
        </div>
        <div className="comment-place">
          <textarea
            value={com}
            onChange={(e) => setCom(e.target.value)}
            rows="5"
          ></textarea>
          <button onClick={handleComment}>COMMENT</button>
        </div>
      </div>
      <ul>
        {paspirtukas.comments
          ? paspirtukas.comments
              .slice(0, -5)
              .split('-^o^-,')
              .map((c, i) => <li key={i}>{c}</li>)
          : null}
      </ul>
    </li>
  );
}

export default Pasp;
