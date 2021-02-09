import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
// import NewPost from './components/Profile/MyPosts/NewPost.jsx';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
      {/* <NewPost /> */}
    </div>

  );
}











export default App;
