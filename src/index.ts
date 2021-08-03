import useMapContext from './hook';
export { useMapContext };

export { default as Map } from './Map';

// Layers
export { FeatureLayer } from './layers';
export { GraphicsLayer } from './layers';
export { MapImageLayer } from './layers';
export { GeoJSONLayer } from './layers';

// Lab
// export { AnimatedPointLayer } from './lab';

// Widgets
export { Legend } from './widgets';
export { LayerList } from './widgets';
export { BasemapGallery } from './widgets';
export { Bookmarks } from './widgets';
export { Zoom } from './widgets';
export { Directions } from './widgets';
export { Home } from './widgets';


// Types
export * from './Map';
export * from './widgets/LayerList';
export { IBaseMapGalleryWidget } from './widgets/BasemapGallery';