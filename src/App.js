
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Groups from './components/Header/Home/Groups';
import Services from './components/Services/Services';
import Schedule from './components/Schedule/Schedule'
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>

        <Route exact path='/' element={<Groups></Groups>}>
        </Route>
        <Route path="/home" element={<Groups></Groups>}>
        </Route>
        <Route path="/about" element={<About></About>
        }>
        </Route>
        <Route path="/services" element={<Services></Services>}>

        </Route>
        <Route path="/schedule" element={<Schedule></Schedule>}>


        </Route>
        <Route path="*" element={<NotFound></NotFound>}>

        </Route>

      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
