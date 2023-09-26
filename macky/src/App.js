import './App.css';
import {Home, Footer, Delivery, Tray, MobileCategory} from "./components"
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/tray" element={<Tray />} />
        <Route
          path="/foodinfo"
          element={<MobileCategory />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
