import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Brendlər from "./pages/Brendlər";
import Kampaniyalar from "./pages/Kampaniyalar";
import Filiallar from "./pages/Filiallar";
import Əlaqə from "./pages/Əlaqə";
import Səbət from "./pages/Səbət";
import Footer from "./components/Footer";
import Paltaryuyanlarr from "./pages/Paltaryuyanlarr";
import Sobalar from "./pages/Sobalar";
import Details from "./pages/Details";
import Qeydiyyat from "./pages/Qeydiyyat";
import Iron from "./pages/Iron";
import Whatsapp from "./components/Whatsapp";


function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/brendlər" element={<Brendlər />} />
    <Route path="/kampaniyalar" element={<Kampaniyalar />} />
    <Route path="/filiallar" element={<Filiallar />} />
    <Route path="/əlaqə" element={<Əlaqə />} />
    <Route path="/səbət" element={<Səbət />} />
    <Route path="/paltaryuyanlarr" element={<Paltaryuyanlarr />} />
    <Route path="/sobalar" element={<Sobalar />} />
    <Route path="/utuler" element={<Iron />} />
    <Route path="/details/:id" element={<Details />} />
    <Route path="/qeydiyyat" element={<Qeydiyyat />} />

  </Routes> 
  <Whatsapp/>
  <Footer/>
  </>
  )
}

export default App;
