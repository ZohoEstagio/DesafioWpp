import { Tabs, Tab, User } from "@nextui-org/react";
import NotificationIcon from "../icons/notificationIcon";
import Avatar from "../profile/userAvatar";

export default function Sidebar() {
	return (
		<div className="w-[30%] h-full gap-4">
			<Tabs className=" w-full  bg-white gap-1" aria-label="Tabs variants" variant="underlined" color="success">
				<Tab
					key="all_chats"
					title={
						<div className="flex items-center gap-1 ">
							<span>All Chats</span>
							<NotificationIcon text={"99+"} />
						</div>
					}>
					<Avatar />
				</Tab>
				<Tab key="my_chats" title="My Chats"></Tab>
			</Tabs>
		</div>
	);
}
