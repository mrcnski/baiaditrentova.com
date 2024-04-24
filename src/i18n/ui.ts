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
    contact: {
        it: 'contattaci',
        en: 'en/contact',
    },
};

/// Data for translating a string to a given language.
export const ui = {
    en: {
        'site.name': 'B&B Baia di Trentova',
        
        'nav.rooms': 'Our Rooms',
        'nav.contact': 'Contact Us / FAQ',
        'nav.book': 'Book Now',

        "index.title": "B&B Baia di Trentova",
        "index.description": "B&B Baia di Trentova is a family-run bed and breakfast located in Agropoli in Cilento. The B&B is located in a quiet area, just a few steps from the sea and the Trentova Bay.",
        "index.welcome": "Welcome to Cilento",
        "index.terrace": "Terrace with Bedroom",
        "index.seaview": "Seaview with Breakfast",
        "index.smile": "A Smile with Hosts",
    },
    it: {
        'site.name': 'B&B Baia di Trentova',

        'nav.rooms': 'Camere',
        'nav.contact': 'Contattaci / FAQ',
        'nav.book': 'Prenota Ora',

        "index.title": "B&B Baia di Trentova",
        "index.description": "Il B&B Baia di Trentova è un bed and breakfast a conduzione familiare situato ad Agropoli nel Cilento. Il B&B si trova in una zona tranquilla, a pochi passi dal mare e dalla Baia di Trentova.",
        "index.welcome": "Benvenuti nel Cilento",
        "index.terrace": "Terrazza con Camera",
        "index.seaview": "Vista Mare con Colazione",
        "index.smile": "Un Sorriso con gli Ospiti",
    },
} as const;