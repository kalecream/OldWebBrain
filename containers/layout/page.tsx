import { useEffect } from "react";
import { Navigation, Footer } from "../../components/global";
import TagManager from "react-gtm-module";

import { MetaProps } from "../../types/layout";

type LayoutProps = {
	children: React.ReactNode;
	customMeta?: MetaProps;
	title?: string;
	description?: string;
};

export const WEBSITE_HOST_URL = "https://www.kalecream.com";

export const Page = ({
	children,
	title,
	description,
	customMeta,
}: LayoutProps) => {
	useEffect(() => {
		TagManager.initialize({ gtmId: "UA-148483444-1" });
	}, []);
	return (
		<>
			<header>
				<title>KaleCream {title ? "| " + title : null}</title>
				<Navigation />
			</header>

			<main>
				<>{children}</>
			</main>
			<Footer />
		</>
	);
};

export default Page;
