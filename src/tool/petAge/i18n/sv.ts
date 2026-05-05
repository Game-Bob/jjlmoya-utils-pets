import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { PetAgeUI, PetAgeLocaleContent } from '../index';

const slug = 'kalkylator-husdjur-alder';
const title = 'Kalkylator för Husdjurs Ålder';
const description = 'Upptäck din hund eller katts verkliga ålder i människoår. Glöm "multiplicera med 7 regeln". Använd vår kalkylator baserad på aktuell veterinärvetenskap för exakta resultat.';

const ui: PetAgeUI = {
  toolTitle: 'Ålderskalkylator',
  toolSubtitle: 'Hur många människoår har din lurviga vän egentligen?',
  petNameLabel: 'Namn (Valfritt)',
  petNamePlaceholder: 't.ex., Buddy',
  petTypeDog: 'Hund',
  petTypeCat: 'Katt',
  sizeSmall: 'Liten',
  sizeMedium: 'Medium',
  sizeLarge: 'Stor',
  sizeGiant: 'Jätte',
  birthYearLabel: 'Födelseår',
  humanAgeLabel: 'Människoåldern för',
  humanAgeUnit: 'år',
  humanAgeYears: 'år',
  lifeStageLabel: 'Livsstadium',
  milestoneLabel: 'Nästa milstolpe',
  shareBtn: 'Dela resultat',
  shareSuccess: 'Kopierat! Öppnar kortet...',
  humanAgeTitle: 'Magisk Ålder',
  recalculateBtn: 'Beräkna en annan ålder',
  realAgeLabel: 'Verklig Ålder',
  defaultPetName: 'Ditt husdjur',
  stageDogPuppy: 'Lekfull Valp',
  stageDogTeen: 'Rebellisk Tonåring',
  stageDogAdult: 'Vuxen i Toppform',
  stageDogMature: 'Distinkt Mognad',
  stageDogSenior: 'Senior Visdom',
  stageCatKitten: 'Barnslig Nyfikenhet',
  stageCatYouth: 'Felin Ungdom',
  stageCatReign: 'Hemmets Herre',
  stageCatVeteran: 'Bordskallad Veteran',
  stageCatVenerable: 'Vördnadsvärd Åldring',
};

const faq: PetAgeLocaleContent['faq'] = [
  {
    question: 'Är det sant att ett hundår motsvarar sju människoår?',
    answer: 'Nej. Det är en förenklad regel som modern veterinärvetenskap har motbevisat. Hundar mognar mycket snabbt under sina första två år, och processen saktar sedan ner, vilket varierar mycket beroende på vikt och ras. Nya studier av DNA-metylering har möjliggjort mer exakta åldringsformler som bättre återspeglar husdjurens sanna biologiska utveckling under hela deras livslängd.',
  },
  {
    question: 'Varför åldras stora hundar snabbare?',
    answer: 'Stora hundraser har en accelererad ämnesomsättning och tillväxt, vilket orsakar större oxidativ stress i deras celler. Det betyder att deras livslängd är kortare än för små hundar. Biologiska markörer visar att jätteraser kan nå seniorstatus så tidigt som vid 5 människoår, medan små raser kanske inte gör det förrän vid 10 eller 11 år.',
  },
  {
    question: 'Hur åldras katter jämfört med människor?',
    answer: 'En katt slutar sin spädbarnstid vid en månad, sin tonårstid vid 6 månader och når vuxen ålder (motsvarande 24 människoår) vid 2 år. Därefter motsvarar varje år av en katts liv ungefär 4 människoår. Detta mönster är ganska konsekvent över olika kattraser, till skillna från den betydande variation som ses hos hundar.',
  },
  {
    question: 'Vid vilken ålder anses ett husdjur vara Senior?',
    answer: 'I allmänhet anses en hund vara senior när den har nått 75 % av sin förväntade livslängd. För katter är det vanligtvis från 7 till 11 år, beroende på deras hälsostatus. Regelbundna veterinärkontroller blir allt mer kritiska under denna fas för att övervaka vanliga åldersrelaterade tillstånd som njursjukdom eller kognitiv svikt.',
  },
];

