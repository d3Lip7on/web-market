import './globals.css';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<header className="flex ">
				<div></div>
			</header>
			<body>{children}</body>
		</html>
	);
}
