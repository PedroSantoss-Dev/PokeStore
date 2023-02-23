import { BrowserRouter } from "react-router-dom";
import { Routing } from "./App/routes";
import { Navbar } from "./App/shared/components/Navbar";
const App = () => {
  return (
    <BrowserRouter>
     <Navbar/>
      <Routing />
    </BrowserRouter>
  )
}

export default App;
