
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import profile from '../src/assets/images/profile.png'
function App() {

  return (
    <>
     <div className='flex justify-between items-center '>
     <Header></Header>
     <img src={profile} alt="" />
     </div>
      <br />
      <hr />
      <div className='md:flex justify-between items-center p-4 mx-4'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>
      
   
    </>
  )
}

export default App
