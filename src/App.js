import './App.css';
import Footer from './Components/Footer'
import Header from './Components/Header'
import Image2 from './Components/Image2';
import Images from './Components/Images'
import List from './Components/List'

function App() {
  return (
    <div>
     <Header/>
      <section className='content'>
         <List/>
        <Images/>
        <Image2/>
      </section>
     <Footer/>
     </div> 
  );
}

export default App;
