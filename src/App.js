import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs";     
import New from "./components/News/New";
import Set from "./components/Set/Set";
import Sound from "./components/Sound/Sound";

const App = (props) => {
 
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/Dialogs" render={ () => <Dialogs state={props.state.dataPage} />} />
          <Route path="/profile" render={ () => <Profile state={props.state.profilePage} />} />
          <Route path='/news' component={New} />
          <Route path='/sound' component={Sound} />
          <Route path='/set' component={Set} />
          
        </div> 
      </div>
    </BrowserRouter>
  );
};

export default App;
