import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profiles from "./Profiles";
import App from "./App";


export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={"page not found"}></Route>
        <Route path="/App" element={<App/>}></Route>
        <Route path="/profile" element={<Profiles/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);