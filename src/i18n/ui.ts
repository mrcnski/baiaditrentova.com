export const languages = {
    it: 'Italiano',
    en: 'English',
};

/// Data for translating a path to a given language. 
///
/// The trailing slashes are not included. When querying the map, the caller is expected to remove
/// them if present.
export const paths = {
    index: {
        it: '',
        en: 'en',
    },
    rooms: {
        it: 'camere',
        en: 'en/rooms',
    },
};

/// Data for translating a string to a given language.
export const ui = {
    en: {
        'site.name': 'B&B Baia di Trentova',
        
        'nav.rooms': 'Our Rooms',
    },
    it: {
        'site.name': 'B&B Baia di Trentova',

        'nav.rooms': 'Le Nostre Camere',
    },
} as const;