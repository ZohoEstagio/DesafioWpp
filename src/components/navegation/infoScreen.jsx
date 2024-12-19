import EmailButton from "../buttons/emailButton";
import ProfileAvatar from "../profile/profileAvatar";
import TabsProfile from "./tabProfile";
import ExtendCttBt from "../buttons/extendContactBt";

export default function ProfileScreen() {
	return (
		<div className="w-[20%] h-full pt-2 pl-2 pr-2 bg-white">
			<div className="w-full flex justify-between bg-white ">
				<ProfileAvatar>
					<h1>Usuário Oten</h1>
				</ProfileAvatar>
				<ExtendCttBt />
			</div>

			<EmailButton />
			<TabsProfile />
		</div>
	);
}
