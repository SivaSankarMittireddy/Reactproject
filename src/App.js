import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import NameList from './components/NameList';
import UserList from './components/UserList';
import FunctionalUserList from './components/FunctionalUserList';

function App() {
  return (
    <div className="App">
      
      <Nav />
      <h1>Welcome to REACTJS</h1><br></br>
    <FunctionalUserList/>
      <Footer />

      <NameList/>
    </div>
  );
}

export default App;
