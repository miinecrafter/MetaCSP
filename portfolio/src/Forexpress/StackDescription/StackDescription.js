import './StackDescription.css';
import front from '../../images/frontbutton.png';
import back from '../../images/backbutton.png';

import {useState, useEffect} from 'react';

export default function StackDescription({opacity, images, text, title}) {
    const [index, setIndex] = useState(0);
    const [curImg, setCurImg] = useState(1);
    const length = images.length;
    const [buttonDisabled, setButtonDisabled] = useState("false");
    const [marginLeft, setMarginLeft] = useState(-100);

    useEffect(() => {
        if(opacity > .01){
            setButtonDisabled("false");
            setMarginLeft(40);
        }
        else{
            setButtonDisabled("true");
            setMarginLeft(-100);
        }

    }, [opacity]);

    function handleClick(val){
        console.log(opacity + " " + val);
        const newIndex = (index + val + length) % length;
        setIndex(newIndex);
    }

    useEffect(() => {
        setCurImg(images[index]);
    }, [index]);

    return (
        <div className="total-cont">
            <div className="img-select">
                <div className="center-cont">
                    <div className="img-cont">
                        <img src={curImg} className="stack-img" />
                    </div>
                    <div className="selector">
                        <button disabled={buttonDisabled} onClick={() => handleClick(-1)}><img src={back} className="back-button"/></button>
                        <div disabled={buttonDisabled} className="center">
                            <p className="stack-index">{index + 1} / {length}</p>
                        </div>
                        <button onClick={() => handleClick(1)}><img src={front} className="front-button" /></button>
                    </div>
                </div>
            </div>
            <div className="stack-desc-cont">
                <p className="stack-title">{title}</p>
                <p className="stack-desc">{text}</p>
            </div>
        </div>
    );
}

// 2 - Math.abs(4 * (opacity - 2))