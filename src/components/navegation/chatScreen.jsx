import InfoAvatar from "../profile/infoAvatar";

export default function Chat() {
	return (
		<div className=" flex flex-col w-[50%] h-full gap-4 items-center">
			<InfoAvatar className="" />
			<div className="mt-2 h-fit ">
				<div className="rounded-full w-14 h-fit bg-green-500 flex items-center justify-center text-[12px] text-white">Maio 22</div>
			</div>
			<div className="self-start w-10">08:59 AM</div>
		</div>
	);
}
