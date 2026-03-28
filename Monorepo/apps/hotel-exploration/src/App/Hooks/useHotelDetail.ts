// router
import { useParams } from 'react-router-dom';

// data
import { HOTELS } from '../Data';

export const useHotelDetail = () => {
  const { id } = useParams();
  const hotel = HOTELS.find((h) => h.id === id) ?? null;
  return { hotel };
};
