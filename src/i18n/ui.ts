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
    reviews: {
        it: 'recensioni',
        en: 'en/reviews',
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
        'nav.contact': 'Contact Us / Info',
        'nav.reviews': 'Reviews',
        'nav.book': 'Book Now!',

        "index.title": "Welcome",
        "index.description": "B&B Baia di Trentova is a family-run bed and breakfast located in Agropoli in Cilento. The B&B is located in a quiet area, just a few steps from the sea and the Trentova Bay.",
        "index.welcome": "Welcome to Cilento",
        "index.terrace": "Bedroom with a Terrace",
        "index.seaview": "Seaview with Breakfast",
        "index.smile": "Hosts with a Smile",

        "rooms.title": "Our Rooms",
        "rooms.welcome.header": "Buongiorno",
        "rooms.welcome": "Clean and comfortable accommodation. Enjoy the quiet and relaxed atmosphere, read a book or taste a good glass of wine.",
        "rooms.description.header": "Our Rooms",
        "rooms.description": "All five of our rooms are simple, clean and cozy. They are equipped with: an en-suite bathroom, minibar, hair-dryer, TV, Wi-Fi, courtesy set, and, most importantly, a small terrace outside to enjoy the beautiful view over the sea.",
        "rooms.capacity": "Capacity",
        "rooms.rooms": "Rooms",
        "rooms.bed": "Beds",
        "rooms.breakfast.header": "Breakfast",
        "rooms.breakfast": "Our breakfast is a must-try experience. Enjoy quality local products and a wide variety of tastes in the morning sun. All served with a smile by Adriana, while you sit comfortably at your table enjoying the view.",

        "reviews.title": "Reviews",
        "reviews.description": "Read what our guests have to say about their stay!",

        "contact.title": "Contact Us",
        "contact.description": "We’re always happy to hear from you, so talk to us any time you like.<br><br>If your inquiry is urgent, please use one of the social media contacts listed below, otherwise, we will reply by email as soon as possible. Ciao!",
        "contact.faq": "FAQ",
    },
    it: {
        'site.name': 'B&B Baia di Trentova',

        'nav.rooms': 'Camere',
        'nav.contact': 'Contattaci / Info',
        'nav.reviews': 'Recensioni',
        'nav.book': 'Prenota Ora!',

        "index.title": "B&B Baia di Trentova",
        "index.description": "Il B&B Baia di Trentova è un bed and breakfast a conduzione familiare situato ad Agropoli nel Cilento. Il B&B si trova in una zona tranquilla, a pochi passi dal mare e dalla Baia di Trentova.",
        "index.welcome": "Benvenuti nel Cilento",
        "index.terrace": "Camera con Terrazza",
        "index.seaview": "Vista Mare con Colazione",
        "index.smile": "Ospiti con un Sorriso",

        "rooms.title": "Le nostre Camere",
        "rooms.welcome.header": "Buongiorno",
        "rooms.welcome": "Alloggi puliti e confortevoli. Goditi l'atmosfera tranquilla e rilassata, leggi un libro o assapora un buon bicchiere di vino.",
        "rooms.description.header": "Le nostre Camere",
        "rooms.description": "Tutte e cinque le nostre camere sono semplici, pulite e accoglienti. Sono dotate di: bagno privato, minibar, asciugacapelli, TV, Wi-Fi, set di cortesia e, soprattutto, un piccolo terrazzo esterno per godere della bellissima vista sul mare.",
        "rooms.capacity": "Capacità",
        "rooms.rooms": "Camere",
        "rooms.bed": "Letti",
        "rooms.breakfast.header": "Colazione",
        "rooms.breakfast": "La nostra colazione è un'esperienza da non perdere. Goditi prodotti locali di qualità e una vasta varietà di sapori al sole del mattino. Il tutto servito con un sorriso da Adriana, mentre ti siedi comodamente al tuo tavolo godendoti la vista.",

        "reviews.title": "Recensioni",
        "reviews.description": "Leggi cosa dicono i nostri ospiti del loro soggiorno!",

        "contact.title": "Contattaci",
        "contact.description": "Siamo sempre felici di sentirti, quindi parla con noi in qualsiasi momento ti piaccia.<br><br>Se la tua richiesta è urgente, utilizza uno dei contatti sui social media elencati di seguito, altrimenti ti risponderemo via email il prima possibile. Ciao!",
        "contact.faq": "FAQ",
    },
} as const;