


beforeEach(() => {
    jest.clearAllMocks();
    jest.mock("@arcgis/core/WebMap", () => ({
        __esModule: true,
        default: jest.fn().mockImplementation((args: __esri.MapViewConstructor) => ({ set: jest.fn(), ...args }))
    }));

    jest.mock("@arcgis/core/views/MapView", () => ({
        __esModule: true,
        default: jest.fn().mockImplementation((args: __esri.MapViewConstructor) => ({ args }))
    }));

    jest.mock('esri-loader', () => ({
        __esModule: true,
        loadCss: jest.fn()
    }))
});

