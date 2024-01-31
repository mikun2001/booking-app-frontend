import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loader from "../loader/Loader";
import "./featured.css";

const Featured = () => {
	const { data, loading, error } = useFetch(
		"/hotels/countByCity?cities=cuttack,bbsr,salepur"
	);
	// console.log(data.length);

	const navigate = useNavigate();
	// console.log("data=>", data)
	const handleClick = (city) => {
		navigate(`/hotels/city/${city}`);
	};
	const photos = {
		cuttack:
			"https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
		bbsr: "https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=",
		salepur:
			"https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=",
	};
	return (
		<div className="featured">
			{loading || data.length == 0 ? (
				// "Loading please wait"
				<Loader />
			) : (
				<>
					{data.map((element) => {
						return (
							<div className="featuredItem">
								<Link to={`/hotels/city/${element._id}`}>
									<img
										src={photos[element._id]}
										alt=""
										className="featuredImg"
									/>
								</Link>
								<div className="featuredTitles">
									<h1>{element._id}</h1>
									<h2>{element.total} properties</h2>
								</div>
							</div>
						);
					})}
				</>
			)}
		</div>
	);
};

export default Featured;
