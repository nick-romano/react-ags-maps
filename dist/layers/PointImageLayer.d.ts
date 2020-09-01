/// <reference types="react" />
export interface IPointImageLayerProps {
    image: any;
    center: number[];
    spatialReference: number;
}
declare const PointImageLayer: ({ image, center, spatialReference }: IPointImageLayerProps) => JSX.Element;
export default PointImageLayer;
