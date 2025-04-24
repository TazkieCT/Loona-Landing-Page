export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="text-black bg-[#D295FF] p-1 text-sm font-medium w-full flex items-center justify-center px-4">
        <a href=""className="flex items-center gap-1">We are happy to announce Loóna for <img src="/apple.1d07924616a362d2ca8211ac50b73c32.svg" className="inline-block w-2" /> Vision Pro</a>
      </div>
      <header>
        <img src="/logo_loona.40e6cac69c0e50021a456dd44f6d6243.svg" className="inline-block" />
        <div className="">
          <div className=""></div> {/* topShadowGradient */}
          <video src="video.97acaa48e0dc5754e258.mp4"></video>
          <div className=""></div> {/* botShadowGradient */}
        </div>
        
        <div className="text-2xl text-center">
        </div>
        <div className=""></div>
        <button></button>
      </header>
      
      <footer className="w-full text-sm font-semibold text-white bg-[#1a1321]">
        <div className="mx-auto grid mt-[60px] mb-[110px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-[800px] justify-items-center">
          <span className="">
            <div className="font-bold">Product</div>
            <ul className="space-y-3 mt-4">
              <li><a href="" className="hover:text-gray-300">Press Kit</a></li>
              <li><a href="" className="hover:text-gray-300">Careers</a></li>
              <li><a href="" className="hover:text-gray-300">Gifts</a></li>
              <li><a href="" className="hover:text-gray-300">Quizzes</a></li>
              <li><a href="" className="hover:text-gray-300">Contact us</a></li>
            </ul>
          </span>
          <span className="">
            <div className="font-bold">Get the app</div>
            <ul className="space-y-3 mt-4">
              <li><a href="" className="hover:text-gray-300"><img src="app_google.17713a3fd7659742cf93.png" className="w-min-10 w-32" alt="Google App" /></a></li>
              <li><a href="" className="hover:text-gray-300"><img src="app_store.63a81f4ad0eb7108a420.png" className="w-min-10 w-32" alt="App Store" /></a></li>
            </ul>
          </span>
          <span className="">
            <div className="font-bold">Terms</div>
            <ul className="space-y-3 mt-4">
              <li><a href="" className="hover:text-gray-300">Terms of use</a></li>
              <li><a href="" className="hover:text-gray-300">Privacy policy</a></li>
              <li><a href="" className="hover:text-gray-300">Cookie policy</a></li>
              <li><a href="" className="hover:text-gray-300">Accessibility Statement</a></li>
            </ul>
          </span>
          <span className="">
            <div className="font-bold">Social Media</div>
            <ul className="space-y-3 mt-4">
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