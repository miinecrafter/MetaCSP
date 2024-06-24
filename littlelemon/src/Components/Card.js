import './Card.css';

export default function Card({imgSrc, title, description}){
    return (
        <div className="card">
            <img src={imgSrc} alt={imgSrc} />
            <div className="content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}