import { LayerList } from 'react-ags-maps';


export interface IWidgetParams<T> {
    expander?: boolean,
    expanderDefaultOpen?: boolean,
    position?:
    | "bottom-leading"
    | "bottom-left"
    | "bottom-right"
    | "bottom-trailing"
    | "top-leading"
    | "top-left"
    | "top-right"
    | "top-trailing"
    | "manual",
    expandIconClass?: string
    widgetArgs?: T,
    expandWidgetArgs?: __esri.ExpandProperties
};

const LayerListt = (props: IWidgetParams<__esri.LayerListProperties>) => <LayerList {...props} />;

export default LayerListt;


 