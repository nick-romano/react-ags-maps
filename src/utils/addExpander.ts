import { IAddExpander } from '../common/types';


export const addExpander = async ({ view, widgetContent, expandIconClass, position, defaultOpen, expandWidgetArgs }: IAddExpander) => {
    let expand: __esri.Expand;

    const _import = import('@arcgis/core/widgets/Expand');

    const { default: Expand } = await _import;

    expand = new Expand({
        view,
        expandIconClass,
        content: widgetContent,
        ...expandWidgetArgs
    });

    view?.ui.add(expand, position);

    defaultOpen && expand.expand();

    return expand;
}