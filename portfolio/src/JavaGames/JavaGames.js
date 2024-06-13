import ppex from '../videos/ppexvideo.mp4';
import hexGame from '../videos/HexGameVideo.mp4';

import './JavaGames.css';

export default function JavaGames() {
    return (
        <>
            <a href="https://drive.google.com/file/d/1yIAWAeRlEJf1BRFzMP2y-3gtzBwzw3BZ/view?usp=drive_link" >
            <div className="ppex-link">
                <h1>Percent Panic</h1>
                <p style={{marginBottom: 4 + 'vh'}}>Press anywhere on the video or text to download the Percent Panic .jar file</p>
                <video className="panic" autoPlay muted loop>
                <source src={ppex} type="video/mp4" />
                Your browser does not support the video tag
                </video>
                <p style={{marginTop: 3 + 'vh'}}>
                The goal of the game is to get as much of the map as you can! When entering an open space 
                a trail will be made behind you. Upon reaching a "safe sqaure"(borders) the smallest of the regions 
                will be enclosed. If there are spikes within the smallest region, no region will be enclosed, but 
                spikes will be unable to pass through the newly drawn border.
                </p>
            </div>
            </a>
            <a href="https://drive.google.com/file/d/1kylvz2vKkmgWBxzrdk3XYpiAjKYfMwvG/view?usp=drive_link" >
            <div className="hexGame-link">
                <h1>6 in a row!</h1>
                <p style={{marginBottom: 4 + 'vh'}}>Press anywhere on the video or text to download the HexGame .jar file</p>
                <video className="hex" autoPlay muted loop>
                <source src={hexGame} type="video/mp4" />
                Your browser does not support the video tag
                </video>
                <p style={{marginTop: 3 + 'vh'}}>
                The goal of this game is to get 6 in a row, such that the centers of all hexagons is a straight line.
                First the player makes two turns, placing two adjacent hexagons. Then the AI removes 1 of the two hexagons.
                The clever part is, if the AI plays optimally, the player can never win!
                </p>
            </div>
            </a>
        </>
    );
}