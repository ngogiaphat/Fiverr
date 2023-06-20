import React from "react";
import {useRouter} from "next/router";
function ContextMenu({data}){
	const router = useRouter();
	return(
		<div className = "{`z-10 bg-white divide-y divide-gray-100 shadow-2xl border w-44 dark:bg-gray-700 fixed right-5 top-20`}">
			<ul>
				{data.map(({name, callback}, index) => {
					return(
						<li key = {index} onClick = {callback} className = "blocl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
							{name}
						</li>
					);
				})};
			</ul>
		</div>
	);
};