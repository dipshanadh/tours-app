import { useState } from "react";

const TourItem = props => {
  const { id, image, name, info, price, deleteTour } = props;

  const [open, setOpen] = useState(false);

  return (
    <li className="single-tour">
      <img src={image} alt={name} className="img" />
      <div className="tour-price">${price}</div>

      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {open ? info : `${info.substring(0, 175)}...`}
          <button
            className="info-btn"
            type="button"
            style={{ marginLeft: "1ch" }}
            onClick={() => setOpen(!open)}>
            {open ? "see less" : "read more"}
          </button>
        </p>

        <button
          className="btn btn-block delete-btn"
          onClick={() => deleteTour(id)}>
          not interested
        </button>
      </div>
    </li>
  );
};
export default TourItem;
