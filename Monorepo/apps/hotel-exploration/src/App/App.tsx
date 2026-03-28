// router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import { Popover } from '@local/common/components';
import ListingPage from './Pages/ListingPage';
import DetailPage from './Pages/DetailPage';

export const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white text-[#222222] font-sans antialiased">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-[2520px] mx-auto px-4 sm:px-6 md:px-10 xl:px-20 h-20 flex items-center justify-between">
            <h1 className="text-[#FF385C] text-2xl font-bold tracking-tight shrink-0 flex items-center gap-1 cursor-pointer">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 fill-current"
              >
                <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.011.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.644-.673-.62.652c-2.185 2.261-4.57 3.667-6.848 3.667-3.48 0-6.357-2.416-6.357-6.478 0-.85.17-1.787.534-2.827l.184-.504c.934-2.483 5.09-11.233 7.073-14.896l.465-.87C12.537 1.963 13.992 1 16 1z"></path>
              </svg>
              <span className="hidden lg:block">hotelbnb</span>
            </h1>

            <div className="hidden md:flex items-center ring-1 ring-gray-200 rounded-full py-2 px-4 shadow-[0_1px_2px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-md transition cursor-pointer">
              <div className="text-sm font-semibold px-4">Anywhere</div>
              <div className="text-sm font-semibold px-4 border-x border-gray-200">
                Any week
              </div>
              <div className="text-sm text-gray-500 pl-4 pr-2 flex items-center gap-3">
                Add guests
                <div className="bg-[#FF385C] rounded-full p-1.5 text-white">
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 fill-none stroke-current stroke-[4px] font-bold"
                  >
                    <path d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
                  </svg>
                </div>
              </div>
            </div>

            <nav className="flex gap-2 items-center shrink-0">
              <a
                href="/dashboard"
                className="hidden sm:block text-sm font-semibold hover:bg-gray-100 px-4 py-2.5 rounded-full transition-colors"
              >
                hotelbnb your home
              </a>
              <Popover
                align="right"
                trigger={
                  <div className="flex items-center gap-2 border border-gray-300 rounded-full py-1.5 px-2 hover:shadow-md transition cursor-pointer bg-white">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-1 fill-none stroke-current stroke-[3px]"
                    >
                      <path d="M2 16h28M2 24h28M2 8h28"></path>
                    </svg>
                    <div className="bg-gray-500 text-white rounded-full overflow-hidden w-7 h-7 flex items-center justify-center">
                      <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-7 h-7 fill-current mt-2"
                      >
                        <path d="M16 17a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM9 30c0-4.418 3.582-8 8-8s8 3.582 8 8H9z"></path>
                      </svg>
                    </div>
                  </div>
                }
                content={
                  <div className="flex flex-col py-1">
                    <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm font-semibold">
                      Messages
                    </div>
                    <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm font-semibold">
                      Trips
                    </div>
                    <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm font-semibold border-b border-gray-100">
                      Wishlists
                    </div>
                    <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-[#717171]">
                      Manage listings
                    </div>
                    <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-[#717171]">
                      Account
                    </div>
                    <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-[#717171] border-t border-gray-100 mt-1 pt-3">
                      Sign out
                    </div>
                  </div>
                }
              />
            </nav>
          </div>
        </header>

        <main className="max-w-[2520px] mx-auto px-4 sm:px-6 md:px-10 xl:px-20 py-8">
          <Routes>
            <Route path="/" element={<ListingPage />} />
            <Route path="/hotel/:id" element={<DetailPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
