import { Directions } from 'react-ags-maps';
import { IWidgetParams } from '../common/types';

export interface IDirectionsWidget extends IWidgetParams<__esri.DirectionsProperties> { };

const Directionsy = (props: IDirectionsWidget) => <Directions {...props} />;

export default Directionsy;
