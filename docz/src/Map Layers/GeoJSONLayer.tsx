import React from 'react';
import { GeoJSONLayer } from 'react-ags-maps';

interface GeoJSONLayerProperties extends __esri.GeoJSONLayerProperties {}

const GeoJSONLayer_ = (props: GeoJSONLayerProperties) => <GeoJSONLayer {...props} />

export default GeoJSONLayer_;