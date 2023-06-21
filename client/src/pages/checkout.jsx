// @ts-nocheck
import axios from "axios";
import {useRouter} from "next/router";
import {loadStripe} from "@stripe/stripe-js";
import {CREATE_ORDER} from "../utils/constants";
import {Elements} from "@stripe/react-stripe-js";
import React, {useEffect, useState} from "react";
import CheckoutForm from "../components/CheckoutForm";
const stripePromise = loadStripe("pk_test_xeqIPdYS2PpKbHmKG4gJqpde");
function Checkout(){
	const [clientSecret, setClientSecret] = useState("");
	const router = useRouter();
	const {gigId} = router.query;
	useEffect(() => {
		const createOrderIntent = async() => {
			const {data} = await axios.post(
				CREATE_ORDER,
				{gigId},
				{
					withCredentials: true,
				},
			);
		};
		if(gigId)
			createOrderIntent();
	}, [gigId]);
	const appearance = {
		theme: "stripe",
	};
	const options = {clientSecret, appearance};
	return(
		<div className = "min-h-[80vh] max-w-full mx-20 flex flex-col gap-10 items-center">
			<h1 className = "text-3xl">
				Please complete the payment to place the order.
			</h1>
			{clientSecret && (
				<Elements options = {options} stripe = {stripePromise}>
					<CheckoutForm/>
				</Elements>
			)}
		</div>
	);
};
export default Checkout;