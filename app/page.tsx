import Image from 'next/image';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function Home() {
	return (
		<ScrollArea className='relative overflow-x-scroll inline-block whitespace-nowrap w-[1850px] justify-center '>
			<Image
				src='/front.png'
				width={100000}
				height={100000}
				className='relative min-h-screen object-cover overflow-x-scroll'
				alt=''
			/>
			<Image
				src='/back.png'
				width={100000}
				height={100000}
				className='relative min-h-screen object-cover overflow-x-scroll'
				alt=''
			/>
		</ScrollArea>
	);
}
