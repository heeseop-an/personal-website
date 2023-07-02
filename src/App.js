import {Routes, Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Notfound from "./pages/404";
import "./App.css";

function App() {
  // useEffect(() => {
  //     if (TRACKING_ID !== "") {
  //         ReactGA.initialize(TRACKING_ID);
  //     }
  // }, []);

  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage/>}/>
            <Route path="/personal-website" element={<Homepage/>}/>
          {/*<Route path="/about" element={<About />} />*/}
          {/*<Route path="/projects" element={<Projects />} />*/}
          {/*<Route path="/articles" element={<Articles />} />*/}
          {/*<Route path="/article/:slug" element={<ReadArticle />} />*/}
          {/*<Route path="/contact" element={<Contact />} />*/}
          <Route path="*" element={<Notfound/>}/>
        </Routes>
      </div>
  );
}

export default App;