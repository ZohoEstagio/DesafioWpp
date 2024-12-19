import { User } from "@nextui-org/react";
import { Button, Link } from "@nextui-org/react";
import { IconlyCloseSquare } from "../buttons/closeIcon";

export default function InfoAvatar() {
	return (
		<div className="p-2 w-full h-14 flex justify-between bg-white">
			<User
				avatarProps={{
					src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
				}}
				name="Jane Doe"
				description={"19 99999-9999"}
			/>
			<div className="flex flex-col justify-end h-15">
				<h5 className="text-xs">Oten User</h5>
			</div>
			<div className="flex items-center justify-end gap-2">
				{" "}
				<Button as={Link} color="success" href="#" variant="bordered" size="sm">
					{" "}
					Marcar como fechado
				</Button>
				<button><IconlyCloseSquare /></button>
			</div>
		</div>
	);
}
