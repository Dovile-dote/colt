function Color({ color }) {
  return (
    <li>
      <div className="aprasas">
        <b>{color.color}</b>
        <ul>
          {color.pasp_nr
            ? color.pasp_nr.split(',').map((c, i) => <li key={i}>{c}</li>)
            : null}
        </ul>
      </div>
    </li>
  );
}

export default Color;
