import React from "react";
import AuthWrapper from "../components/AuthWrapper";
import Services from "../components/Landing/Services";
import Companies from "../components/Landing/Companies";
import {useStateProvider} from "../context/StateContext";
import Everything from "../components/Landing/Everything";
import HeroBanner from "../components/Landing/HeroBanner";
import JoinFiverr from "../components/Landing/JoinFiverr";
import FiverrBusiness from "../components/Landing/FiverrBusiness";
import PopularServices from "../components/Landing/PopularServices";
function Index(){
	const [{showLoginModal, showSignupModal}] = useStateProvider();
	return(
		<div>
			<Services/>
			<Companies/>
			<HeroBanner/>
			<Everything/>
			<JoinFiverr/>
			<FiverrBusiness/>
			<PopularServices/>
			{(showLoginModal || showSignupModal) && (<AuthWrapper type = {showLoginModal ? "login" : "signup"}/>)}
		</div>
	);
};
export default Index;