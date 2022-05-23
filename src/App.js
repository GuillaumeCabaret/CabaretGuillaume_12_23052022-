import './App.css';
import logo from "./img/logo.svg";
import yoga from "./img/yoga.svg";
import swim from "./img/swim.svg";
import cycling from "./img/cycling.svg";
import lifting from "./img/lifting.svg";
import Nav from "./components/Nav/Nav";
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <div className="App">
      <Nav direction="nav" data={<> <img src={logo} alt="" /><a href="/">Accueil</a><a href="/">Profil</a><a href="/">Réglage</a><a href="/">Communauté</a> </>}/>
      <Nav direction="nav--vertical" data={<><img src={yoga} alt="" /><img src={swim} alt="" /><img src={cycling} alt="" /><img src={lifting} alt="" /> <p>Copyright Sportsee 2020</p> </> }/>
      <Dashboard/>
    </div>
  );
}

export default App;
