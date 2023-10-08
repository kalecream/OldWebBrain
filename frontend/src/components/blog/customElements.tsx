
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { CH } from '@code-hike/mdx/components';

const CustomH1 = ({ id, ...rest }) => {
	if (id) {
		return (
			<Link href={`#${id}`}>
				<h1 {...rest} />
			</Link>
		);
	}
	return <h1 {...rest} />;
};

const CustomH2 = ({ id, ...rest }) => {
	if (id) {
		return (
			<Link href={`#${id}`}>
				<h2 {...rest} />
			</Link>
		);
	}
	return <h2 {...rest} />;
};

const CustomH3 = ({ id, ...rest }) => {
	if (id) {
		return (
			<Link href={`#${id}`}>
				<h3 {...rest} />
			</Link>
		);
	}
	return <h3 {...rest} />;
};

const CustomH4 = ({ id, ...rest }) => {
	if (id) {
		return (
			<Link href={`#${id}`}>
				<h4 {...rest} />
			</Link>
		);
	}
	return <h4 {...rest} />;
};

const CustomH5 = ({ id, ...rest }) => {
	if (id) {
		return (
			<Link href={`#${id}`}>
				<h5 {...rest} />
			</Link>
		);
	}
	return <h5 {...rest} />;
};

const CustomH6 = ({ id, ...rest }) => {
	if (id) {
		return (
			<Link href={`#${id}`}>
				<h6 {...rest} />
			</Link>
		);
	}
	return <h6 {...rest} />;
};

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
export const CustomComponents = {
	Head,
    Link,
    Image,
	CH,
	CustomH1,
	CustomH2,
	CustomH3,
	CustomH4,
	CustomH5,
	CustomH6
};
