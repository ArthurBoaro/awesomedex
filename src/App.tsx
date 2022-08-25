import {Route, Routes} from 'react-router-dom';
import { Home } from './pages/Home/index';
import { Pokemon } from './pages/Pokemon/index'
import { NotFound } from './pages/NotFound/index';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/pokemon/:id' element={<Pokemon />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App;