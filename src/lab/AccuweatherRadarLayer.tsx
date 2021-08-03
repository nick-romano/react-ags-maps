import React, { useState, useEffect } from 'react';
import useMapContext from '../hook';

export interface IAccuweatherRadarLayerProps {
    proxyUrl?: string | null,
    radarTileService: string,
    token: string
}

const AccuweatherRadarLayer = ({
    proxyUrl = "",
    radarTileService,
    token
}: IAccuweatherRadarLayerProps) => {
    const { loadModules } = require('esri-loader');
    const { map, initialized } = useMapContext();
    const [radarIndex, setRadarIndex] = useState(0);
    const [looping, setLooping] = useState<boolean>(false);
    const [frames, setFrames] = useState<[]>([]);
    const [tileUrl, setTileUrl] = useState<string | null>(null);
    const [layerIds, setLayerIds] = useState<Array<string>>([]);
    const [layers, setLayers] = useState<__esri.Layer[]>([]);
    const numFrames = 13;
    const tileAlpha = .6;
    const loopTimeInterval = 700;
    const loopEndLagTime = 2000;
    const params = `?token=${token}&tt=${new Date().toString()}`;
    const url = `${proxyUrl}${radarTileService}${params}`;



    function startLooping(data: any) {
        const _frames = data.frames.slice(data.frames.length - numFrames);
        setTileUrl(data.url);
        setLooping(true);
        setFrames(_frames);
    };

    function _convertFrameTime(frameTime: any) {
        var serverTz = 'GMT';

        // get current date
        var serverDate = new Date();

        // set hours for frame time, will be in UTC
        serverDate.setHours(frameTime.substr(0, 2));
        serverDate.setMinutes(frameTime.substr(2, 4));
        // Convert to users time zone
        serverDate.setMinutes(serverDate.getMinutes() - serverDate.getTimezoneOffset());

        var readableDate = serverDate.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' });

        return readableDate;
    };

    useEffect(() => {
        let _layers: __esri.Layer[] = [];
        let _layerIds: Array<string> = [];
        const createLayer = async () => {
            const radarLoopingIndex = 0;
            const [WebTileLayer] : [__esri.WebTileLayerConstructor] = await loadModules(["esri/layers/WebTileLayer"]);
            console.log(map)
            for (let i = 0; i < numFrames; i++) {
                const url = `${tileUrl}/${frames[i]}/{level}/{col}_{row}.png`;
                const layer = new WebTileLayer({ urlTemplate: url, listMode: 'hide' });
                layer.opacity = 0;
                map?.add(layer);
                _layerIds.push(layer.id);
                map && _layers.push(map?.findLayerById(layer.id));
            };
            setRadarIndex(1);
            setLayers(_layers);
            setLayerIds(_layerIds);
        }

        if (frames.length > 0) {
            createLayer();
        }

    }, [frames]);

    useEffect(() => {

        const updateDisplayLayer = () => {
            var oldLayer = 0 === radarIndex ? layerIds[layerIds.length - 1] : layerIds[radarIndex - 1];
            map!.findLayerById(oldLayer).opacity = 0;

            // Set next layer to specified opacity
            const newLayer = layers[radarIndex];
            newLayer.opacity = tileAlpha;

            const frameTime = frames[radarIndex];

            const time = _convertFrameTime(frameTime);
            // dom.byId('currentloopingframe').innerHTML = time;
            // time = null;

            let _radarIndex: any;
            // Advance the frame index
            if (radarIndex + 1 < numFrames) {
                _radarIndex = radarIndex + 1;
            } else {
                _radarIndex = 0;
            };
            if (radarIndex !== 0) {
                setTimeout(() => { setRadarIndex(_radarIndex) }, loopTimeInterval);
            } else {
                setTimeout(() => { setRadarIndex(_radarIndex) }, loopEndLagTime);
            }
        }

        layerIds.length === numFrames && updateDisplayLayer();

    }, [layerIds, radarIndex]);

    useEffect(() => {
        const startUp = async () => {
            let _looping = looping;
            _looping && setLooping(false);
            if (_looping) _looping = false;

            const req = await fetch(url);
            const data = await req.json();
            // todo add fail logic
            startLooping(data);
        };
        initialized && startUp();

        return () => {
            layers.forEach((layer: __esri.Layer) => {
                map?.layers.remove(layer);
            });
        }
    }, [initialized])

    return (
        <></>
    )

}


export default AccuweatherRadarLayer;