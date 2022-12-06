// import Image from 'next/image';
// import btower from '../public/btowerdev.jpg';

export default function Cover() {
	return (
		<div className="w-screen h-screen block z-50 -m-6 bg-slate-50 bg-['/btowerdev.jpg']">
			<div className="absolute invert left-1/2 -ml-40 top-1/2 -mt-20 text-center w-80 h-40">
				<p className="text-5xl mb-6">Bridger Tower</p>
				<p>Designer and Developer</p>
			</div>
		</div>
	);
}
