import FlexandResponsive from "./components/FlexandResponsive";
import HoverandFocus from "./components/HoverandFocus";
import SpacingandSizing from "./components/SpacingandSizing";
import Typography from "./components/Typography";
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
     <h1 className="text-2xl text-center text-purple-700 font-bold">Merhaba Tailwind</h1>
     {/* <Typography/> */}
     {/* <SpacingandSizing/> */}
     {/* <HoverandFocus/> */}
     {/* <FlexandResponsive/> */}
    <Navbar/>
    </div>
  );
}

export default App;
