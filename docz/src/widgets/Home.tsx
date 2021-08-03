import { Home } from 'react-ags-maps';
import { IWidgetParams } from '../common/types';

export interface IHomeWidget extends IWidgetParams<__esri.HomeProperties> { };

const Homey = (props: IHomeWidget) => <Home {...props} />;

export default Homey;
