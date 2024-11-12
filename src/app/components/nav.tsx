"use client";
import Link from "next/link";
import style from "@styles/modules/nav.module.scss";
import { usePathname } from "next/navigation";
import Directory from "@data/directory";
import Breadcrumb from "./Breadcrumb";
import ThemeSwitch from "@components/navigation/theme-toggle";

export function Navbar() {
	const path = usePathname();
	return (
		<header id="header">
			<nav id="nav">
				<Breadcrumb />
				<div className="nav_section">
					{Directory.length > 0 &&
						Directory.map((directory, index) => (
							
							<div key={index}>
								<Link
									className={style['directory-link']}
									href={directory.links}
								>
									{directory.title}
								</Link>
							</div>
						))}
					<ThemeSwitch />
				</div>
			</nav>
		</header>
	);
}
