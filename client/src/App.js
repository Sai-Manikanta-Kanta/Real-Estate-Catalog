import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import AddProperty from './pages/AddProperty'
import HomePage from './pages/HomePage'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
// import Profile from './pages/Profile';
import ViewPage from './pages/ViewPage';
import Update from './pages/Update'
import Protected from './Protected'
const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/addproperty' element={<Protected><AddProperty/></Protected>} />
            <Route path='/home' element={<Protected><HomePage/></Protected>}/>
            {/* <Route path='/profile' element={<Protected><Profile/></Protected>}/> */}
            <Route path='/viewpage' element={<Protected><ViewPage/></Protected>}/>
            <Route path='/update' element={<Protected><Update/></Protected>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App