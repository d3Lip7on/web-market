import './globals.css';
import AccountButton from '../components/containers/AccountButton';
import CartButton from '@/components/containers/CartButton';
import DesignWatchButton from '@/components/containers/DesignWatchButton';
import { colors } from '@/styles/colors';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<header className="flex justify-between items-center pt-[14px] pl-[165px] pr-[60px] gap-[40px]">
					<div className="flex justify-between items-center flex-grow">
						<button>
							<img src="/images/logo.jpg" />
						</button>

						<nav>
							<ul className="flex text-4 gap-[36px] text-text-secondary">
								<li className="text-black font-bold cursor-pointer">Watches</li>
								<li className="cursor-pointer">Accessories</li>
								<li className="cursor-pointer">Jewelry</li>
								<li className="cursor-pointer">Brand</li>
								<li className="cursor-pointer">Watcher</li>
							</ul>
						</nav>
					</div>
					<div className="flex gap-[25px]">
						<DesignWatchButton width={175} height={55} textColor="white" backgroundColor={colors.primary} />
						<AccountButton />
						<CartButton />
					</div>
				</header>
				<main>{children}</main>
			</body>
		</html>
	);
}
