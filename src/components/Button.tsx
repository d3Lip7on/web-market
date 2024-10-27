'use client';

type ButtonProps = Readonly<{
	text: string;
	onPressed: () => void;
	isBlack: boolean | undefined;
	width: number;
}>;

export default function Button({ text, onPressed, isBlack, width }: ButtonProps) {
	const color = isBlack ? 'black' : '#735CFF';
	return (
		<button
			onClick={() => {
				onPressed();
			}}
			className={`rounded-[5px] py-[22px] text-white`}
			style={{ background: `${color}`, width: `${width}px` }}
		>
			{text}
		</button>
	);
}
