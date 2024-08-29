import './styles/Card.css';

export default function Card({ src, handleClick }) {
  return (
    <button className="card" onClick={handleClick}>
      <img src={src} alt="" />
    </button>
  );
}
