import axios from "axios";
import React from "react";

const api = axios.create({
	baseURL: "http://wangari.et",
	withCredentials: true,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json"
	}
})

export default api;