import "./Card.css";
import { FaSplotch, FaDownload } from "react-icons/fa";
// import { BsFillBrightnessAltHighFill } from "react-icons/bs";

const Card = (props) => {
  return (
    <div className="most-popular-item">
      <div className="card-wrapper">
        <img className="most-poular-item-image" alt="" src={props.image} />
        <div className="most-popular-item-content">
          <h4 className="most-popular-item-title">
            {props.title} <br />
            <span>{props.category}</span>
          </h4>
          <ul>
            <li>
              <span style={{ color: "var(--color-icons)" }}>
                <FaSplotch />{" "}
              </span>
              {props.rate}
            </li>
            <li>
              <span style={{ color: "var(--color-primary)" }}>
                <FaDownload />
              </span>
              <span> {props.download}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
