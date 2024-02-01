// @ts-nocheck
"use client";

import React from "react";

// 1. Component
// 2. State
// 3. Props

export default function Banner({ value }) {
	return (
		<div style={{ background: value >= 0 ? "green" : "red" }}>
			Value is {value >= 0 ? "Positive" : "Negative"}
		</div>
	);
}
