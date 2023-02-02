import { useEffect, useState } from 'react';
import './App.css';
import { dataCollection } from "./dataCollection";
import Collection from './Collection';
import Player from './Player';
import Recommendation from './Recommendation';
import Title from './Title';

function App() {

  
  const [activity, setActivity] = useState('');
  const [collection] = useState(dataCollection)

  const getActivity = async() => {
    const response = await fetch('http://www.boredapi.com/api/activity/ ')
    const data = await response.json()
    setActivity(data.activity)
  }

  useEffect(() => {
    getActivity()
  }, [])

  const newActivity = (e) => {
    e.preventDefault()
  }

  return (
    <div className="App">
      <div className='AppColor'>
        <div className='contentContainer'>
            <div className="mainTitle">
              <Title/>
            </div>
            <div className='Player'>
              <Player/>
            </div>
          </div>
          <div className='Recom'>
              <Recommendation actives={ activity }/>
              <button className="btnRecomContainer" onSubmit={newActivity} onClick={getActivity}>
                <h3 className="btnRecom">Choose your activity</h3>
              </button>
          </div>
        <div className='Collection'>

          <Collection collection={ collection }/>
        </div>
      </div>  
    </div>
  );
}

export default App;


