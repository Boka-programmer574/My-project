import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import {BrowserRouter,Route} from 'react-router-dom';
import Profile from './components/Profile/Profile.jsx';
import Inform from './components/Inform/Inform.jsx';
import New from './components/News/New';
import Set from './components/Set/Set';
import Sound from './components/Sound/Sound';



const App = () => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/Inform' component={Inform} />
        <Route path='/profile' component={Profile} />
        <Route path='/News' component={New} />
        <Route path='/Set' component={Set} />
        <Route path='/Sound' component={Sound} />


      
      </div>
      
      
    </div>
    </BrowserRouter>
  );
}


export default App;
