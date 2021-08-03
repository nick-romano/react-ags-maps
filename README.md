# Currently in pre-release of v2! not really ready to be used quite yet.

## Hosted Documentation
- Checkout https://nick-romano.github.io/react-ags-maps/ for comprehensive docs on this package :)

## react-ags-maps

`react-ags-maps` is a react component library that wraps up the ArcGIS for JavaScript API into react components. 

The goal is to make the API more declarative and allow for quick and easy construction of webmaps, while perserving the typing and extendability allowed by the base API.

This library uses the latest release of `@arcgis/core` and utilizes ESM loading. All ESM modules are lazy-loaded on demand, allowing the API to be used in modern systems such as Gatsby.


## Install

run
<code>
yarn install react-ags-maps @arcgis/core esri-loader
</code>
or
<code>
npm install react-ags-maps @arcgis/core esri-loader
</code>

# Usage
See the [map component](./src-map-component-map) to get started and see demos.
