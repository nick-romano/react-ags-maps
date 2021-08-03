import React, { useEffect } from 'react';
import useMapContext from '../hook';
import { IWidgetParams } from '../common/types';
import { addExpander } from '../utils/addExpander';
import widgetDefaultProps from '../consts/widgetDefaultProps';

export interface IDirectionsProps extends IWidgetParams<__esri.DirectionsProperties> { };


const Directions = ({
  expander = widgetDefaultProps.expander,
  expanderDefaultOpen = widgetDefaultProps.expanderDefaultOpen,
  position = widgetDefaultProps.position,
  widgetArgs = widgetDefaultProps.widgetArgs,
  expandWidgetArgs = widgetDefaultProps.expandWidgetArgs,
  expandIconClass = "esri-icon-directions"
}: IDirectionsProps) => {
  const { view } = useMapContext();

  useEffect(() => {
    let mounted: boolean = true;
    let widget: __esri.Directions;
    let expand: __esri.Expand;

    const asyncEffect = async () => {

      const _import = await import('@arcgis/core/widgets/Directions');

      const { default: Directions } = _import;

      widget = new Directions({
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


export default Directions;