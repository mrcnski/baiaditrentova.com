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
    experiences: {
        it: 'esperienze',
        en: 'en/experiences',
    },
    cookingClass: {
        it: 'esperienze/corso-di-cucina',
        en: 'en/experiences/cooking-class',
    },
    foodTour: {
        it: 'esperienze/tour-gastronomico',
        en: 'en/experiences/food-tour',
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
        'nav.experiences': 'Experiences',
        'nav.restaurant': 'Restaurant',
        'nav.contact': 'Contact Us / Info',
        'nav.reviews': 'Reviews',
        'nav.book': 'Book Now!',

        "index.title": "Welcome",
        "index.description": "B&B Baia di Trentova is a family-run bed and breakfast in Agropoli in Cilento. The B&B is located in a quiet area, close to the sea and the Trentova Bay.",

        "experiences.title": "Our Experiences",
        "experiences.description": "We offer unique experiences to make your stay even more special. From tours to cooking classes, we have something for everyone. Make your stay unforgettable!",
        "experiences.click": "Click for details / booking!",

        "cooking-class.title": "Cooking Class",
        "cooking-class.description": "Learn how to cook traditional Cilento dishes with nonna Maria! Enjoy a fun and interactive cooking class, and then taste the delicious dishes you prepared.",
        "cooking-class.reviews": "See more reviews",
        "cooking-class.intro.title": "Join our Hands-On Cooking Class",
        "cooking-class.intro.description": "Escape the crowds and discover the hidden gem of Cilento. Nestled south of the Amalfi Coast, our cooking classes and food tours offer a more authentic Italian experience. Learn to cook like a local, savor fresh, seasonal ingredients, and relax in the heart of South Italy and discover the secrets of the Mediterranean diet. Create memories that will last a lifetime in this hidden paradise.",

        "food-tour.title": "Food Tour",
        "food-tour.description": "Discover the flavors of Cilento with our food tour! Visit local producers, taste traditional products, and enjoy a delicious lunch in a typical restaurant.",

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
        'nav.experiences': 'Esperienze',
        'nav.restaurant': 'Ristorante',
        'nav.contact': 'Contattaci / Info',
        'nav.reviews': 'Recensioni',
        'nav.book': 'Prenota Ora!',

        "index.title": "Benvenuti",
        "index.description": "Il B&B Baia di Trentova è un bed and breakfast a conduzione familiare ad Agropoli nel Cilento. Il B&B si trova in una zona tranquilla, vicino al mare e alla Baia di Trentova.",

        "experiences.title": "Le Nostre Esperienze",
        "experiences.description": "Offriamo esperienze uniche per rendere il tuo soggiorno ancora più speciale. Dai tour alle lezioni di cucina, abbiamo qualcosa per tutti. Rendi il tuo soggiorno indimenticabile!",
        "experiences.click": "Clicca per dettagli / prenotazione!",

        "cooking-class.title": "Corso di Cucina",
        "cooking-class.description": "Impara a cucinare piatti tradizionali del Cilento con la nonna Maria! Goditi un corso di cucina divertente e interattivo, e poi assaggia i deliziosi piatti che hai preparato.",
        "cooking-class.reviews": "Vedi altre recensioni",
        "cooking-class.intro.title": "Unisciti al nostro Corso di Cucina Pratico",
        "cooking-class.intro.description": "Scappa dalla folla e scopri la gemma nascosta del Cilento. Incastonato a sud della Costiera Amalfitana, i nostri corsi di cucina e tour gastronomici offrono un'esperienza italiana più autentica. Impara a cucinare come un locale, assapora ingredienti freschi e di stagione, e rilassati nel cuore del Sud Italia e scopri i segreti della dieta mediterranea. Crea ricordi che dureranno per sempre in questo paradiso nascosto.",

        "food-tour.title": "Tour Gastronomico",
        "food-tour.description": "Scopri i sapori del Cilento con il nostro tour gastronomico! Visita produttori locali, assaggia prodotti tradizionali e goditi un delizioso pranzo in un ristorante tipico.",

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
