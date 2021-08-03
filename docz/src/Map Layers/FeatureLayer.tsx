import React from 'react';
import { FeatureLayer } from 'react-ags-maps';

interface FeatureLayerProperties extends __esri.LayerProperties, __esri.PortalLayerProperties, __esri.ScaleRangeLayerProperties, __esri.RefreshableLayerProperties, __esri.TemporalLayerProperties, __esri.BlendLayerProperties, __esri.CustomParametersMixinProperties, __esri.APIKeyMixinProperties {
    /**
     * Copyright information for the layer.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#copyright)
     */
    copyright?: string;
    /**
     * The SQL where clause used to filter features on the client.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#definitionExpression)
     */
    definitionExpression?: string;
    /**
     * The name of the layer's primary display field.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#displayField)
     */
    displayField?: string;
    /**
     * An object that allows you to create a dynamic layer with data either from map service sublayers or data from a registered workspace.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#dynamicDataSource)
     */
    dynamicDataSource?: (__esri.DynamicMapLayer & { type: "map-layer" }) | (__esri.DynamicDataLayer & { type: "data-layer" });
    /**
     * Determines if the layer is editable.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#editingEnabled)
     */
    editingEnabled?: boolean;
    /**
     * Specifies how features are placed on the vertical axis (z).
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#elevationInfo)
     */
    elevationInfo?: __esri.FeatureLayerElevationInfo;
    /**
     * Configures the method for reducing the number of point features in the view.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#featureReduction)
     */
    featureReduction?: | (__esri.FeatureReductionClusterProperties & { type: "cluster" })
    | (__esri.FeatureReductionSelectionProperties & { type: "selection" });
    /**
     * An array of fields in the layer.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#fields)
     */
    fields?: __esri.FieldProperties[];
    /**
     * When a feature layer is configured as floor-aware, it has a floorInfo property defined.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#floorInfo)
     */
    floorInfo?: __esri.LayerFloorInfoProperties;
    /**
     * The associated [template](https://developers.arcgis.com/javascript/latest/api-reference/esri-form-FormTemplate.html) used in an associated layer's [FeatureForm](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm.html).
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#formTemplate)
     */
    formTemplate?: __esri.FormTemplateProperties;
    /**
     * The version of the geodatabase of the feature service data.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#gdbVersion)
     */
    gdbVersion?: string;
    /**
     * The geometry type of features in the layer.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#geometryType)
     */
    geometryType?: "point" | "multipoint" | "polyline" | "polygon" | "multipatch" | "mesh";
    /**
     * Indicates whether the client-side features in the layer have `M` (measurement) values.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#hasM)
     */
    hasM?: boolean;
    /**
     * Indicates whether the client-side features in the layer have `Z` (elevation) values.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#hasZ)
     */
    hasZ?: boolean;
    /**
     * The historic moment to query.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#historicMoment)
     */
    historicMoment?: __esri.DateProperties;
    /**
     * The label definition for this layer, specified as an array of [LabelClass](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-LabelClass.html).
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#labelingInfo)
     */
    labelingInfo?: __esri.LabelClassProperties[];
    /**
     * Indicates whether to display labels for this layer.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#labelsVisible)
     */
    labelsVisible?: boolean;
    /**
     * The layer ID, or layer index, of a Feature Service layer.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#layerId)
     */
    layerId?: number;
    /**
     * Indicates whether the layer will be included in the legend.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#legendEnabled)
     */
    legendEnabled?: boolean;
    /**
     * The name of an `oid` [field](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#fields) containing a unique value or identifier for each feature in the layer.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#objectIdField)
     */
    objectIdField?: string;
    /**
     * An array of field names from the service to include with each feature.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#outFields)
     */
    outFields?: string[];
    /**
     * Indicates whether to display popups when features in the layer are clicked.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#popupEnabled)
     */
    popupEnabled?: boolean;
    /**
     * The popup template for the layer.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#popupTemplate)
     */
    popupTemplate?: __esri.PopupTemplateProperties;
    /**
     * The renderer assigned to the layer.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#renderer)
     */
    renderer?: __esri.RendererProperties;
    /**
     * When `true`, indicates that M values will be returned.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#returnM)
     */
    returnM?: boolean;
    /**
     * When `true`, indicates that z-values will always be returned.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#returnZ)
     */
    returnZ?: boolean;
    /**
     * Apply perspective scaling to screen-size point symbols in a [SceneView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-SceneView.html).
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#screenSizePerspectiveEnabled)
     */
    screenSizePerspectiveEnabled?: boolean;
    /**
     * A collection of [Graphic](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html) objects used to create a FeatureLayer.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#source)
     */
    source?: __esri.CollectionProperties<GraphicProperties>;
    /**
     * The [feature service's metadata JSON](https://developers.arcgis.com/rest/services-reference/layer-feature-service-.htm) exposed by the ArcGIS REST API.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#sourceJSON)
     */
    sourceJSON?: any;
    /**
     * The spatial reference of the layer.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#spatialReference)
     */
    spatialReference?: __esri.SpatialReferenceProperties;
    /**
     * An array of feature templates defined in the feature layer.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#templates)
     */
    templates?: __esri.FeatureTemplateProperties[];
    /**
     * The name of the field holding the type ID or subtypes for the features.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#typeIdField)
     */
    typeIdField?: string;
    /**
     * An array of subtypes defined in the feature service exposed by ArcGIS REST API.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#types)
     */
    types?: __esri.FeatureTypeProperties[];
    /**
     * The absolute URL of the REST endpoint of the layer, non-spatial table or service.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#url)
     */
    url?: string;
}

const FeatureLayer_ = (props: FeatureLayerProperties) => <FeatureLayer {...props} />

export default FeatureLayer_;