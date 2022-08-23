import { BrowserRouter } from "react-router-dom";
import { Routes, Route} from "react-router-dom";
import './App.sass';
import Home from './pages/Home';
import Popular from './pages/Popular';
import Battle from './pages/Battle';
import Layout from './pages/Layout'

function App() {
	let languageParams = `All`
  return (
    <div className="App">
      <BrowserRouter>
			<Routes >
				<Route path="/" element={<Layout routeDetails={languageParams}/>}>
					<Route path="/" element={<Home/>}></Route>
					<Route path="popular/:languageParams" element={<Popular/>}></Route>
					<Route path="battle" element={<Battle/>}></Route>
					<Route path="*" element={<p>Not found</p>}></Route>
				</Route>
			</Routes>	
		</BrowserRouter>
    </div>
  );
}

export default App;
