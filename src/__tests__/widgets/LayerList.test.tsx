import React from "react";
import { render, act, waitFor } from '@testing-library/react';
import { Map, LayerList } from '../../';
import setMocks from '../setMocks';
import widgetDefaultProps from '../../consts/widgetDefaultProps';

setMocks();

// import useMapContext from '../../hook';


// jest.mock('../../hook', () => ({
//     __esModule: true,
//     default: jest.fn().mockImplementation(() => ({
//         updateMap: jest.fn(),
//         updateView: jest.fn(),
//         view: { ready: true }
//     }))
// }));

describe('testing render and logic of layerlist widget', () => {
    it('should render the layerlist widget inside map', async () => {
        act(() => {render(<Map id="asdas"><LayerList /></Map>)});
        const _LayerList = await import('@arcgis/core/widgets/LayerList');
        await waitFor(() => expect(_LayerList.default).toBeCalledTimes(1));
    });

    it('should render the layerlist widget and call expand constructor', async () => {
        act(() => { render(<Map id="asdas"><LayerList expander={true} /></Map>) });
        const _LayerList = await import('@arcgis/core/widgets/LayerList');
        const Expand = await import('@arcgis/core/widgets/Expand');
        await waitFor(() => expect(_LayerList.default).toBeCalledTimes(1));
        await waitFor(() => expect(Expand.default).toBeCalledTimes(1));
    });

    it('should handle widgetArgs', async () => {
        act(() => {
            render(
                <Map id="asdas">
                    <LayerList
                        widgetArgs={{
                            multipleSelectionEnabled: true
                        }}
                    />
                </Map>
            )
        });
        const _LayerList = await import('@arcgis/core/widgets/LayerList');
        await waitFor(() => expect(_LayerList.default).toBeCalledTimes(1));
        await waitFor(() => expect(_LayerList.default).toBeCalledWith({
            view: expect.any(Object),
            multipleSelectionEnabled: true
        }));
    });

    it('should handle expand props', async () => {
        act(() => { 
            render(
            <Map id="asdas">
                <LayerList
                    expander={true}
                    expandIconClass="bee-movie"
                    expandWidgetArgs={{expandTooltip: "test"}}
                    expanderDefaultOpen={true}
                />
                </Map>
            )});
        const _LayerList = await import('@arcgis/core/widgets/LayerList');
        const Expand = await import('@arcgis/core/widgets/Expand');
        const View = await import('@arcgis/core/views/MapView');
        await waitFor(() => expect(_LayerList.default).toBeCalledTimes(1));
        await waitFor(() => expect(Expand.default).toBeCalledTimes(1));
        await waitFor(() => expect(Expand.default).toBeCalledWith({
            expandIconClass: "bee-movie",
            expandTooltip: "test",
            view: expect.any(Object),
            content: expect.any(Object)
        }));
        // @ts-ignore // will openOnDefault
        await waitFor(() => expect(Expand.expand).toBeCalledTimes(1));
        // @ts-ignore
        await waitFor(() => expect(View.uiAdd).toBeCalledTimes(1));
        // @ts-ignore
        await waitFor(() => expect(View.uiAdd).toBeCalledWith(
            expect.any(Object),
            widgetDefaultProps.position
        ));
    });

    it('should handle position prop', async () => {
        const customPosition = "bottom-left";
        act(() => {
            render(
                <Map id="asdas">
                    <LayerList
                        expander={true}
                        position={customPosition}
                    />
                </Map>
            )
        });
        const _LayerList = await import('@arcgis/core/widgets/LayerList');
        const Expand = await import('@arcgis/core/widgets/Expand');
        const View = await import('@arcgis/core/views/MapView');
        await waitFor(() => expect(_LayerList.default).toBeCalledTimes(1));
        await waitFor(() => expect(Expand.default).toBeCalledTimes(1));
        // @ts-ignore
        await waitFor(() => expect(View.uiAdd).toBeCalledTimes(1));
        // @ts-ignore
        await waitFor(() => expect(View.uiAdd).toBeCalledWith(
            expect.any(Object),
            customPosition
        ));
    });
});

