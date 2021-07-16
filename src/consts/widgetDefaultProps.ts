import { IWidgetParams } from "../common/types";

export interface IWidgetDefaultProps {
    expander: boolean,
    expanderDefaultOpen: boolean,
    position: IWidgetParams['position'],
    widgetArgs: {},
    expandWidgetArgs: {}
}

const widgetDefaultProps: IWidgetDefaultProps = {
    expander: false,
    expanderDefaultOpen : false,
    position: "top-right",
    widgetArgs: {},
    expandWidgetArgs: {}
};

export default widgetDefaultProps;
