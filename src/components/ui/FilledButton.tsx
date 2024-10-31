'use client';

import { ReactNode } from 'react';

type FilledButtonProps = Readonly<{
	onPressed: () => void;
	width: number;
	height: number;
	backgroundColor: string;
	textColor: string;
	children?: ReactNode;
}>;

export default function FilledButton({ onPressed, width, height, backgroundColor, textColor, children }: FilledButtonProps) {
	return (
		<button
			onClick={() => {
				onPressed();
			}}
			className={`rounded-[5px] text-white flex justify-center items-center `}
			style={{ background: backgroundColor, width: `${width}px`, height: `${height}px`, color: textColor }}
		>
			{children}
		</button>
	);
}
