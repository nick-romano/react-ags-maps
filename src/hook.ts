import { useContext } from 'react';
import { MapContext } from './context';

const useMapContext = () => {
  return useContext(MapContext);
}

export { useMapContext };