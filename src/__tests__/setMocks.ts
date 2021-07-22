
const setMocks = () => beforeEach(() => {
    jest.clearAllMocks();

    jest.mock("@arcgis/core/WebMap", () => ({
        __esModule: true,
        default: jest.fn().mockImplementation((args: __esri.MapViewConstructor) => ({ ...args, set: jest.fn(), when: async () => { }, ready: true }))
    }));

    jest.mock("@arcgis/core/views/MapView", () => {
        const uiAdd = jest.fn();
        return {
            __esModule: true,
            uiAdd,
            default: jest.fn().mockImplementation((args: __esri.MapViewConstructor) =>
            ({
                ...args,
                ui: { add: uiAdd },
                when: async () => { },
                ready: true
            }))
        }
    });


    jest.mock('esri-loader', () => ({
        __esModule: true,
        loadCss: jest.fn()
    }));

    jest.mock("@arcgis/core/widgets/Expand", () => {
        const expand = jest.fn();
        return {
            __esModule: true,
            expand,
            default: jest.fn().mockImplementation(
                (args: __esri.ExpandConstructor) => ({
                    ...args,
                    destroy: jest.fn(),
                    expand
                }))
        }
    });

    jest.mock("@arcgis/core/widgets/LayerList", () => ({
        __esModule: true,
        default: jest.fn().mockImplementation(
            (args: __esri.LayerListConstructor) => ({
                ...args, destroy: jest.fn()
            }))
    }));

    jest.mock("@arcgis/core/widgets/Bookmarks", () => ({
        __esModule: true,
        default: jest.fn().mockImplementation(
            (args: __esri.BookmarkConstructor) => ({
                ...args, destroy: jest.fn()
            }))
    }));

    jest.mock("@arcgis/core/widgets/BasemapGallery", () => ({
        __esModule: true,
        default: jest.fn().mockImplementation(
            (args: __esri.BasemapGalleryConstructor) => ({
                ...args, destroy: jest.fn()
            }))
    }));

    jest.mock("@arcgis/core/widgets/Legend", () => ({
        __esModule: true,
        default: jest.fn().mockImplementation(
            (args: __esri.LegendConstructor) => ({
                ...args, destroy: jest.fn()
            }))
    }));

});

export default setMocks;
