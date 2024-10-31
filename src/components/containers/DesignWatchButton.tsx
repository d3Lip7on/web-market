'use client';

import FilledButton from '@/components/ui/FilledButton';
import { ReactNode } from 'react';

type DesignWatchButtonProps = Readonly<{
	width: number;
	height: number;
	backgroundColor: string;
	textColor: string;
}>;

export default function DesignWatchButton({ height, width, textColor, backgroundColor }: DesignWatchButtonProps) {
	function handleClick() {}
	return (
		<FilledButton onPressed={handleClick} height={height} width={width} textColor={textColor} backgroundColor={backgroundColor}>
			Design Your Watch
		</FilledButton>
	);
}
