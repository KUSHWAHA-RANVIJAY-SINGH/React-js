import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Product';
import {  Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import ContactLayout from './layout/ContactLayout';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactFrom'; 
import RootLayout from './layout/RootLayout';
import NotFound from './components/NotFound';
import Joblayouts from './layout/Joblayouts';
import Job from './pages/Job';
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements (
      <Route path='/'element={<RootLayout/>}>
<Route index element={<Home />} />
        <Route path='Product' element={<Projects />} />
        <Route path='Contact' element={<ContactLayout />}>
          <Route path='info' element={<ContactInfo />} />
          <Route path='from' element={<ContactForm />} /> 
        </Route>
        <Route path='About' element={<About />} />
        <Route path='jobs' element={<Joblayouts/>}>
          <Route index element={<Job/>} />
        </Route>
        <Route path='*' element={<NotFound/>} />
      </Route>
    )
  )
  return (
    <div className='text-center'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;

