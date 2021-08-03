import { Zoom } from 'react-ags-maps';
import { IWidgetParams } from '../common/types';

export interface IZoomWidget extends IWidgetParams<__esri.ZoomProperties> { };

const Zoomy = (props: IZoomWidget) => <Zoom {...props} />;

export default Zoomy;
