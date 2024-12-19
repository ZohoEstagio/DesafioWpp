import { User } from "@nextui-org/react";
import { Button, Link } from "@nextui-org/react";
import { IconlyCloseSquare } from "../buttons/closeIcon";
import EmailButton from "../buttons/emailButton";

export default function ProfileAvatar() {
	return (
		<div className="p-3 w-full h-14 flex justify-between bg-white">
			<User
				avatarProps={{
					src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
				}}
				name="Jane Doe"
				description={"Usuário-Oten"}
			/>
		</div>
	);
}
