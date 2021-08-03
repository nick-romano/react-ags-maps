import React, { useEffect } from 'react';
import useMapContext from '../hook';
import { IWidgetParams } from '../common/types';
import { addExpander } from '../utils/addExpander';
import widgetDefaultProps from '../consts/widgetDefaultProps';

export interface IHomeProps extends IWidgetParams<__esri.HomeProperties> { };


const Home = ({
  expander = widgetDefaultProps.expander,
  expanderDefaultOpen = widgetDefaultProps.expanderDefaultOpen,
  position = widgetDefaultProps.position,
  widgetArgs = widgetDefaultProps.widgetArgs,
  expandWidgetArgs = widgetDefaultProps.expandWidgetArgs,
  expandIconClass = "esri-icon-home"
}: IHomeProps) => {
  const { view } = useMapContext();

  useEffect(() => {
    let mounted: boolean = true;
    let widget: __esri.Home;
    let expand: __esri.Expand;

    const asyncEffect = async () => {

      const _import = await import('@arcgis/core/widgets/Home');

      const { default: Home } = _import;

      widget = new Home({
        view,
        ...widgetArgs
      });

      if (expander) {
        expand = await addExpander({
          view: view!,
          widgetContent: widget,
          expandIconClass,
          position,
          defaultOpen: expanderDefaultOpen,
          expandWidgetArgs
        });
      } else {
        mounted && view?.ui.add(widget, position);
      }
    }

    view?.ready && asyncEffect();

    return () => {
      mounted = false;
      widget?.destroy();
      expand?.destroy();
    }
  }, [view, expander, position]);

  return null;

};


export default Home;