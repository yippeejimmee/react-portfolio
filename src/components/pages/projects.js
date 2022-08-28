import React from 'react';
import dog from '../img/doggy.jpg';
import theater from '../img/movie.jpg';
import pencil from '../img/pencil.jpg';
import sun from '../img/sunny.jpg';



export default function Home() {
    return (
        <div>
        <div className='pictures'>
            <div className='projects containers small'>
                <a href='https://dcast0607.github.io/Restaurant-Picker-Project/'>
                    <img src={dog} alt='puppy sitting in flower field'/>
                    <div> W.O.O.F. </div>
                </a>
                <a href="https://github.com/yippeejimmee/Restaurant-Picker-Project">W.O.O.F. Repository</a>
            </div>
            <div className='projects containers small'>
                <a href='https://moviemates-deployer.herokuapp.com/'>
                    <img src={theater} alt='movie theater seating'/>
                    <div> Movie Mates</div>
                </a>
                <a href="https://github.com/yippeejimmee/movie_mates">Movie Mates Repository</a>
            </div>
            <div className='projects containers small'>
                <a href='https://jimmy-takes-notes.herokuapp.com/'>
                    <img src={pencil} alt='pencil and paper'/>
                    <div> Note Taker</div>
                </a>
                <a href="https://github.com/yippeejimmee/Note-Taker/tree/main/Develop">Note Taker Repository</a>
            </div>
            <div className='projects containers small'>
                <a href='https://yippeejimmee.github.io/Weather-Dashboard/'>
                    <img src={sun} alt='sunny day'/>
                    <div> Weather App</div>
                </a>
                <a href="https://github.com/yippeejimmee/Weather-Dashboard">Weather App Repository</a>
            </div>
        </div>
        <div className='contact'>
                <p> Feel free to check out some of my work!</p>
        </div>
    </div>    
    )
}