const howTo: PetAgeLocaleContent['howTo'] = [
  { name: 'Välj husdjursart', text: 'Välj om du har en hund eller en katt för att tillämpa rätt biologisk formel för deras specifika metaboliska hastighet.' },
  { name: 'Ange storlek (endast hundar)', text: 'För hundar är vikten nyckelfaktorn när man bestämmer biologisk ålder. Ange om den är liten (upp till 10 kg), medium (10 till 25 kg), stor (25 till 45 kg) eller jätte (över 45 kg).' },
  { name: 'Ange födelseår', text: 'Ange ditt husdjurs födelseår för att beräkna deras kronologiska ålder. Vårt system kommer sedan att bearbeta denna information mot de fastställda åldrandekurvorna.' },
  { name: 'Analysera livsstadiet', text: 'Kontrollera resultatet för att veta om ditt husdjur befinner sig i baby-, ung-, vuxen- eller seniorstadiet jämfört med en människa och förstå deras nuvarande behov.' },
];

const seo: PetAgeLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Vad du behöver veta om husdjurs åldrande',
    items: [
      '"Regel om 7" är en myt: hundar mognar exponentiellt under de första 2 åren.',
      'En 1-årig hund är som 15 människoår; en 2-åring motsvarar 24 människoår.',
      'Stora hundar åldras snabbare än små efter 2 år på grund av biologisk stress.',
      'Katter följer en mer linjär kurva: varje kattår motsvarar 4 människoår efter 2 års ålder.',
      'Den biologiska åldern är en bättre prediktor för hälsobehov än bara den kronologiska åldern.',
      'Regelbundna screeningar kan hjälpa till att upptäcka åldersrelaterade problem innan de blir allvarliga.',
    ],
  },
  { type: 'title', text: 'Den vetenskapliga sanningen om ditt husdjurs ålder', level: 2 },
  {
    type: 'paragraph',
    html: 'Visste du att en 2-årig katt redan har en 24-årig persons mognad? Upptäck varför regeln att multiplicera med 7 är en myt och hur förståelse av den biologiska verkligheten kan förbättra vården av ditt husdjur. Den gamla myten att "1 hundår motsvarar 7 människoår" är en förenkling som inte tar hänsyn till de massiva utvecklingsförändringarna som ses tidigt i livet. Husdjur mognar i en rasande fart under sina första två levnadsår och når sexuell och fysisk mognad mycket snabbt. Därefter flackar denna åldrandekurva ut och saktar ner avsevärt.',
  },
  {
    type: 'paragraph',
    html: 'Modern forskning, inklusive studier av epigenetiska klockor och DNA-metylering, har gett oss en mycket mer nyanserad syn. Dessa studier visar att de kemiska modifieringarna av en hunds DNA ändras i olika takt under hela livet. Under tidig valpålder är dessa förändringar snabba och intensiva, medan de metaboliska och genetiska skiftningarna under vuxen alder är betydligt mer gradvisa. Denna insikt gjorde det möjligt för forskare att utveckla logaritmiska formler som är mycket mer exakta än någon linjär multiplikation någonsin skulle kunna vara.',
  },
  { type: 'title', text: 'Vetenskapen bakom beräkningen', level: 3 },
  {
    type: 'paragraph',
    html: 'Detta verktyg använder de officiella riktlinjerna från <strong>American Animal Hospital Association (AAHA)</strong> och de senaste studierna om DNA-metylering hos hundar för att ge dig en så exakt uppskattning som möjligt. Genom att kombinera storleksspecifika data med rasoberoende biologiska markörer skapar vi en omfattande modell av husdjurets utveckling. Detta tillvägagångssätt erkänner att en Chihuahua och en Grand Danois har en helt annan livserfarenhet och åldringsprofil från det ögonblick de föds.',
  },
  {
    type: 'paragraph',
    html: 'Att förstå dessa skillnader är avgörande för ansvarsfulla husdjursägare. Det möjliggör bättre timing av veterinära insatser, som att byta till ett seniorfoder eller starta förebyggande ledtillskott. Vår kalkylator överbryggar klyftan mellan komplex peer-reviewed vetenskap och praktisk vardagskunskap för djurvänner världen över.',
  },
  {
    type: 'table',
    headers: ['Art', 'År 1', 'År 2', 'Från år 3'],
    rows: [
      ['Katt', '15 människoår', '24 människoår', '+4 år per år'],
      ['Liten hund', '15 människoår', '24 människoår', '+5 år per år'],
      ['Mellan hund', '15 människoår', '24 människoår', '+6 år per år'],
      ['Stor hund', '15 människoår', '24 människoår', '+7 år per år'],
      ['Jättehund', '15 människoår', '24 människoår', '+8 år per år'],
    ],
  },
  { type: 'title', text: 'Livsstadier: vad du kan förvänta dig och hur du förbereder dig', level: 3 },
  {
    type: 'paragraph',
    html: 'Att veta ditt husdjurs verkliga ålder hjälper dig att förstå dess medicinska och känslomässiga behov i varje fas. Precis som människor går igenom olika livsskeden, upplever hundar och katter specifika fysiologiska och psykologiska förändringar när de växer upp. Att vara medveten om dessa övergångar gör att du kan ge rätt stöd vid rätt tidpunkt, oavsett om det är en lek med hög energi för en tonåring eller specialiserad ortopedisk vård för en senior.',
  },
  {
    type: 'card',
    title: 'Valp eller Junior (0 till 1 år)',
    icon: 'mdi:star-shooting',
    html: 'Detta är fasen för explosiv tillväxt och utveckling. Deras ben växer i en otrolig takt, deras mjölktänder faller ut för att ge plats åt permanenta tänder, och deras hjärnor suger upp information som en svamp. Vaccination och tidig socialisering är avgörande här för att säkerställa att de växer upp till välbalanserade vuxna. Detta är också den bästa tiden för att etablera goda vanor som varar hela livet.',
  },
  {
    type: 'card',
    title: 'Vuxen (2 till 6 år)',
    icon: 'mdi:shield-check',
    html: 'Detta är toppen av fysisk och mental form för de flesta husdjur. Deras personlighet är nu fastställd och de är vanligtvis på sin mest aktiva punkt. Detta är den gyllene tidpunkten för att njuta av intensiva fysiska aktiviteter och bibehålla en idealisk kroppsvikt för att förebygga framtida sjukdomar. Konsekvent träning och en balanserad kost är hälsoblocken under dessa år, vilket hjälper till att bygga starka immunsystem och motståndskraftiga kroppar.',
  },
  {
    type: 'card',
    title: 'Senior (över 7 år)',
    icon: 'mdi:heart-pulse',
    html: 'Gråa hår börjar dyka upp på nosen och husdjuret tenderar att sova mer. Deras ämnesomsättning saktar ner avsevärt och de kan visa mindre intresse för lekar med hög intensitet. Från och med nu bör veterinärkontroller ske var sjätte månad. Håll utkik efter tecken på artrit, förändringar i tandhälsan och eventuella förändringar i beteendet som kan tyda på obehag. Tidig upptäckt av seniorbesvär är det bästa sättet att säkerställa att deras livskvalitet förblir hög.',
  },
  {
    type: 'tip',
    title: 'Veterinärråd om åldrande',
    html: 'Den beräknade åldern är en genomsnittlig biologisk uppskattning baserad på omfattande datamängder. Faktorer som specifik ras, genetik, kost och livsstil kan alla ha en betydande inverkan på ditt husdjurs faktiska åldringstakt. För personlig rådgivning och en omfattande hälsoutvärdering, kontakta alltid din veterinär som känner din följeslagare bäst.',
  },
];

const schemas: PetAgeLocaleContent['schemas'] = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description: description,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  } as any,
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    step: howTo.map((h) => ({
      '@type': 'HowToStep',
      name: h.name,
      text: h.text,
    })),
  } as any,
];

export const content: PetAgeLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  
  faq,
  bibliography,
  howTo,
  schemas,
};
