'use client';

export default function CartButton() {
	return (
		<button className="relative">
			<img src="/images/cart.svg" />
			<div className="w-[16px] h-[16px] rounded-full bg-accent absolute top-[-11px] right-[-16px] text-[8px] text-white">
				<div className="flex justify-center items-center w-full h-full leading-[12px]">4</div>
			</div>
		</button>
	);
}
