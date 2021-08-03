import React from 'react';
import { GraphicsLayer } from 'react-ags-maps';

interface GraphicsLayerProperties extends __esri.LayerProperties, __esri.ScaleRangeLayerProperties, __esri.BlendLayerProperties {
    /**
     * Specifies how graphics are placed on the vertical axis (z).
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GraphicsLayer.html#elevationInfo)
     */
    elevationInfo?: __esri.GraphicsLayerElevationInfo | undefined;
    /**
     * A collection of [graphics](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html) in the layer.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GraphicsLayer.html#graphics)
     */
    graphics?: __esri.CollectionProperties<__esri.GraphicProperties> | undefined;
    /**
     * Apply perspective scaling to screen-size point symbols in a [SceneView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-SceneView.html).
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GraphicsLayer.html#screenSizePerspectiveEnabled)
     */
    screenSizePerspectiveEnabled?: boolean | undefined;
}

const GraphicsLayer_ = (props: GraphicsLayerProperties) => <GraphicsLayer {...props} />

export default GraphicsLayer_;