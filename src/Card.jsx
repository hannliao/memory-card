import './styles/Card.css';

export default function Card({ src }) {
  return (
    <button className="card">
      <img src={src} alt="" />
    </button>
  );
}
