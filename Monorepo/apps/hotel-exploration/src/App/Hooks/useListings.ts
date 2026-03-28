// react
import { useState } from 'react';

// data
import { HOTELS } from '../Data';

export const useListings = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredHotels = HOTELS.filter(
    (hotel) =>
      hotel.name.toLowerCase().includes(search.toLowerCase()) ||
      hotel.location.toLowerCase().includes(search.toLowerCase())
  );

  return { search, setSearch, currentPage, setCurrentPage, filteredHotels };
};
