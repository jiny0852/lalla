
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Ex02 from './views/Ex02.jsx';


function App() {

  return (

    <div>

      <BrowserRouter>

        <Routes>

          <Route path='/ex02' element={<Ex02 />} />


        </Routes>

      </BrowserRouter>

    </div>

  );

}

export default App;