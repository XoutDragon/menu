import Image from 'next/image';

export default function Home() {
	return (
		<div className='h-screen relative overflow-auto'>
			<Image
				src='/front.png'
				width={100000}
				height={100000}
				className='relative inset-0 min-h-screen object-cover overflow-auto'
				alt=''
			/>
			<Image
				src='/back.png'
				width={100000}
				height={100000}
				className='relative inset-0 min-h-screen object-cover overflow-auto'
				alt=''
			/>
		</div>
	);
}
