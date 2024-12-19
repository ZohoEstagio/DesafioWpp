"use client";

import Chat from "@/components/navegation/chatScreen";
import ProfileScreen from "@/components/navegation/infoScreen";
import Header from "@/components/navegation/navbar";
import Sidebar from "@/components/navegation/sidebar";
import { Divider } from "@nextui-org/react";

export default function Home() {
	return (
		<div className="w-screen h-screen flex flex-col">
			<Header />
			<Divider orientation="horizontal" />
			<div className="w-full h-full flex flex-row">
				<Sidebar />
				<Divider orientation="vertical" />
				<Chat />
				<Divider orientation="vertical" />
				<ProfileScreen />
			</div>
		</div>
	);
}
