import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import FilterButton from "../buttons/filterIcon";

export default function Header({ item }) {
	return (
		<Navbar position="static" maxWidth="full">
			<NavbarItem>
				<FilterButton></FilterButton>
			</NavbarItem>
			<NavbarBrand>
				<p className="font-medium text-inherit">Mensagens</p>
			</NavbarBrand>

			<NavbarContent justify="end">
				<NavbarItem>
					<Button as={Link} color="success" href="#" variant="flat">
						+ Novo chat do Whatsapp
					</Button>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}
