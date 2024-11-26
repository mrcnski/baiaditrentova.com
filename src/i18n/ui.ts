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
        'site.book': 'Only when booking<br>through our site:<br>breakfast included!',
        'site.cooking-class': "Reserve",

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
        "experiences.click": "Click for details!",

        "cooking-class.title": "Cooking Class",
        "cooking-class.description": "Learn how to cook traditional Cilento dishes with nonna Maria! Enjoy a fun and interactive cooking class, and then taste the delicious dishes you prepared.",
        "cooking-class.reviews": "See more reviews",
        "cooking-class.intro.title": "Join our Hands-On Cooking Class",
        "cooking-class.intro.description": "Escape the crowds and discover the hidden gem of Cilento. Nestled south of the Amalfi Coast, our cooking classes and food tours offer a more authentic Italian experience. Learn to cook like a local, savor fresh, seasonal ingredients, and relax in the heart of South Italy and discover the secrets of the Mediterranean diet. Create memories that will last a lifetime in this hidden paradise.",
        "cooking-class.intro.includes": "<h4>This Unforgettable Culinary Experience Includes:</h4><ul><li>Authentic encounters with local people.</li><li>A deeper understanding of Italy’s food and wine culture.</li><li>Unforgettable memories and a new perspective on the Italian way of life.</li></ul>",
        "cooking-class.intro.prices": "<h4>Prices:</h4>\
<p style='color: var(--orange)'>Low season (March - April, October)</p>\
<table>\
  <tbody>\
    <tr>\
      <th scope='row'>1-3 people</th>\
      <td>€ 130 per person</td>\
    </tr>\
    <tr>\
      <th scope='row'>4-6 people</th>\
      <td>€ 125 per person</td>\
    </tr>\
    <tr>\
      <th scope='row'>7+ people</th>\
      <td>€ 120 per person</td>\
    </tr>\
  </tbody>\
</table>\
<p style='color: var(--orange)'>High season (May - September)</p>\
<table>\
  <tbody>\
    <tr>\
      <th scope='row'>1-3 people</th>\
      <td>€ 140 per person</td>\
    </tr>\
    <tr>\
      <th scope='row'>4-6 people</th>\
      <td>€ 135 per person</td>\
    </tr>\
    <tr>\
      <th scope='row'>7+ people</th>\
      <td>€ 130 per person</td>\
    </tr>\
  </tbody>\
</table>\
<p><i>Enjoy the benefits of being guests of our B&B! You'll receive a discount on our cooking class.</i></p>",
        "cooking-class.included.title": "What's Included",
        "cooking-class.included.text": "<ul>\
<li>3/4 hours hands-on cooking class.</li>\
<li>Nonna’s class will be held in <strong>Italian</strong>, with live English translation.</li>\
<li>Fresh ingredients picked by you at the local farmers market.</li>\
<li>Meal with the dishes made during the class, and other snacks.</li>\
<li>Beverages, water, fine Italian wine, Limoncello made by Nonna, Neapolitan coffee.</li>\
<li>Recipes sent by email after the class.</li>\
<li>Cooking diploma for your hard work!</li>\
<li>Personalized apron with our logo to take home with you.</li>\
</ul>",
        "cooking-class.description.title": "Class Description",
        "cooking-class.description.text": "<ul>\
<li><b>Market Adventure:</b> Begin your day navigating the local market like a true local! With Nonna Maria's handwritten Italian shopping list, gather fresh, seasonal ingredients while practicing your Italian and connecting with friendly vendors.</li>\
<li><b>Cooking with Nonna Maria:</b> In Nonna Maria's cozy kitchen, prepare an authentic Italian meal with your market finds. You'll have the opportunity to choose which classic Italian dishes you'd like to learn, with Nonna Maria guiding you through each step, sharing her passion for cooking and captivating stories of Cilento's culinary heritage. Learn to make pasta from scratch and other Italian specialties, discovering the roots of the Mediterranean Diet, which was born in this very region.</li>\
<li><b>Our Intimate Wine Experience:</b> To ensure a personalized and exclusive experience, our tastings are held in a small, intimate setting with a maximum of 10 guests. Our carefully curated wine collection offers a diverse selection of Italian wines, highlighting the unique characteristics of each region and grape varietal. We rotate our selection throughout the year, offering you the opportunity to discover new favorites and explore the nuances of Italian winemaking. During your tasting, you'll learn how different territories, climates, and sun exposures influence the flavors and aromas of each wine. We'll also guide you through the art of pairing, demonstrating how different wines complement and enhance the flavors of various dishes.</li>\
</ul>",
        "cooking-class.notes.title": "Important Notes",
        "cooking-class.notes.text": "<ul>\
<li><b>Dietary Options:</b> A vegetarian or other dietary restrictions option is available upon request at the time of booking.</li>\
<li><b>Food Allergies:</b> Please inform us of any food allergies when booking your experience.</li>\
<li><b>Group Activity:</b> This activity is designed as a shared group experience. For private classes, please contact us.</li>\
<li><b>Accessibility:</b> We are pleased to offer full accessibility for wheelchair users. Please contact us in advance so we can ensure a comfortable and enjoyable experience for you.</li>\
</ul>",

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
        'site.book': 'Solo prenotando<br>dal nostro sito:<br>colazione inclusa!',
        'site.cooking-class': 'Prenota',

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
        "experiences.click": "Clicca per dettagli!",

        "cooking-class.title": "Corso di Cucina",
        "cooking-class.description": "Impara a cucinare piatti tradizionali del Cilento con la nonna Maria! Goditi un corso di cucina divertente e interattivo, e poi assaggia i deliziosi piatti che hai preparato.",
        "cooking-class.reviews": "Vedi altre recensioni",
        "cooking-class.intro.title": "Unisciti al nostro Corso di Cucina Pratico",
        "cooking-class.intro.description": "Scappa dalla folla e scopri la gemma nascosta del Cilento. Incastonato a sud della Costiera Amalfitana, i nostri corsi di cucina e tour gastronomici offrono un'esperienza italiana più autentica. Impara a cucinare come un locale, assapora ingredienti freschi e di stagione, e rilassati nel cuore del Sud Italia e scopri i segreti della dieta mediterranea. Crea ricordi che dureranno per sempre in questo paradiso nascosto.",
        "cooking-class.intro.includes": "<h4>Questa Indimenticabile Esperienza Culinaria Include:</h4><ul><li>Incontri autentici con persone del luogo.</li><li>Una comprensione più profonda della cultura enogastronomica italiana.</li><li>Ricordi indimenticabili e una nuova prospettiva sullo stile di vita italiano.</li></ul>",
        "cooking-class.intro.prices": "<h4>Prezzi:</h4>\
<p style='color: var(--orange)'>Bassa stagione (Marzo - Aprile, Ottobre)</p>\
<table>\
  <tbody>\
    <tr>\
      <th scope='row'>1-3 persone</th>\
      <td>€ 130 a persona</td>\
    </tr>\
    <tr>\
      <th scope='row'>4-6 persone</th>\
      <td>€ 125 a persona</td>\
    </tr>\
    <tr>\
      <th scope='row'>7+ persone</th>\
      <td>€ 120 a persona</td>\
    </tr>\
  </tbody>\
</table>\
<p style='color: var(--orange)'>Alta stagione (Maggio - Settembre)</p>\
<table>\
  <tbody>\
    <tr>\
      <th scope='row'>1-3 persone</th>\
      <td>€ 140 a persona</td>\
    </tr>\
    <tr>\
      <th scope='row'>4-6 persone</th>\
      <td>€ 135 a persona</td>\
    </tr>\
    <tr>\
      <th scope='row'>7+ persone</th>\
      <td>€ 130 a persona</td>\
    </tr>\
  </tbody>\
</table>\
<p><i>Goditi i vantaggi di essere ospiti del nostro B&B! Riceverai uno sconto sul nostro corso di cucina.</i></p>",
        "cooking-class.included.title": "Cosa è Incluso",
        "cooking-class.included.text": "<ul>\
<li>Corso di cucina pratico di 3/4 ore.</li>\
<li>Il corso della nonna sarà tenuto in <strong>italiano</strong>, con traduzione simultanea in inglese.</li>\
<li>Ingredienti freschi raccolti da te al mercato contadino locale.</li>\
<li>Pasto con i piatti preparati durante il corso, e altri snack.</li>\
<li>Bevande, acqua, vino italiano di qualità, Limoncello fatto dalla nonna, caffè napoletano.</li>\
<li>Ricette inviate via email dopo il corso.</li>\
<li>Diploma di cucina per il tuo duro lavoro!</li>\
<li>Grembiule personalizzato con il nostro logo da portare a casa con te.</li>\
</ul>",
        "cooking-class.description.title": "Descrizione del Corso",
        "cooking-class.description.text": "<ul>\
<li><b>Avventura al Mercato:</b> Inizia la tua giornata navigando il mercato locale come un vero locale! Con la lista della spesa scritta a mano della nonna Maria, raccogli ingredienti freschi e di stagione mentre pratichi il tuo italiano e ti colleghi con i venditori amichevoli.</li>\
<li><b>Cucinare con la Nonna Maria:</b> Nella cucina accogliente della nonna Maria, prepara un pasto italiano autentico con i tuoi acquisti al mercato. Avrai l'opportunità di scegliere quali piatti classici italiani desideri imparare, con la nonna Maria che ti guida attraverso ogni passaggio, condividendo la sua passione per la cucina e affascinanti storie del patrimonio culinario del Cilento. Impara a fare la pasta fatta in casa e altre specialità italiane, scoprendo le radici della Dieta Mediterranea, nata proprio in questa regione.</li>\
<li><b>La Nostra Intima Esperienza del Vino:</b> Per garantire un'esperienza personalizzata ed esclusiva, le nostre degustazioni si svolgono in un ambiente piccolo e intimo con un massimo di 10 ospiti. La nostra collezione di vini accuratamente selezionata offre una vasta selezione di vini italiani, mettendo in evidenza le caratteristiche uniche di ciascuna regione e varietà di uva. Ruotiamo la nostra selezione durante l'anno, offrendoti l'opport unità di scoprire nuovi preferiti ed esplorare le sfumature della produzione vinicola italiana. Durante la tua degustazione, imparerai come i diversi territori, climi e esposizioni al sole influenzano i sapori e gli aromi di ciascun vino. Ti guideremo anche nell'arte dell'abbinamento, dimostrando come i diversi vini completino e esaltino i sapori di vari piatti.</li>\
</ul>",
        "cooking-class.notes.title": "Note Importanti",
        "cooking-class.notes.text": "<ul>\
<li><b>Opzioni Dietetiche:</b> È disponibile una opzione vegetariana o altre restrizioni alimentari su richiesta al momento della prenotazione.</li>\
<li><b>Allergie Alimentari:</b> Si prega di informarci di eventuali allergie alimentari al momento della prenotazione dell'esperienza.</li>\
<li><b>Attività di Gruppo:</b> Questa attività è progettata come un'esperienza di gruppo condivisa. Per lezioni private, si prega di contattarci.</li>\
<li><b>Accessibilità:</b> Siamo lieti di offrire piena accessibilità per gli utenti di sedia a rotelle. Si prega di contattarci in anticipo in modo da poter garantire un'esperienza confortevole e piacevole per te.</li>\
</ul>",

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
