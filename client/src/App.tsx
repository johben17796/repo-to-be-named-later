//imports
import { Outlet } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';

//display function
function App() {

  return (
    <div>
      <header>
        <Header />
      </header>
      <div className='bottomflex'>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
      </div>
    </div>
  )
}

export default App
