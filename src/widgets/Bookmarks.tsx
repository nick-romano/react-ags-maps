import React, { useEffect } from 'react';
import { useMapContext } from '../hook';
import { IWidgetParams } from '../common/types';
const { loadModules } = require('esri-loader');

const Bookmarks = ({ expander = false, position = "top-right" }: IWidgetParams) => {
  const { view } = useMapContext();

  useEffect(() => {
    let mounted = true;
    let bookmarks: __esri.Bookmarks;
    let expand: __esri.Expand;

    const asyncEffect = async () => {
      const reqModules = ["esri/widgets/Bookmarks"];
      if (expander) reqModules.push("esri/widgets/Expand");

      const [Bookmarks, Expand]: [__esri.BookmarksConstructor, __esri.ExpandConstructor] = await loadModules(reqModules);

      bookmarks = new Bookmarks({
        view
      });

      if(expander) {
        expand = new Expand({
          expandIconClass: "esri-icon-bookmark",  // see https://developers.arcgis.com/javascript/latest/guide/esri-icon-font/
          view,
          content: bookmarks
        });
        mounted && view?.ui.add(expand, position);
      } else {
        mounted && view?.ui.add(bookmarks, position);
      }
    }

    view && view.ready && asyncEffect();

    return () => {
      mounted = false;
      bookmarks && bookmarks.destroy();
      expand && expand.destroy();
    }
  }, [view, expander, position]);

  return (<></>);

};


export default Bookmarks;