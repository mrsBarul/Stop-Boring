import './App.css';
import Collection from './Collection';
import Player from './Player';
import Recommendation from './Recommendation';
import Title from './Title';

function App() {



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
              <Recommendation/>
          </div>
        <div className='Collection'>
          <Collection/>
        </div>
      </div>  
    </div>
  );
}

export default App;


