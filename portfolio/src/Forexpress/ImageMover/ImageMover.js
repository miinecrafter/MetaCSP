import './ImageMover.css';

export default function ImageMover({src, opacity, size, tx, ty}) {
    return (
        <div className="cont">
            <img src={src} className="Img" style={{
                opacity: `${opacity}`,
                width: `${size}vw`,
                height: 'auto',
                transform: `translateX(${tx}px) translateY(${ty}px)`
            }} />
        </div>
    );
}