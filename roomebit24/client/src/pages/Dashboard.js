
import TinderCard from 'react-tinder-card'
import {useState} from 'react'
import React from 'react'; 
import ChatContainer from '../components/ChatContainer';

const Dashboard = () => {

    const characters = [
        {
          name: 'Sydney Richman',
          major: 'Immersive Media Design',
          hobby: 'Art Projects',
          url: 'https://i.imgur.com/Q9WPlWA.jpeg'
        },
        {
            name: 'Nancy Puthenpurayil',
            major: 'Computer Science',
            hobby: 'Playing Basketball',
            url: 'https://i.imgur.com/Q9WPlWA.jpeg'
        },
        {
            name: 'Sania Rashid',
            major: 'Computer Science',
            hobby: 'Playing Chess',
            url: 'https://i.imgur.com/Q9WPlWA.jpeg'
        },
        {
            name: 'Jessica Parker',
            major: 'Journalism',
            hobby: 'Painting and Sculpting',
            url: 'https://i.imgur.com/Q9WPlWA.jpeg'
        },
        {
            name: 'Samantha Stevens',
            major: 'Computer Science',
            hobby: 'Playing Basketball',
            url: 'https://i.imgur.com/Q9WPlWA.jpeg'
        }
      ]
    const [lastDirection, setLastDirection] = useState()
  
    const swiped = (direction, nameToDelete) => {
      console.log('removing: ' + nameToDelete)
      setLastDirection(direction)
    }
  
    const outOfFrame = (name) => {
      console.log(name + ' left the screen!')
    }
  

    return (
        <div className='dashboard'>
            
            <ChatContainer/>
            <div className="swipe-container">
                <div className="card-container">
                    {characters.map((character) =>
                    <TinderCard 
                    className='swipe' 
                    key={character.name} 
                    onSwipe={(dir) => swiped(dir, character.name)} 
                    onCardLeftScreen={() => outOfFrame(character.name)}>
                <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
                    <h3 className="name">{character.name}</h3>
                    <div className="carousel-info">
                        <p>{character.major}</p>
                        <p>{character.hobby}</p>
                    </div>
                </div>


                    </TinderCard>
                )}
                <div className="swipe-info">
                    {lastDirection ? <p>You Swiped {lastDirection}</p> : <p/>}

                </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;