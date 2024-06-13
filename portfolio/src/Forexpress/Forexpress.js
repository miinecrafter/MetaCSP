import './Forexpress.css'
import ImageMover from './ImageMover/ImageMover';

import landing1 from '../images/forexpressLanding1.png';
import landing2 from '../images/forexpressLanding2.png';
import landing3 from '../images/forexpressLanding3.png';
import profile1 from '../images/profile1.png';
import home1 from '../images/Home1.png';

import {useState, useEffect} from 'react';
import StackDescription from './StackDescription/StackDescription';

export default function Forexpress({src, scroll, start, end, maximum, endx, endy, images, text, title}) {
    const [opacity, setOpacity] = useState(0);
    const [size, setSize] = useState(10);
    const [tx, setTx] = useState(0);
    const [ty, setTy] = useState(0);

    function toPixels(len){
        return len * document.documentElement.clientHeight / 100;
    }
    function toWindow(pixels){
        return 100 * pixels / document.documentElement.clientHeight;
    }
    useEffect(() => {
        // const start = startAnim; // 500
        // const end = endAnim; // 900
        // speed = speedAnim; // 20
        // const maximum = maxAnim; // 100
        //scales scroll from 0 to maximum
        const scale = Math.max(0, (scroll - toPixels(start)) * maximum / (toPixels(end - start)));
        //console.log(scale);

        const nextOpacity = Math.max(0, (scale));
        setOpacity(nextOpacity / 100);

        const factor = 7;
        const nextSize = scale / factor + 20;
        setSize(nextSize);

        // end change in x
        // const endx = -100;
        // const slope = 1 / 5;

        const nextx = (1 / Math.pow(maximum, 2)) * Math.pow(scale, 2) * endx;
        const nexty = (1 / Math.pow(maximum, 2)) * Math.pow(scale, 2) * endy;

        console.log(": " + nextx + ": " + nexty);

        setTx(toPixels(nextx));
        setTy(toPixels(nexty));

        console.log("/" + tx + " / " + ty)
    }, [scroll])

    // return <StackDescription opacity={opacity} images={images} text={text} title={title} />; 
    
    return (
        <div className="cont">
            {/* <ImageMover src={src} opacity={opacity} size={size} tx={tx} ty={ty} /> */}
            <StackDescription opacity={opacity} images={images} text={text} title={title} /> 
        </div>     
    );
}