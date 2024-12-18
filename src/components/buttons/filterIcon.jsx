import { Button, Link } from "@nextui-org/react";

export const IconlyFilter = ({ size = 24, color = "black" }) => {
	return (
		<svg width={size} height={size} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M13.4951 7.85754H19.1371" stroke={color} strokeWidth="1.5" strokeLinecap="square"></path>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M9.51 7.79765C9.51 6.35565 8.333 5.18665 6.88 5.18665C5.428 5.18665 4.25 6.35565 4.25 7.79765C4.25 9.23965 5.428 10.4086 6.88 10.4086C8.333 10.4086 9.51 9.23965 9.51 7.79765Z"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="square"></path>
			<path d="M11.0053 17.4708H5.36328" stroke={color} strokeWidth="1.5" strokeLinecap="square"></path>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M14.9902 17.4095C14.9902 15.9675 16.1672 14.7985 17.6202 14.7985C19.0722 14.7985 20.2502 15.9675 20.2502 17.4095C20.2502 18.8515 19.0722 20.0215 17.6202 20.0215C16.1672 20.0215 14.9902 18.8515 14.9902 17.4095Z"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="square"></path>
		</svg>
	);
};

export default function FilterButton() {
	return <Button as={Link} startContent={<IconlyFilter />} color="default" variant="light" size="sm" className="rounded-2xl"></Button>;
}
