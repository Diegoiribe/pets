import "./assets/css/base/base.css";
import "./assets/css/componentes/card.css";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Page404 from "./pages/Page404";
import Header from "./components/Header";
import Post from "./pages/Post";
import Categoria from "./pages/Categoria";

import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route
					path="https://pets-silk-nu.vercel.app/"
					element={<Home />}
				/>
				<Route
					path="https://pets-silk-nu.vercel.app/sobre"
					element={<Sobre />}
				/>
				<Route
					path={
						"https://pets-silk-nu.vercel.app/posts/:id"
					}
					element={<Post />}
				/>
				<Route
					path="https://pets-silk-nu.vercel.app/categorias/:id/*"
					element={<Categoria />}
				/>
				<Route
					path="*"
					element={<Page404 />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
