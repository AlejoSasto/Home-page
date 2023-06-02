  import './App.css';
 import { HashRouter ,Route,Routes} from "react-router-dom";
import { HomePage } from './Router/HomePage';
import { BlogPag } from './Router/BlogPag';
import { ProfilePeg } from './Router/ProfilePeg';
import VideoCompensarMenu from './portada/imagen';
import Pantalla from './portada/Pantalla';
// import { Menu } from './Router/Menu';
  
//tiene que agregarle el /#/la_ruta
function App() {
  return (
    <>
{/* 
<HashRouter>
    <Menu/>
<Routes> 
    <Route  path="/" element={<HomePage/>}/>
    <Route path="/blog" element={<BlogPag/>}/>
    <Route path="/profile" element={<ProfilePeg/>}/>
    <Route path="/*" element={<p>not found</p>}/>
</Routes>
</HashRouter> */}
<Pantalla/>
</>
  );
}

export default App;
