import "./listProperty.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";
import Loader from "../../components/loader/Loader";

const ListProperty = () => {
	const location = useLocation();
	const propertyType = location.pathname.split("/")[3];
	const [openDate, setOpenDate] = useState(false);
	const { dispatch } = useContext(SearchContext);
	const [dates, setDates] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: "selection",
		},
	]);
	const [options, setOptions] = useState({
		adult: 1,
		children: 0,
		room: 1,
	});

	const [min, setMin] = useState(0);
	const [max, setMax] = useState(1000);

	const { data, loading, error, reFetch } = useFetch(
		`/hotels?type=${propertyType}&min=${min || 0}&max=${max || 999}`
	);

	const handleClick = () => {
		dispatch({
			type: "NEW_SEARCH",
			payload: {
				city,
				dates,
				options,
			},
		});
		reFetch();
		// console.log("inside handle search data =>", data);
	};

	return (
		<div>
			<Navbar />
			<Header type="list" />
			<h1 className="hiTitle">
				Here you can find best {propertyType} ...
			</h1>
			<div className="listContainer">
				<div className="listWrapper">
					<div className="listSearch">
						<h1 className="lsTitle">Search</h1>
						<div className="lsItem">
							<label>Check-in Date</label>
							<span
								onClick={() =>
									setOpenDate(!openDate)
								}>{`${format(
								dates[0].startDate,
								"MM/dd/yyyy"
							)} to ${format(
								dates[0].endDate,
								"MM/dd/yyyy"
							)}`}</span>
							{openDate && (
								<DateRange
									onChange={(item) => {
										setDates([item.selection]);
									}}
									minDate={new Date()}
									ranges={dates}
								/>
							)}
						</div>
						<div className="lsItem">
							<label>Options</label>
							<div className="lsOptions">
								<div className="lsOptionItem">
									<span className="lsOptionText">
										Min price <small>per night</small>
									</span>
									<input
										type="number"
										min={1}
										onChange={(e) => setMin(e.target.value)}
										className="lsOptionInput"
									/>
								</div>
								<div className="lsOptionItem">
									<span className="lsOptionText">
										Max price <small>per night</small>
									</span>
									<input
										type="number"
										defaultValue={1000}
										onChange={(e) => setMax(e.target.value)}
										className="lsOptionInput"
									/>
								</div>
								<div className="lsOptionItem">
									<span className="lsOptionText">Adult</span>
									<input
										type="number"
										min={1}
										className="lsOptionInput"
										placeholder={options.adult}
									/>
								</div>
								<div className="lsOptionItem">
									<span className="lsOptionText">
										Children
									</span>
									<input
										type="number"
										min={0}
										className="lsOptionInput"
										placeholder={options.children}
									/>
								</div>
								<div className="lsOptionItem">
									<span className="lsOptionText">Room</span>
									<input
										type="number"
										min={1}
										className="lsOptionInput"
										placeholder={options.room}
									/>
								</div>
							</div>
						</div>
						<button onClick={handleClick}>Search</button>
					</div>
					<div className="listResult">
						{loading ? (
							// "loading"
							<Loader />
						) : (
							<>
								{data.map((item) => (
									<SearchItem item={item} key={item._id} />
								))}
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ListProperty;
