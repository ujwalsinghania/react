import { useParams, useNavigate } from 'react-router-dom';
import { HOTELS } from '../data';

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const hotel = HOTELS.find((h) => h.id === id);

  if (!hotel) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <h2 className="text-2xl font-semibold mb-2 text-[#222222]">
          Property not found
        </h2>
        <button
          onClick={() => navigate('/')}
          className="mt-4 font-semibold underline hover:bg-gray-100 px-4 py-2 rounded-lg transition"
        >
          Back to home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-[1120px] mx-auto pb-12 animate-in fade-in duration-500 text-[#222222]">
      {/* Title section */}
      <h1 className="text-[26px] font-semibold mb-2">{hotel.name}</h1>

      <div className="flex justify-between items-end mb-6">
        <div className="flex items-center gap-2 text-sm font-medium">
          <span className="flex items-center gap-1">
            ★ <span className="font-semibold">{hotel.rating}</span>
          </span>
          <span className="text-gray-400">·</span>
          <span className="underline cursor-pointer">{hotel.location}</span>
        </div>
        <div className="flex items-center gap-4 text-sm font-semibold underline cursor-pointer">
          <span className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md transition">
            <svg
              viewBox="0 0 32 32"
              className="w-4 h-4 fill-none stroke-current stroke-[2px]"
            >
              <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9M16 3v23M6 13l9.3-9.3a1 1 0 0 1 1.4 0L26 13"></path>
            </svg>
            Share
          </span>
          <span className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md transition">
            <svg
              viewBox="0 0 32 32"
              className="w-4 h-4 fill-none stroke-current stroke-[2px]"
            >
              <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
            </svg>
            Save
          </span>
        </div>
      </div>

      {/* Hero Image */}
      <div className="aspect-[16/7] md:h-[500px] w-full rounded-2xl overflow-hidden mb-10 group relative">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
        />
        <button
          onClick={() => navigate('/')}
          className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-sm hover:scale-105 transition hover:shadow-md border border-gray-200"
        >
          <svg
            viewBox="0 0 32 32"
            className="w-4 h-4 fill-none stroke-current stroke-[3px]"
          >
            <path d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path>
          </svg>
        </button>
      </div>

      {/* Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="flex justify-between items-start pb-6 border-b border-gray-200">
            <div>
              <h2 className="text-[22px] font-semibold mb-1">
                Entire resort hosted by Premium Resorts Ltd.
              </h2>
              <p className="text-[#717171]">
                4 guests · 2 bedrooms · 3 beds · 2 baths
              </p>
            </div>
            <div className="w-14 h-14 bg-gray-200 rounded-full shrink-0 flex items-center justify-center overflow-hidden">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full fill-white bg-gray-400 mt-2"
              >
                <path d="M16 17a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM9 30c0-4.418 3.582-8 8-8s8 3.582 8 8H9z"></path>
              </svg>
            </div>
          </div>

          <div className="pb-6 border-b border-gray-200 space-y-6">
            <div className="flex gap-4">
              <svg
                viewBox="0 0 32 32"
                className="w-7 h-7 shrink-0 fill-none stroke-current stroke-[2px] mt-1"
              >
                <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
              </svg>
              <div>
                <h3 className="font-semibold text-base mb-1">Great location</h3>
                <p className="text-[#717171] text-sm">
                  95% of recent guests gave the location a 5-star rating.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <svg
                viewBox="0 0 32 32"
                className="w-7 h-7 shrink-0 fill-none stroke-current stroke-[2px] mt-1"
              >
                <path d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM4 16h24M16 4v24"></path>
              </svg>
              <div>
                <h3 className="font-semibold text-base mb-1">
                  Free cancellation for 48 hours
                </h3>
                <p className="text-[#717171] text-sm">
                  Lock in this price while you can.
                </p>
              </div>
            </div>
          </div>

          <div className="pb-6 border-b border-gray-200">
            <img
              src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg"
              className="h-6 mb-4"
              alt="aircover"
            />
            <p className="text-[#222222] font-light leading-relaxed">
              Every booking includes free protection from Host cancellations,
              listing inaccuracies, and other issues like trouble checking in.
            </p>
            <p className="font-semibold underline mt-3 cursor-pointer">
              Learn more
            </p>
          </div>

          <div className="pb-6">
            <p className="text-[#222222] font-light leading-relaxed text-base">
              {hotel.description} Imagine spending your vacation here, enjoying
              the finest amenities and world-class service. This property offers
              a unique blend of comfort and style that makes it the perfect
              choice for travelers seeking excellence.
            </p>
            <p className="font-semibold underline mt-4 cursor-pointer flex items-center gap-1">
              Show more <span>&gt;</span>
            </p>
          </div>
        </div>

        {/* Sticky Booking Widget */}
        <div className="relative">
          <div className="sticky top-28 bg-white p-6 rounded-2xl shadow-[0_6px_16px_rgba(0,0,0,0.12)] border border-gray-200 z-10">
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-[22px] font-bold">${hotel.price}</span>
              <span className="text-[#717171]">night</span>
            </div>

            <div className="border border-gray-400 rounded-lg overflow-hidden mb-4">
              <div className="flex border-b border-gray-400 cursor-pointer">
                <div className="p-3 flex-1 border-r border-gray-400 hover:bg-gray-50 transition">
                  <div className="text-[10px] font-bold uppercase tracking-wide">
                    Check-in
                  </div>
                  <div className="text-sm">11/02/2026</div>
                </div>
                <div className="p-3 flex-1 hover:bg-gray-50 transition">
                  <div className="text-[10px] font-bold uppercase tracking-wide">
                    Checkout
                  </div>
                  <div className="text-sm">11/07/2026</div>
                </div>
              </div>
              <div className="p-3 hover:bg-gray-50 transition cursor-pointer flex justify-between items-center">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wide">
                    Guests
                  </div>
                  <div className="text-sm">1 guest</div>
                </div>
                <svg
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-none stroke-current"
                >
                  <path d="M28 12L16 24 4 12"></path>
                </svg>
              </div>
            </div>

            <button className="w-full bg-[#E51D53] hover:bg-[#D70466] text-white py-3.5 rounded-lg font-bold transition-colors text-base shadow-sm">
              Reserve
            </button>
            <p className="text-center text-[#717171] text-sm mt-4 font-light">
              You won't be charged yet
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex justify-between items-center text-[#222222] font-light">
                <span className="underline">${hotel.price} x 5 nights</span>
                <span>${hotel.price * 5}</span>
              </div>
              <div className="flex justify-between items-center text-[#222222] font-light">
                <span className="underline">Cleaning fee</span>
                <span>$80</span>
              </div>
              <div className="flex justify-between items-center text-[#222222] font-light">
                <span className="underline">Service fee</span>
                <span>$125</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 flex justify-between items-center font-bold text-[#222222]">
              <span>Total before taxes</span>
              <span>${hotel.price * 5 + 80 + 125}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
