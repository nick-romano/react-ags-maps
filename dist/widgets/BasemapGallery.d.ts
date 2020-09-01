/// <reference types="react" />
export interface IWidgetParams {
    expander?: boolean;
    position?: "bottom-leading" | "bottom-left" | "bottom-right" | "bottom-trailing" | "top-leading" | "top-left" | "top-right" | "top-trailing" | "manual";
}
declare const BaseMapGalleryWidget: ({ expander, position }: IWidgetParams) => JSX.Element;
export default BaseMapGalleryWidget;
