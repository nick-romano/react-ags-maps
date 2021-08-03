import { Legend } from 'react-ags-maps';
import { IWidgetParams } from '../common/types';

export interface ILegendWidget extends IWidgetParams<__esri.LegendProperties> { };

const Legendy = (props: ILegendWidget) => <Legend {...props} />;

export default Legendy;
