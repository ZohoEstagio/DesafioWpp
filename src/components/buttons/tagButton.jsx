import { Button, Link } from "@nextui-org/react";

export function AddIcon() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
			<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
		</svg>
	);
}

export default function AddTagButton() {
	return (
		<Button as={Link} startContent={<AddIcon />} color="default" variant="light" size="sm" className="rounded-2xl">
			Inserir tag
		</Button>
	);
}
