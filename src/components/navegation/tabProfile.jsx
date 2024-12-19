// import { Tabs, Tab } from "@nextui-org/react";
// import { SmartphoneIcon, CallIcon, IconlyMessage, MapIcon, PhoneIcon } from "../icons/iconsProfile";
// import AddTagButton from "../buttons/tagButton";

// export default function TabsProfile() {
// 	return (
// 		<div className="flex flex-wrap gap-4">
// 			<Tabs aria-label="Tabs variants" color="success" variant="underlined">
// 				<Tab key="informacoes" title="Informações">
// 					<div className="text-sm h-fit p-2">
// 						<h4 className="text-black">Info Básica</h4>
// 						<div className="w-fit h-fit flex justify-between p-1">
// 							<IconlyMessage />
// 							<label>email@email.com</label>
// 						</div>
// 						<div className="w-fit h-fit flex justify-between p-1">
// 							<SmartphoneIcon />
// 							<label>19 99999-9999</label>
// 						</div>
// 						<div className="w-fit h-fit flex justify-between p-1">
// 							<CallIcon />
// 							<label>19 99999-9999</label>
// 						</div>
// 						<div className="w-fit h-fit flex justify-between p-1">
// 							<PhoneIcon />
// 							<label>19 99999-9999</label>
// 						</div>
// 						<div className="w-fit h-fit flex justify-between p-1">
// 							<MapIcon />
// 							<label>Rua dos Bobos, 0</label>
// 						</div>
// 					</div>
// 					<div className="text-sm h-fit p-2">
// 						<h4 className="text-black text-sm">Tags</h4>
// 						<AddTagButton />
// 					</div>
// 					<div className="text-sm h-fit p-2">
// 						<h4>Descrição</h4>
// 					</div>
// 					<div className="text-sm h-fit p-2">
// 						<h4>Outras informações</h4>
// 						<label className="text-sm p-2"> Produto</label>
// 						<br />
// 						<label className="text-sm p-2">Opção de sair do E-mail</label>
// 					</div>
// 				</Tab>
// 				<Tab key="pipelines" title="Pipelines" />
// 			</Tabs>
// 		</div>
// 	);
// }

import { Tabs, Tab } from "@nextui-org/react";
import { SmartphoneIcon, CallIcon, IconlyMessage, MapIcon, PhoneIcon } from "../icons/iconsProfile";
import AddTagButton from "../buttons/tagButton";

export default function TabsProfile() {
	return (
		<div className=" w-fit flex flex-wrap gap-4 bg-white">
			<Tabs aria-label="Tabs variants" color="success" variant="underlined">
				<Tab key="informacoes" title="Informações">
					<div className="text-sm p-2">
						<h4 className="text-black text-xs">Info Básica</h4>
						<div className="flex flex-col gap-2">
							<div className="flex items-center gap-1">
								<IconlyMessage />
								<div className="w-32 p-1 border border-gray-300 rounded text-gray-700 text-xs">email@email.com</div>
							</div>
							<div className="flex items-center gap-1">
								<SmartphoneIcon />
								<div className="w-32 p-1 border border-gray-300 rounded text-gray-700 text-xs">19 99999-9999</div>
							</div>
							<div className="flex items-center gap-1">
								<CallIcon />
								<div className="w-32 p-1 border border-gray-300 rounded text-gray-700 text-xs">19 99999-9999</div>
							</div>
							<div className="flex items-center gap-1">
								<PhoneIcon />
								<div className="w-32 p-1 border border-gray-300 rounded text-gray-700 text-xs">19 99999-9999</div>
							</div>
							<div className="flex items-center gap-1">
								<MapIcon />
								<div className="w-32 p-1 border border-gray-300 rounded text-gray-700 text-xs">Rua dos Bobos, 0</div>
							</div>
						</div>
					</div>
					<div className="text-sm h-fit p-1">
						<h4 className="text-black text-xs">Tags</h4>
						<AddTagButton />
					</div>
					<div className="w-[20%]text-sm h-fit p-1">
						<h4 className="text-xs">Descrição</h4>
					</div>
					<div className="text-sm h-fit p-1">
						<h4 className="text-xs">Outras informações</h4>
						<div className="flex items-center gap-1 mb-2">
							<div className="w-24 text-gray-700 text-xs">Produto</div>
							<div className="w-24 p-1 border border-gray-300 rounded text-gray-700 text-xs">Produto</div>
						</div>
						<div className="flex items-center gap-1">
							<div className="w-24 text-gray-700 text-xs">Opção de sair do E-mail</div>
							<div className="w-24 p-1 border border-gray-300 rounded text-gray-700 text-xs">Sim/Não</div>
						</div>
					</div>
				</Tab>
				<Tab key="pipelines" title="Pipelines" />
			</Tabs>
		</div>
	);
}
