import './App.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className='bg-[#F5F5F5]'>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
