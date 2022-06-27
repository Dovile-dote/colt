import { useContext } from 'react';
import ColorContext from './ColorContext';

function Color({ color }) {
  const { setDeleteData } = useContext(ColorContext);

  const handleDelete = () => {
    setDeleteData(color);
  };

  return (
    <li>
      <div className="aprasas">
        <div>
          <p>
            {' '}
            <b>{color.color}. </b>
          </p>
        </div>
        <div className="buttons">
          {color.total ? (
            '(' + color.total + ')'
          ) : (
            <button className="delete" onClick={handleDelete}>
              {/* <svg>
              <use href="#delete" />
            </svg> */}
              DELETE
            </button>
          )}
        </div>
      </div>
    </li>
  );
}

export default Color;
