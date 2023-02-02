import { useRef, useState } from 'react';
import { dataMusic } from './dataMusic';
import musicImage from './picture/music.png';
import next from './picture/next.png';
import play from './picture/play.png';
import pause from './picture/paused.png';
import back from './picture/back.png';


function Player() {

    const [music, setMusic] = useState(0);
    const {  artist, songTitle, track } = dataMusic[music];

    const refAudio = useRef()
    const [paused, setPaused] = useState(true)

    const playPause = () => {
        setPaused(!paused);
        paused ? refAudio.current.play() : refAudio.current.pause()
    }

    const backTrack = () => {
        setMusic((music => {
            music --;
            if(music < 0) {
                return dataMusic.length - 1;
            }
            return music
        }))
    }

    const nextTrack = () => {
        setMusic((music => {
            music ++;
            if(music > dataMusic.length - 1) {
                music = 0;
            }
            return music
        }))
    }

    return(
    <div className="container">
        <div className="iphone">
            <div className="songImageContainer">
                <img src={ musicImage } className="songImage" alt="songImage"/>
            </div>
            <div className="album-cover">
                <h2 className="artist-title">{ artist } - </h2>
                <span className="song-title">{ songTitle }</span>
            </div>
            <div className="buttons">
                <button className="btn" onClick={backTrack}><img src={ back } alt='back' className='icons'/></button>
                <audio ref={ refAudio } src={ track } loop='loop'>
                </audio>
                <button className="btn" onClick={ playPause }>
                {paused ? <img src={ play } alt='play' className='icons'/> : <img src={ pause } alt='pause' className='icons'/>}</button>
                <button className="btn" onClick={nextTrack}><img src={ next } alt='next' className='icons'/></button>
            </div>
        </div>
    </div>
    )
}

export default Player;