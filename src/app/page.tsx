import { colors } from '@/styles/colors';
import DesignWatchButton from '@/components/containers/DesignWatchButton';
import { sizes } from '@/constants/sizes';

export default function Home() {
	return (
		<div>
			<section className="pt-[160px] pb-[198px] bg-[url('/images/watch-background.png')] bg-no-repeat bg-[right_0px_bottom_0px] bg-auto">
				<div style={{ maxWidth: sizes.maxWidth }} className="mx-auto">
					<div className="w-[560px]">
						<h1 className="font-spaceAge text-[60px] uppercase mb-[25px] leading-[50px]">Find your dream watch</h1>
						<p className="text-[14px] text-text-secondary mb-[40px] leading-[28px]">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim facilisi elementum commodo ipsum. Aenean aenean adipiscing lect
						</p>
						<DesignWatchButton width={208} height={55} textColor="white" backgroundColor={colors.primary} />
					</div>
				</div>
			</section>
		</div>
	);
}
