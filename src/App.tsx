import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageBanner from './components/PageBanner';
import Users  from './db/db';
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import SettingPage from './pages/SettingPage';

function App() {
  // const user: IUser = {
  //   username: Users.username,
  //   role: Users.role,
  //   todos: Users.todos,
  //   settings: Users.settings,
  // }
  
  return (
    <>
    <BrowserRouter>
      <PageBanner />
      <Routes>
        <Route path='/' element= {<Homepage />} />
        <Route path='/login' element= {<LoginPage />} />
        <Route path='/settings' element= {<SettingPage />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
