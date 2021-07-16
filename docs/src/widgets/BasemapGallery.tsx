import { BasemapGallery } from 'react-ags-maps';
import { IWidgetParams } from '../common/types';

export interface IBaseMapGalleryWidget extends IWidgetParams<__esri.BasemapGalleryProperties> { };

const BasemapGalleryy = (props: IBaseMapGalleryWidget) => <BasemapGallery {...props} />;

export default BasemapGalleryy;


