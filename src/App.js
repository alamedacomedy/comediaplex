import './App.css';
import VideoPlayer from './VideoPlayer.js';

function App() {
  return (
    <div className="App"> 
      <header className="App-header">
        <img src='./img/comediaplex-banner.jpg' className="App-logo" height="300" alt="logo" />
      </header>
      <VideoPlayer/>
    </div>
  );
}

export default App;
