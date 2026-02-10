// UI Only — Main App component with routing

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Marketplace from './pages/Marketplace';
import ProductDetail from './pages/ProductDetail';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Register from './pages/Register';
import { ToastContainer } from 'react-toastify';
import MyProfile from './pages/MyProfile';
import PrivateComponent from './components/PrivateComponent';
import PageNotFound from './pages/PageNotFound';


function Layout({ children }) {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/login' || location.pathname === '/admin';

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <main>{children}</main>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="*" element={<PageNotFound/>} />
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/marketplace' element={<Marketplace/>}/>       
          <Route path="/marketplace/:pid" element={<ProductDetail />} />
          <Route path='/events' element={<Events/>}/>
          <Route path="event/:eid" element={<EventDetail />} />
          <Route path='/auth' element={<PrivateComponent/>}> 
          <Route path="admin" element={<Admin />} />
          <Route path='MyProfile' element={<MyProfile/>}/>
          </Route> 
        </Routes>
        <ToastContainer/>
      </Layout>
    </Router>
  );
}

export default App;
