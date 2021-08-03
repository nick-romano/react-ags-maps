import React from "react";
import { render, act, waitFor } from '@testing-library/react';
import { Map, Bookmarks } from '../../';
import setMocks from '../setMocks';
import widgetDefaultProps from '../../consts/widgetDefaultProps';


setMocks();

describe('testing render and logic of Bookmarks widget', () => {
    it('should render the Bookmarks widget inside map', async () => {
        act(() => { render(<Map id="asdas"><Bookmarks /></Map>) });
        const _Bookmarks = await import('@arcgis/core/widgets/Bookmarks');
        await waitFor(() => expect(_Bookmarks.default).toBeCalledTimes(1));
    });

    it('should render the Bookmarks widget and call expand constructor', async () => {
        act(() => { render(<Map id="asdas"><Bookmarks expander={true} /></Map>) });
        const _Bookmarks = await import('@arcgis/core/widgets/Bookmarks');
        const Expand = await import('@arcgis/core/widgets/Expand');
        await waitFor(() => expect(_Bookmarks.default).toBeCalledTimes(1));
        await waitFor(() => expect(Expand.default).toBeCalledTimes(1));
    });

    it('should handle widgetArgs', async () => {
        act(() => {
            render(
                <Map id="asdas">
                    <Bookmarks
                        widgetArgs={{
                            disabled: true
                        }}
                    />
                </Map>
            )
        });
        const _Bookmarks = await import('@arcgis/core/widgets/Bookmarks');
        await waitFor(() => expect(_Bookmarks.default).toBeCalledTimes(1));
        await waitFor(() => expect(_Bookmarks.default).toBeCalledWith({
            view: expect.any(Object),
            disabled: true
        }));
    });

    it('should handle expand props', async () => {
        act(() => {
            render(
                <Map id="asdas">
                    <Bookmarks
                        expander={true}
                        expandIconClass="bee-movie"
                        expandWidgetArgs={{ expandTooltip: "test" }}
                        expanderDefaultOpen={true}
                    />
                </Map>
            )
        });
        const _Bookmarks = await import('@arcgis/core/widgets/Bookmarks');
        const Expand = await import('@arcgis/core/widgets/Expand');
        const View = await import('@arcgis/core/views/MapView');
        await waitFor(() => expect(_Bookmarks.default).toBeCalledTimes(1));
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
                    <Bookmarks
                        expander={true}
                        position={customPosition}
                    />
                </Map>
            )
        });
        const _Bookmarks = await import('@arcgis/core/widgets/Bookmarks');
        const Expand = await import('@arcgis/core/widgets/Expand');
        const View = await import('@arcgis/core/views/MapView');
        await waitFor(() => expect(_Bookmarks.default).toBeCalledTimes(1));
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

