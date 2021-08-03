import { Bookmarks } from 'react-ags-maps';
import { IWidgetParams } from '../common/types';

export interface IBookmarksWidget extends IWidgetParams<__esri.BookmarksProperties> { };

const Bookmarksy = (props: IBookmarksWidget) => <Bookmarks {...props} />;

export default Bookmarksy;
