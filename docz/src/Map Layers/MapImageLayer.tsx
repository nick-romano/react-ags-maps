import React from 'react';
import { MapImageLayer } from 'react-ags-maps';

interface MapImageLayerProperties
    extends __esri.LayerProperties,
    __esri.ArcGISMapServiceProperties,
    __esri.ScaleRangeLayerProperties,
    __esri.RefreshableLayerProperties,
    __esri.TemporalLayerProperties,
    __esri.BlendLayerProperties,
    __esri.CustomParametersMixinProperties {
    /**
     * The output dots per inch (DPI) of the MapImageLayer.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-MapImageLayer.html#dpi)
     */
    dpi?: number | undefined;
    /**
     * The version of the geodatabase of the map service data.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-MapImageLayer.html#gdbVersion)
     */
    gdbVersion?: string | undefined;
    /**
     * The output image type.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-MapImageLayer.html#imageFormat)
     */
    imageFormat?: "png" | "png8" | "png24" | "png32" | "jpg" | "pdf" | "bmp" | "gif" | "svg" | "pngjpg" | undefined;
    /**
     * Indicates the maximum height of the image exported by the service.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-MapImageLayer.html#imageMaxHeight)
     */
    imageMaxHeight?: number | undefined;
    /**
     * Indicates the maximum width of the image exported by the service.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-MapImageLayer.html#imageMaxWidth)
     */
    imageMaxWidth?: number | undefined;
    /**
     * Indicates whether the background of the image exported by the service is transparent.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-MapImageLayer.html#imageTransparency)
     */
    imageTransparency?: boolean | undefined;
    /**
     * The portal item from which the layer is loaded.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-MapImageLayer.html#portalItem)
     */
    portalItem?: __esri.PortalItemProperties | undefined;
    /**
     * The [map service's metadata JSON](https://developers.arcgis.com/rest/services-reference/map-service.htm) exposed by the ArcGIS REST API.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-MapImageLayer.html#sourceJSON)
     */
    sourceJSON?: any;
    /**
     * A [Collection](https://developers.arcgis.com/javascript/latest/api-reference/esri-core-Collection.html) of [Sublayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Sublayer.html) objects that allow you to alter the properties of one or more sublayers of the MapImageLayer.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-MapImageLayer.html#sublayers)
     */
    sublayers?: __esri.CollectionProperties<__esri.SublayerProperties> | undefined;
    /**
     * The URL to the REST endpoint of the map service.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-MapImageLayer.html#url)
     */
    url?: string | undefined;
}

const MapImageLayer_ = (props: MapImageLayerProperties) => <MapImageLayer {...props} />

export default MapImageLayer_;