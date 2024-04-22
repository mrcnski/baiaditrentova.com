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

        "index.title": "B&B Baia di Trentova",
        "index.description": "B&B Baia di Trentova is a family-run bed and breakfast located in Agropoli in Cilento. The B&B is located in a quiet area, just a few steps from the sea and the Trentova Bay.",
        "index.welcome": "Welcome to Cilento",
    },
    it: {
        'site.name': 'B&B Baia di Trentova',

        'nav.rooms': 'Le Nostre Camere',

        "index.title": "B&B Baia di Trentova",
        "index.description": "Il B&B Baia di Trentova è un bed and breakfast a conduzione familiare situato ad Agropoli nel Cilento. Il B&B si trova in una zona tranquilla, a pochi passi dal mare e dalla Baia di Trentova.",
        "index.welcome": "Benvenuti nel Cilento",
    },
} as const;