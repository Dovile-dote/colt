function Color({ color }) {
  return (
    <li>
      <div className="spalvu-sarasas">
        <b className="color-svg">
          <svg style={{ fill: color.color }}>
            <use href="#deme" />
          </svg>{' '}
        </b>
        <ul className="ul-flex">
          {color.pasp_nr
            ? color.pasp_nr.split(',').map((c, i) => <li key={i}>{c}</li>)
            : null}
        </ul>
      </div>
    </li>
  );
}

export default Color;
