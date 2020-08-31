import { useContext } from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module './context' was resolved to 'C:/Users/Nicho... Remove this comment to see the full error message
import { MapContext } from './context';

const useMapContext = () => {
  return useContext(MapContext);
}

export { useMapContext };