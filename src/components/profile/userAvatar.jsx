import { User } from "@nextui-org/react";
import NotificationIcon from "../icons/notificationIcon";

export default function Avatar() {
	return (
		<div className="p-3 w-full h-14 flex justify-between bg-white">
			<User
				avatarProps={{
					src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
				}}
				name="Jane Doe"
				description={"Message"}
			/>
			<div className="flex flex-1 flex-col items-end">
				<h5 className="text-[12px]">12:40 pm</h5>
				<NotificationIcon text={"99+"} />
			</div>
		</div>
	);
}
