import React, { Suspense } from 'react'
import './App.css'
import Axios from './components/Axios';

const Lazy = React.lazy(()=>import('./components/Lazy_loding'));
function App() {

  return (
   <>
   <Suspense fallback={<div>Loading Data...</div>}>
       <Lazy/>
       </Suspense>
       <Axios/>

   </>
  )
}

export default App
