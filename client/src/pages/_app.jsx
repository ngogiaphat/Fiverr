import "../globals.css";
import Head from "next/head";
import {useEffect} from "react";
import {useRouter} from "next/router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {useCookies} from "react-cookie";
import {StateProvider} from "../context/StateContext";
import reducer, {initialState} from "../context/StateReducers";
export default function App({Component, pageProps}){
	const router = useRouter();
	const [cookies] = useCoookies();
	useEffect(() => {
		if(router.pathname.includes("/seller") || router.pathname.includes("/buyer")){
			if(!cookies.jwt){
				router.push("/");
			};
		};
	}, [cookies, router]);
	return(
		<StateProvider initialState = {initialState} reducer = {reducer}>
			<Head>
				<link rel = "shortcut icon" href = "/favicon.ico"/>
				<title>Fiverr</title>
			</Head>
			<div>
			<Navbar/>
        <div className = {`${router.pathname !== "/" ? "mt-36" : ""} mb-auto w-full mx-auto`}>
          <Component {...pageProps}/>
        </div>
        <Footer/>
			</div>
		</StateProvider>
	);
}; 