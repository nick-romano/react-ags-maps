/// <reference types="react" />
export interface IAccuweatherRadarLayerProps {
    proxyUrl?: string | null;
    radarTileService: string;
    token: string;
}
declare const AccuweatherRadarLayer: ({ proxyUrl, radarTileService, token }: IAccuweatherRadarLayerProps) => JSX.Element;
export default AccuweatherRadarLayer;
