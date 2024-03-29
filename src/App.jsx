import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Login from "./pages/login/Login";
import ListCity from "./pages/list city/ListCity";
import ListProperty from "./pages/list property/ListProperty";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/hotels" element={<List />} />
				<Route path="/hotels/city/:city" element={<ListCity />} />
				<Route
					path="/hotels/property/:type"
					element={<ListProperty />}
				/>
				<Route path="/hotels/:id" element={<Hotel />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
