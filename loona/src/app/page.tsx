export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="text-2xl text-center">
        <h1 className="text-4xl font-bold">Loona</h1>
      </div>
     
      <footer className="w-full text-sm text-white bg-[#1a1321]">
        <div className="mx-auto grid mt-[60px] mb-[110px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[800px] justify-items-center">
          <span className="">
            <div className="font-bold">Product</div>
            <ul className="space-y-2 mt-4">
              <li><a href="" className="hover:text-gray-300">Press Kit</a></li>
              <li><a href="" className="hover:text-gray-300">Careers</a></li>
              <li><a href="" className="hover:text-gray-300">Gifts</a></li>
              <li><a href="" className="hover:text-gray-300">Quizzes</a></li>
              <li><a href="" className="hover:text-gray-300">Contact us</a></li>
            </ul>
          </span>
          <span className="">
            <div className="font-bold">Terms</div>
            <ul className="space-y-2 mt-4">
              <li><a href="" className="hover:text-gray-300">Terms of use</a></li>
              <li><a href="" className="hover:text-gray-300">Privacy policy</a></li>
              <li><a href="" className="hover:text-gray-300">Cookie policy</a></li>
              <li><a href="" className="hover:text-gray-300">Accessibility Statement</a></li>
            </ul>
          </span>
          <span className="">
            <div className="font-bold">Social Media</div>
            <ul className="space-y-2 mt-4">
              <li><a href="" className="hover:text-gray-300">Instagram</a></li>
              <li><a href="" className="hover:text-gray-300">Facebook</a></li>
              <li><a href="" className="hover:text-gray-300">TikTok</a></li>
              <li><a href="" className="hover:text-gray-300">Twitter</a></li>
              <li><a href="" className="hover:text-gray-300">LinkedIn</a></li>
              <li><a href="" className="hover:text-gray-300">Youtube</a></li>
            </ul>
          </span>
        </div>
      </footer>
    </div>
  );
}