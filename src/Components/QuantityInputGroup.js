import "../Assets/Styles/quantity-input-group.css";

export default function QuantityInputGroup(props) {
  return (
    <div className={`quantity-input ${props.small && "small"}`}>
      <button onClick={() => props.handleQuantityChange(0, -1)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-dash-lg"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
          />
        </svg>
      </button>
      <input
        type="number"
        value={props.quantity}
        onChange={(event) => props.handleQuantityChange(1, event.target.value)}
      />
      <button onClick={() => props.handleQuantityChange(0, 1)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-plus-lg"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
          />
        </svg>
      </button>
    </div>
  );
}
