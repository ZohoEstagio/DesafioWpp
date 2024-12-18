import { Button, Link } from "@nextui-org/react";

export const IconlyMessage = ({ size = 16, color = "#fafafa" }) => {
	return (
		<svg width={size} height={size} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
			<title>Iconly/Light/Message</title>
			<g id="Iconly/Light/Message" stroke="none" strokeWidth="1.5" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
				<g id="Message" transform="translate(2.000000, 3.000000)" stroke={color} strokeWidth="1.5">
					<path
						d="M15.9026143,5.8511436 L11.4593272,9.46418164 C10.6198313,10.1301843 9.4387043,10.1301843 8.59920842,9.46418164 L4.11842516,5.8511436"
						id="Stroke-1"></path>
					<path
						d="M14.9088637,17.9999789 C17.9502135,18.0083748 20,15.5095497 20,12.4383622 L20,5.57001263 C20,2.49882508 17.9502135,5.32907052e-15 14.9088637,5.32907052e-15 L5.09113634,5.32907052e-15 C2.04978648,5.32907052e-15 1.77635684e-15,2.49882508 1.77635684e-15,5.57001263 L1.77635684e-15,12.4383622 C1.77635684e-15,15.5095497 2.04978648,18.0083748 5.09113634,17.9999789 L14.9088637,17.9999789 Z"
						id="Stroke-3"></path>
				</g>
			</g>
		</svg>
	);
};

export default function EmailButton() {
	return (
		<Button as={Link} startContent={<IconlyMessage />} color="success" variant="solid" size="sm" className="rounded-2xl text-xs text-white">
			Enviar email
		</Button>
	);
}
