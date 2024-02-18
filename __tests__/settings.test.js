import { SETTINGS } from "../javascript/settings.mjs";

describe('SETTINGS Validation', () => {
    test('SETTINGS object properties', () => {
        expect(SETTINGS).toHaveProperty('CONTAINER_SIZE');
        expect(SETTINGS).toHaveProperty('ITEM_WIDTH');
        expect(SETTINGS).toHaveProperty('ORIENTATION');
        expect(SETTINGS).toHaveProperty('CONTENT_TYPE');
        expect(SETTINGS).toHaveProperty('HEADER_TEXT');
        expect(SETTINGS).toHaveProperty('SHOW_COMPANY_LOGO');
    });

    test('CONTAINER_SIZE data type', () => {
        expect(typeof SETTINGS.CONTAINER_SIZE).toBe('object');
    });

    test('ITEM_WIDTH data type', () => {
        expect(typeof SETTINGS.ITEM_WIDTH).toBe('number');
    });

    test('ORIENTATION data type', () => {
        expect(typeof SETTINGS.ORIENTATION).toBe('string');
    });

    // etc 

    test('Default values', () => {
        const defaultSettings = {
            CONTAINER_SIZE: {
                HEIGHT: '',
                WIDTH: '',
            },
            ITEM_WIDTH: 150,
            ORIENTATION: '',
            CONTENT_TYPE: 'sponsored',
            HEADER_TEXT: '',
            SHOW_COMPANY_LOGO: 1,
        };
    });

    expect(SETTINGS).toEqual(expect.objectContaining(defaultSettings));
});
