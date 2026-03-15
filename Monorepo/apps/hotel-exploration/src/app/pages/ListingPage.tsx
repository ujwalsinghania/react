import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HOTELS } from '../data';
import { titleCase } from '@local/common/utils';
import { Pagination } from '@local/common/components';

const ListingPage = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const filteredHotels = HOTELS.filter(
    (hotel) =>
      hotel.name.toLowerCase().includes(search.toLowerCase()) ||
      hotel.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-12 pb-12">
      {/* Airbnb style compact search bar */}
      <div className="max-w-[850px] mx-auto bg-white rounded-full shadow-[0_3px_12px_0_rgba(0,0,0,0.1)] border border-gray-200 flex items-center p-2 pl-6 transition-shadow hover:shadow-[0_4px_16px_0_rgba(0,0,0,0.15)]">
        <div className="flex-1">
          <label className="block text-xs font-bold text-gray-800 tracking-wide mb-0.5">
            Where
          </label>
          <input
            className="w-full bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400 font-medium"
            placeholder="Search destinations"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="h-8 w-px bg-gray-200 mx-4"></div>
        <div className="flex-1 hidden sm:block">
          <label className="block text-xs font-bold text-gray-800 tracking-wide mb-0.5">
            Check in
          </label>
          <input
            type="date"
            className="w-full bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400 font-medium cursor-pointer"
          />
        </div>
        <div className="h-8 w-px bg-gray-200 mx-4 hidden sm:block"></div>
        <div className="flex-1 hidden md:block">
          <label className="block text-xs font-bold text-gray-800 tracking-wide mb-0.5">
            Number of guests
          </label>
          <input
            type="number"
            min="1"
            placeholder="Add guests"
            className="w-full bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400 font-medium"
          />
        </div>
        <button className="bg-[#FF385C] text-white p-3 rounded-full flex items-center justify-center ml-2 hover:bg-[#D70466] transition-colors shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-4 h-4 fill-current stroke-current stroke-[4px]"
          >
            <path d="M13 0a13 13 0 0 1 10.5 20.67l7.91 7.92-2.82 2.82-7.92-7.91A12.94 12.94 0 1 1 13 0zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z"></path>
          </svg>
        </button>
      </div>

      {/* Grid of properties (Airbnb style images and text) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-10 mt-8">
        {filteredHotels.map((hotel) => (
          <div
            key={hotel.id}
            onClick={() => navigate(`/hotel/${hotel.id}`)}
            className="group cursor-pointer flex flex-col"
          >
            <div className="aspect-[20/19] relative overflow-hidden rounded-xl mb-3">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <button className="absolute top-3 right-3 text-white hover:scale-110 active:scale-95 transition-transform drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 fill-black/40 stroke-white stroke-[2px]"
                >
                  <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
                </svg>
              </button>
            </div>

            <div className="flex flex-col flex-1">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-[15px] leading-5 text-[#222222] truncate">
                  {titleCase(hotel.location)}
                </h3>
                <div className="flex items-center gap-1 shrink-0 ml-2 text-[15px] leading-5 font-light text-[#222222]">
                  <span>★</span>
                  <span>{hotel.rating}</span>
                </div>
              </div>
              <p className="text-[15px] text-[#717171] leading-5 mt-0.5 truncate">
                {hotel.name}
              </p>
              <p className="text-[15px] text-[#717171] leading-5">2-7 Nov</p>{' '}
              {/* mock dates */}
              <div className="mt-1 flex items-baseline gap-1">
                <span className="font-semibold text-[15px] text-[#222222]">
                  ${hotel.price}
                </span>
                <span className="text-[15px] text-[#222222]">night</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredHotels.length === 0 && (
        <div className="text-center py-20 px-6">
          <h2 className="text-2xl font-semibold mb-2 text-[#222222]">
            No exact matches
          </h2>
          <p className="text-[#717171] text-[15px]">
            Try changing or removing some of your filters or adjusting your
            search area.
          </p>
        </div>
      )}

      {filteredHotels.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={5}
          onPageChange={setCurrentPage}
          className="mt-12"
        />
      )}
    </div>
  );
};

export default ListingPage;
