import React, { useEffect, useState } from 'react';
import { FeatureLayer } from 'react-ags-maps';
import { mockFeatureSet } from './mocks';
const { loadModules } = require('esri-loader');

interface IData {
  graphics: __esri.Graphic[],
  fields: __esri.Field[],
  objectIdField: string,
  geometryType: "polygon" | "polyline" | "point" | "multipoint" | "multipatch" | "mesh"
}


const typeDict: { [fieldType: string]: string } = {
  esriFieldTypeBlob: "blob",
  esriFieldTypeDate: "date",
  esriFieldTypeDouble: "double",
  esriFieldTypeGeometry: "geometry",
  esriFieldTypeGlobalID: "global-id",
  esriFieldTypeGUID: "guid",
  esriFieldTypeInteger: "integer",
  esriFieldTypeOID: "oid",
  esriFieldTypeRaster: "raster",
  esriFieldTypeSingle: "single",
  esriFieldTypeSmallInteger: "small-integer",
  esriFieldTypeString: "string",
  esriFieldTypeXML: "XML"
}


export default function TestFeatureLayer() {
  const [data, setData] = useState<IData | undefined>(undefined);

  useEffect(() => {
    const asyncEffect = async () => {
      const [Graphic, Point, Field]: [__esri.GraphicConstructor, __esri.PointConstructor, __esri.FieldConstructor] = await loadModules(["esri/Graphic", "esri/geometry/Point", "esri/layers/support/Field"]);
      const graphics = mockFeatureSet.features.map(r => {
        const geom = new Point(r.geometry);
        return new Graphic({
          geometry: geom,
          attributes: r.attributes
        })
      });

      const fields: __esri.Field[] = mockFeatureSet.fields.map(r => {
        let _type: __esri.FieldProperties['type'] = typeDict[r.type] as __esri.FieldProperties['type']; 
        return new Field({
          alias: r.alias,
          type: _type,
          name: r.name
        })
      });

      setData({
        graphics,
        fields: fields,
        objectIdField: mockFeatureSet.objectIdFieldName,
        geometryType: "point"
      })
    };

    asyncEffect();
  }, []);

  data && console.log(data.fields.map(r => ({fieldName: r.name, visible: true, label: r.alias, format: {places: 0}})))

  return (
    data ? <FeatureLayer source={data.graphics} fields={data.fields} objectIdField={data.objectIdField} geometryType={data.geometryType}
    title="feature layer 😅" popupEnabled={true} /> : null
  )
}