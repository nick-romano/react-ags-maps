import React from "react";
import { render, act, waitFor } from '@testing-library/react';
import { Map, Zoom } from '../..';
import setMocks from '../setMocks';
import widgetDefaultProps from '../../consts/widgetDefaultProps';


setMocks();

describe('testing render and logic of Zoom widget', () => {
    it('should render the Zoom widget inside map', async () => {
        act(() => { render(<Map id="asdas"><Zoom /></Map>) });
        const _Zoom = await import('@arcgis/core/widgets/Zoom');
        await waitFor(() => expect(_Zoom.default).toBeCalledTimes(1));
    });

    it('should render the Zoom widget and call expand constructor', async () => {
        act(() => { render(<Map id="asdas"><Zoom expander={true} /></Map>) });
        const _Zoom = await import('@arcgis/core/widgets/Zoom');
        const Expand = await import('@arcgis/core/widgets/Expand');
        await waitFor(() => expect(_Zoom.default).toBeCalledTimes(1));
        await waitFor(() => expect(Expand.default).toBeCalledTimes(1));
    });

    it('should handle widgetArgs', async () => {
        act(() => {
            render(
                <Map id="asdas">
                    <Zoom
                        widgetArgs={{
                            label: "test"
                        }}
                    />
                </Map>
            )
        });
        const _Zoom = await import('@arcgis/core/widgets/Zoom');
        await waitFor(() => expect(_Zoom.default).toBeCalledTimes(1));
        await waitFor(() => expect(_Zoom.default).toBeCalledWith({
            view: expect.any(Object),
            label: 'test'
        }));
    });

    it('should handle expand props', async () => {
        act(() => {
            render(
                <Map id="asdas">
                    <Zoom
                        expander={true}
                        expandIconClass="bee-movie"
                        expandWidgetArgs={{ expandTooltip: "test" }}
                        expanderDefaultOpen={true}
                    />
                </Map>
            )
        });
        const _Zoom = await import('@arcgis/core/widgets/Zoom');
        const Expand = await import('@arcgis/core/widgets/Expand');
        const View = await import('@arcgis/core/views/MapView');
        await waitFor(() => expect(_Zoom.default).toBeCalledTimes(1));
        await waitFor(() => expect(Expand.default).toBeCalledTimes(1));
        await waitFor(() => expect(Expand.default).toBeCalledWith({
            expandIconClass: "bee-movie",
            expandTooltip: "test",
            view: expect.any(Object),
            content: expect.any(Object)
        }));
        // @ts-ignore
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
                    <Zoom
                        expander={true}
                        position={customPosition}
                    />
                </Map>
            )
        });
        const _Zoom = await import('@arcgis/core/widgets/Zoom');
        const Expand = await import('@arcgis/core/widgets/Expand');
        const View = await import('@arcgis/core/views/MapView');
        await waitFor(() => expect(_Zoom.default).toBeCalledTimes(1));
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

