import FoodImg1 from '../images/foodimg1.jpg';
import FoodImg2 from '../images/foodimg2.jpg';
import FoodImg3 from '../images/foodimg3.jpg';
import headerLemon3 from '../images/headerlemonimg3.jpg';
import headerLemon4 from '../images/headerlemonimg4.jpg';
import naturalLemon from '../images/naturalimg.jpg';

import Card from './Card';
import './HomePage.css';

export default function HomePage() {
    return (
        <>
            <div className="head-show">
                <img src={headerLemon4} className="hl4" />
                <div style={{width: '50vw'}}>
                    <h1>Little Lemon Dining</h1>
                </div>
                <img src={headerLemon3} className="hl3" />
            </div>
            <div>
                <div className="cards">
                    <Card imgSrc={FoodImg1} title="20% off" description="Get 20% off with a coupon on your first online order with Little Lemon!" />
                    <Card imgSrc={FoodImg2} title="No wait" description="Fast delivery and service with minimal wait times at all times of the day." />
                    <Card imgSrc={FoodImg3} title="24/7 Service" description="Little Lemon drive-thru is open 24/7 Monday through Friday. Order whenever you want!" />
                </div>
            </div>
        </>
    );
}