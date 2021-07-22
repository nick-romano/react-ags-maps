import React from "react";
import { render, act, waitFor } from '@testing-library/react';
import { Map, BasemapGallery } from '../../';
import setMocks from '../setMocks';
import widgetDefaultProps from '../../consts/widgetDefaultProps';


setMocks();

describe('testing render and logic of BasemapGallery widget', () => {
    it('should render the BasemapGallery widget inside map', async () => {
        act(() => { render(<Map id="asdas"><BasemapGallery /></Map>) });
        const _BasemapGallery = await import('@arcgis/core/widgets/BasemapGallery');
        await waitFor(() => expect(_BasemapGallery.default).toBeCalledTimes(1));
    });

    it('should render the BasemapGallery widget and call expand constructor', async () => {
        act(() => { render(<Map id="asdas"><BasemapGallery expander={true} /></Map>) });
        const _BasemapGallery = await import('@arcgis/core/widgets/BasemapGallery');
        const Expand = await import('@arcgis/core/widgets/Expand');
        await waitFor(() => expect(_BasemapGallery.default).toBeCalledTimes(1));
        await waitFor(() => expect(Expand.default).toBeCalledTimes(1));
    });

    it('should handle widgetArgs', async () => {
        act(() => {
            render(
                <Map id="asdas">
                    <BasemapGallery
                        widgetArgs={{
                            disabled: true
                        }}
                    />
                </Map>
            )
        });
        const _BasemapGallery = await import('@arcgis/core/widgets/BasemapGallery');
        await waitFor(() => expect(_BasemapGallery.default).toBeCalledTimes(1));
        await waitFor(() => expect(_BasemapGallery.default).toBeCalledWith({
            view: expect.any(Object),
            disabled: true
        }));
    });

    it('should handle expand props', async () => {
        act(() => {
            render(
                <Map id="asdas">
                    <BasemapGallery
                        expander={true}
                        expandIconClass="bee-movie"
                        expandWidgetArgs={{ expandTooltip: "test" }}
                        expanderDefaultOpen={true}
                    />
                </Map>
            )
        });
        const _BasemapGallery = await import('@arcgis/core/widgets/BasemapGallery');
        const Expand = await import('@arcgis/core/widgets/Expand');
        const View = await import('@arcgis/core/views/MapView');
        await waitFor(() => expect(_BasemapGallery.default).toBeCalledTimes(1));
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
                    <BasemapGallery
                        expander={true}
                        position={customPosition}
                    />
                </Map>
            )
        });
        const _BasemapGallery = await import('@arcgis/core/widgets/BasemapGallery');
        const Expand = await import('@arcgis/core/widgets/Expand');
        const View = await import('@arcgis/core/views/MapView');
        await waitFor(() => expect(_BasemapGallery.default).toBeCalledTimes(1));
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

