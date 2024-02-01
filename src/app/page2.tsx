// @ts-nocheck
"use client";

import Banner from "@/components/Banner";
import React, { useState } from "react";

export default function Page() {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1);
	};

	const decrement = () => {
		setCount(count - 1);
	};

	return (
		<div>
			<h1>{count}</h1>
			<div>
				<button onClick={increment}>Add +1</button>
				<button onClick={decrement}>Subtract -1</button>
			</div>
			{/* props */}
			<Banner value={count} />
		</div>
	);
}
