import EmailButton from "../buttons/emailButton";
import ProfileAvatar from "../profile/profileAvatar";
import TabsProfile from "./tabProfile";
import ExtendCttBt from "../buttons/extendContactBt";

export default function ProfileScreen() {
	return (
		<div className="w-[20%] h-full bg-white p-2">
			<div className="w-full flex justify-between bg-white p-2">
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
