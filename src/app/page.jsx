"use client";

import Chat from "@/components/navegation/chatScreen";
import ProfileScreen from "@/components/navegation/infoScreen";
import Header from "@/components/navegation/navbar";
import Sidebar from "@/components/navegation/sidebar";

export default function Home() {
	return (
		<div className="w-screen h-screen flex flex-col">
			<Header />
			<div className="w-full h-full flex flex-row">
				<Sidebar />
				<Chat />
				<ProfileScreen />
			</div>
		</div>
	);
}
