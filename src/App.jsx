
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import profile from '../src/assets/images/profile.png'
import { useState } from 'react'
function App() {
  
  const [bookmarks, setBookmarks] = useState([]);

  const handleAdd = blog =>{
    console.log(blog)
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  }

  return (
    <>
     <div className='flex justify-between items-center '>
     <Header></Header>
     <img src={profile} alt="" />
     </div>
      <br />
      <hr />
      <div className='md:flex justify-between p-4 max-w-7xl mx-auto'>
      <Blogs handleAdd={handleAdd}
      ></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
      
   
    </>
  )
}

export default App
