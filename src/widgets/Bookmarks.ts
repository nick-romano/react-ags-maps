import React, { useEffect } from 'react';
import { useMapContext } from '../hook';
const { loadModules } = require('esri-loader');

const Bookmarks = ({ expander = false, position = "top-right" }) => {
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'view' does not exist on type 'unknown'.
  const { view } = useMapContext();

  useEffect(() => {
    let mounted = true;
    let bookmarks: any;

    const asyncEffect = async () => {
      const reqModules = ["esri/widgets/Bookmarks"];
      if (expander) reqModules.push("esri/widgets/Expand");

      const [Bookmarks, Expand] = await loadModules(reqModules);

      bookmarks = new Bookmarks({
        view
      });

      if(expander) {
        const bookmarksExpand = new Expand({
          expandIconClass: "esri-icon-bookmark",  // see https://developers.arcgis.com/javascript/latest/guide/esri-icon-font/
          view,
          content: bookmarks
        });
        mounted && view.ui.add(bookmarksExpand, position);
      } else {
        mounted && view.ui.add(bookmarks, position);
      }
    }

    view && view.ready && asyncEffect();

    return () => {
      mounted = false;
      bookmarks && bookmarks.destroy();
    }
  }, [view, expander, position]);

  return (<></>);

};


export default Bookmarks;