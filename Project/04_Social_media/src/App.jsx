import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import { useState } from 'react';
import PostListProvider from './store/post-list-store'
function App() {
  const [selectItem, setSelectItem] = useState("Home")

  return (
    <PostListProvider>
    <div className='contenet_item'>
     <Sidebar selectItem={selectItem} setSelectItem={setSelectItem}/>
    
     <div className='content'>
      <Header />
      {selectItem ==='Home' ?(<PostList/>): (<CreatePost/>)}
         
      <Footer/>
      </div>
       </div>
    </PostListProvider>
  )
}

export default App
