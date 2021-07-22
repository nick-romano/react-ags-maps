import React from "react";
import { render, act, waitFor } from '@testing-library/react';
import { Map, Legend } from '../../';
import setMocks from '../setMocks';
import widgetDefaultProps from '../../consts/widgetDefaultProps';

setMocks();

describe('testing render and logic of Legend widget', () => {
    it('should render the Legend widget inside map', async () => {
        act(() => { render(<Map id="asdas"><Legend /></Map>) });
        const _Legend = await import('@arcgis/core/widgets/Legend');
        await waitFor(() => expect(_Legend.default).toBeCalledTimes(1));
    });

    it('should render the Legend widget and call expand constructor', async () => {
        act(() => { render(<Map id="asdas"><Legend expander={true} /></Map>) });
        const _Legend = await import('@arcgis/core/widgets/Legend');
        const Expand = await import('@arcgis/core/widgets/Expand');
        await waitFor(() => expect(_Legend.default).toBeCalledTimes(1));
        await waitFor(() => expect(Expand.default).toBeCalledTimes(1));
    });

    it('should handle widgetArgs', async () => {
        act(() => {
            render(
                <Map id="asdas">
                    <Legend
                        widgetArgs={{
                            iconClass: 'esri-icon-legend'
                        }}
                    />
                </Map>
            )
        });
        const _Legend = await import('@arcgis/core/widgets/Legend');
        await waitFor(() => expect(_Legend.default).toBeCalledTimes(1));
        await waitFor(() => expect(_Legend.default).toBeCalledWith({
            view: expect.any(Object),
            iconClass: 'esri-icon-legend'
        }));
    });

    it('should handle expand props', async () => {
        act(() => {
            render(
                <Map id="asdas">
                    <Legend
                        expander={true}
                        expandIconClass="bee-movie"
                        expandWidgetArgs={{ expandTooltip: "test" }}
                        expanderDefaultOpen={true}
                    />
                </Map>
            )
        });
        const _Legend = await import('@arcgis/core/widgets/Legend');
        const Expand = await import('@arcgis/core/widgets/Expand');
        const View = await import('@arcgis/core/views/MapView');
        await waitFor(() => expect(_Legend.default).toBeCalledTimes(1));
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
                    <Legend
                        expander={true}
                        position={customPosition}
                    />
                </Map>
            )
        });
        const _Legend = await import('@arcgis/core/widgets/Legend');
        const Expand = await import('@arcgis/core/widgets/Expand');
        const View = await import('@arcgis/core/views/MapView');
        await waitFor(() => expect(_Legend.default).toBeCalledTimes(1));
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

