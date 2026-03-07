export default function Footer() {
    return (
      <footer className="w-full text-sm text-white bg-[#1a1321] flex justify-center">
        <div className="flex flex-wrap justify-center mt-[30px] mb-[31px] mr-[30px] ml-[32px] lg:mr-0 lg:ml-0 gap-8 lg:gap-12 max-w-[1000px] px-4">
          <span className="flex-[0_0_calc(50%-1rem)] lg:flex-1 order-3 lg:order-none">
            <div className="font-bold">Product</div>
            <ul className="space-y-3 mt-4">
              <li><a href="" className="hover:text-gray-300">Press Kit</a></li>
              <li><a href="" className="hover:text-gray-300">Careers</a></li>
              <li><a href="" className="hover:text-gray-300">Gifts</a></li>
              <li><a href="" className="hover:text-gray-300">Quizzes</a></li>
              <li><a href="" className="hover:text-gray-300">Contact us</a></li>
            </ul>
          </span>
          <span className="flex-[0_0_calc(50%-1rem)] lg:flex-1 order-1 lg:order-none">
            <div className="font-bold">Get the app</div>
            <ul className="space-y-3 mt-4">
              <li><a href="" className="hover:text-gray-300"><img src="app_google.17713a3fd7659742cf93.png" className="w-min-10 w-32" alt="Google App" /></a></li>
              <li><a href="" className="hover:text-gray-300"><img src="app_store.63a81f4ad0eb7108a420.png" className="w-min-10 w-32" alt="App Store" /></a></li>
            </ul>
          </span>
          <span className="flex-[0_0_calc(50%-1rem)] lg:flex-1 order-2 lg:order-none">
            <div className="font-bold">Terms</div>
            <ul className="space-y-3 mt-4">
              <li><a href="" className="hover:text-gray-300">Terms of use</a></li>
              <li><a href="" className="hover:text-gray-300">Privacy policy</a></li>
              <li><a href="" className="hover:text-gray-300">Cookie policy</a></li>
              <li><a href="" className="hover:text-gray-300 lg:whitespace-nowrap">Accessibility Statement</a></li>
            </ul>
          </span>
          <span className="flex-[0_0_calc(50%-1rem)] lg:flex-1 order-4 lg:order-none">
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
    )
}