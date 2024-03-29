const CONSTANTS = {
  content: {
    company_name: 'Viborg Haveservice',
    navigation: [
      { link: '#about', label: 'Om Os' },
      { link: '#services', label: 'Ydelser' },
      { link: '#gallery', label: 'Galleri' },
      { link: '#reviews', label: 'Det siger kunderne' },
      { link: '#contact', label: 'Kontakt' },
    ],
    hero: {
      title: 'Kvalitet og Service',
      description:
        'Hos Viborg Haveservice bliver kvalitet og service sat højsædet. Vi sætter stor ære og pris på at tilbyde professionel havesrive til både private og erhverv',
      button: 'Læs mere',
    },
    about: {
      title: 'Velkommen til <span class="green">Viborg Haveservice</span>',
      description:
        '<p>Hos Viborg Haveservice er vi en virksomhed, som varetager en bred skare af forskellige arbejdsopgaver inden for havearbejde og kan blandt andet hjælpe til med:</p><ul><li>Hækklipning</li><li>Græsslåning</li><li>Træfældning</li><li>Belægning</li></ul><p>Kort og godt er vi de rette at kontakte ved enhver type af opgave inden for haveservice, og med mange års erfaring i faget, kan du trygt lade dit valg falde på netop os.</p>',
      button: 'Se alle ydelser',
      examples: [
        {
          img: '/static/images/omos-1.jpg',
          title: 'Anlægsgardneri',
          description:
            'Den fulde pakke for virksomheder, der ikke har tid til at passe sine udendørsarealer.',
        },
        {
          img: '/static/images/omos-2.jpg',
          title: 'Plænepleje',
          description: 'For den private som ønsker en plan og flot græsplane.',
        },
      ],
    },
    services: {
      title: 'Vores ydelser',
      description:
        'Herunder en oversigt over alle vores services. Hvis du måtte have flere spørgsmål, er du velkommen til at kontakte os.',
    },
    gallery: {
      title: 'Galleri',
      description: 'Herunder er udvalg af billeder taget af vores arbejde.',
    },
    reviews: {
      title: 'Kundeudtalelser',
    },
    contact: {
      title: 'Kontakt Os',
      description:
        'Du kan kontakte os med informationerne nedenfor, eller skrive en besked til os med kontaktformularen.',
      info: [
        { title: 'Adresse', items: ['Odshøjvej 1G', '8800 Viborg'] },
        {
          title: 'Åbningstid',
          items: ['Mandag - Lørdag: 07:00 - 18:00', 'Søndag: LUKKET'],
        },
        {
          title: 'Kontakt Information',
          items: [
            'Telefon: +45 12 34 56 78',
            'Email: info@viborghaveservice.org',
          ],
        },
      ],
      form: {
        title: 'Send os en besked',
        inputs: ['Navn', 'Email', 'Besked'],
        button: 'Send Besked',
      },
    },
  },
}

export default CONSTANTS
