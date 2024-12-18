import { Button } from "@nextui-org/react";
import InfoAvatar from "../profile/infoAvatar";
import { IconlyEmoji } from "../buttons/emojiIcon";
import { IconlyVoice } from "../buttons/microphoneIcon";

export default function Chat() {
	return (
		<div className=" flex flex-col w-[50%] h-full gap-4 items-start pt-4 pl-4 pr-4">
			<InfoAvatar />
			<div className="mt-2 h-fit flex justify-center w-full ">
				<div className="rounded-full w-14 h-fit bg-green-500 flex items-center justify-center text-[12px] text-white">Maio 22</div>
			</div>
			<div className="flex flex-row gap-4 ">
				<div className="w-12 h-10 flex justify-center items-center  text-center text-xs ">08:59 AM</div>
			
				<div className="rounded-medium w-12 h-10 bg-white flex items-center justify-center text-[12px] text-black">Maio 22</div>
			</div>
			<div className="flex-grow"></div>
			<div className="p-4 w-full bg-whit flex flex-row gap-4 items-center justify-center">
				<button className=" rounded-full justify-center bg-green-500 text-white p-2 hover:bg-green-400 transition-colors duration-300">
					<IconlyEmoji></IconlyEmoji>
				</button>
				<textarea className="w-10/12  p-2 border rounded-md resize-none text-xs focus:outline-none" rows="1" placeholder="Enter your text here..." >samf a </textarea>
				<button className=" rounded-full justify-center bg-green-500 text-white p-2 hover:bg-green-400 transition-colors duration-300">
					<IconlyVoice color="#FFFFFF"></IconlyVoice>
				</button>
			</div>

		</div>
	);
}
