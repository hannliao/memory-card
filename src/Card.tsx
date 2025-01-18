import './styles/Card.css';

interface CardProps {
  src: string;
  handleClick: () => void;
}

export default function Card({ src, handleClick }: CardProps) {
  return (
    <button className="card" onClick={handleClick}>
      <img src={src} alt="" />
    </button>
  );
}
