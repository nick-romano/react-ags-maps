export interface IWidgetParams<T = {}> {
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
  expandIconClass?: string,
  widgetArgs?: T,
  expandWidgetArgs?: __esri.ExpandProperties
};

export interface IAddExpander {
  view: __esri.MapView,
  widgetContent: __esri.Widget,
  expandIconClass: string,
  position: IWidgetParams['position'],
  defaultOpen: boolean,
  expandWidgetArgs?: __esri.ExpandProperties
};