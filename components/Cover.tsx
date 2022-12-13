export default function Cover() {
	return (
    <div className="bg-image w-screen overflow-hidden h-screen block z-50 lg:-mx-24 -m-6 bg-['https://btower.dev/btowerdev.jpg']">
      <div className="font-extralight absolute text-white lg:left-1/3 left-1/2 -ml-40 top-1/3 lg:top-1/2 lg:block flex flex-col items-center -mt-20 text-center lg:text-left w-80 h-40">
				<p className="text-5xl mb-6 font-extralight">Bridger Tower</p>
        <p className="mb-6 font-extralight">Designer and Developer</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 hidden lg:inline animate-pulse"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
          />
        </svg>
      </div>
      <div className="absolute lg:hidden bottom-6 lg:left-1/4 left-1/2 w-4 -ml-2 animate-pulse">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
          />
        </svg>
      </div>
    </div>
  );
}
