import './globals.css';
import AccountButton from '../components/containers/AccountButton';
import CartButton from '@/components/containers/CartButton';
import DesignWatchButton from '@/components/containers/DesignWatchButton';
import { colors } from '@/styles/colors';
import { sizes } from '@/constants/sizes';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<header className="pt-[14px]">
					<div className="flex justify-between items-center mx-auto" style={{ maxWidth: sizes.maxWidth }}>
						<a href="/">
							<div className="font-spaceAge">
								<h1 className=" text-[26px]">volumenzeit</h1>
								<p className="text-[10px] text-center">volumetric wrist watches</p>
							</div>
						</a>
						<div className="flex gap-[40px] items-center relative">
							<nav>
								<ul className="flex text-4 gap-[36px] text-text-secondary">
									<li className="text-black font-bold cursor-pointer">Watches</li>
									<li className="cursor-pointer">Accessories</li>
									<li className="cursor-pointer">Jewelry</li>
									<li className="cursor-pointer">Brand</li>
									<li className="cursor-pointer">Watcher</li>
								</ul>
							</nav>
							<DesignWatchButton width={175} height={55} textColor="white" backgroundColor={colors.primary} />
							<div className="absolute right-[-90px]">
								<div className="flex gap-[25px]">
									<AccountButton />
									<CartButton />
								</div>
							</div>
						</div>
					</div>
				</header>
				<main>{children}</main>
			</body>
		</html>
	);
}
