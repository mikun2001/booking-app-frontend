import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

// #c47c5e	RGB(196, 124, 94)	Terracotta Chip	—
// #9c96af	RGB(156, 150, 175)	Night Music	—
// #c4cd87	RGB(196, 205, 135)	Soft Celery	—
// #e7cfca	RGB(231, 207, 202)	Soft Ice Rose	—

const Home = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<div className="homeContainer">
				<Featured />
				<h1 className="homeTitle">Browse by property type</h1>
				<PropertyList />
				<h1 className="homeTitle">Homes guests love</h1>
				<FeaturedProperties />
				<MailList />
				<Footer />
			</div>
		</div>
	);
};

export default Home;
