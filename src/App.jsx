import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Admin from './Components/Admin';
import View from './Components/View';
import Edit from './Components/Edit';
import Add from './Components/Add';
import PageNotfound from './Components/PageNotfound';

function App() {
  return (
    <div className="App">
      <Header/>


      <section>
        <Routes>
          <Route path='/' element={<Admin/>}/>

          <Route path='/view/:id' element={<View/>}/>

          <Route path='/edit/:id' element={<Edit/>}/>

          <Route path='/add' element={<Add/>}/>

          <Route path='*' element={<PageNotfound/>
        }/>



        </Routes>


      </section>





      <Footer/>
      
    </div>
  );
}

export default App;
