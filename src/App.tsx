import { BrowserRouter, Routes, Route } from "react-router-dom";
import {HelmetProvider} from "react-helmet-async"
import Home from "./Home";

function App() {

  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App

