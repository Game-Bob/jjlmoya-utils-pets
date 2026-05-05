import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { PetAgeUI, PetAgeLocaleContent } from '../index';

const slug = 'leeftijd-huisdier-berekenen';
const title = 'Leeftijd Huisdier Berekenen';
const description = 'Ontdek de echte leeftijd van uw hond of kat in mensenjaren. Vergeet de "vermenigvuldig met 7 regel". Gebruik onze calculator gebaseerd op de huidige veterinaire wetenschap voor nauwkeurige resultaten.';

const ui: PetAgeUI = {
  toolTitle: 'Leeftijd Calculator',
  toolSubtitle: 'Hoeveel mensenjaren heeft uw trouwe viervoeter werkelijk?',
  petNameLabel: 'Naam (Optioneel)',
  petNamePlaceholder: 'bijv. Buddy',
  petTypeDog: 'Hond',
  petTypeCat: 'Kat',
  sizeSmall: 'Klein',
  sizeMedium: 'Gemiddeld',
  sizeLarge: 'Groot',
  sizeGiant: 'Gigantisch',
  birthYearLabel: 'Geboortejaar',
  humanAgeLabel: 'De mensenleeftijd van',
  humanAgeUnit: 'jaar',
  humanAgeYears: 'jaar',
  lifeStageLabel: 'Levensfase',
  milestoneLabel: 'Volgende mijlpaal',
  shareBtn: 'Resultaat delen',
  shareSuccess: 'Gekopieerd! Kaart wordt geopend...',
  humanAgeTitle: 'Magische Leeftijd',
  recalculateBtn: 'Andere leeftijd berekenen',
  realAgeLabel: 'Echte Leeftijd',
  defaultPetName: 'Uw huisdier',
  stageDogPuppy: 'Speelse Puppy',
  stageDogTeen: 'Opstandige Tiener',
  stageDogAdult: 'Topfitte Volwassene',
  stageDogMature: 'Onderscheiden Rijpheid',
  stageDogSenior: 'Senior Wijsheid',
  stageCatKitten: 'Kinderlijke Nieuwsgierigheid',
  stageCatYouth: 'Feline Jeugd',
  stageCatReign: 'Huiselijke Heerschappij',
  stageCatVeteran: 'Verwende Veteraan',
  stageCatVenerable: 'Eerbiedwaardige Oudste',
};

const faq: PetAgeLocaleContent['faq'] = [
  {
    question: 'Is het waar dat één hondenjaar gelijk staat aan zeven mensenjaren?',
    answer: 'Nee. Dat is een vereenvoudigde regel die door de moderne diergeneeskunde is ontkracht. Honden rijpen zeer snel tijdens hun eerste twee jaar, en het proces vertraagt daarna, variërend sterk per gewicht en ras. Recente studies over DNA-methylering hebben nauwkeuriger verouderingsformules mogelijk gemaakt die de ware biologische ontwikkeling van huisdieren beter weerspiegelen gedurende hun hele levensduur.',
  },
  {
    question: 'Waarom worden grote honden sneller oud?',
    answer: 'Grote hondenrassen hebben een versnelde stofwisseling en groei, wat zorgt voor grotere oxidatieve stress in hun cellen. Dit betekent dat hun levensverwachting korter is dan die van kleine honden. Biologische markers laten zien dat gigantische rassen de seniorstatus al op 5-jarige menselijke leeftijd kunnen bereiken, terwijl kleine rassen dit pas op 10 of 11 jaar doen.',
  },
  {
    question: 'Hoe veroudert een kat vergeleken met een mens?',
    answer: 'Een kat beëindigt zijn babytijd na één maand, zijn adolescentie na 6 maanden en bereikt de volwassenheid (equivalent aan 24 mensenjaren) op 2 jaar. Daarna is elk jaar van het leven van een kat gelijk aan ongeveer 4 mensenjaren. Dit patroon is redelijk consistent over verschillende kattenrassen, in tegenstelling tot de aanzienlijke variatie die bij honden wordt gezien.',
  },
  {
    question: 'Op welke leeftijd wordt een huisdier als Senior beschouwd?',
    answer: 'Over het algemeen wordt een hond als senior beschouwd als hij 75% van zijn verwachte levensduur heeft bereikt. Voor katten is dit meestal vanaf 7 tot 11 jaar, afhankelijk van hun gezondheidstoestand. Regelmatige veterinaire controles worden steeds kritieker tijdens deze fase om toezicht te houden op veelvoorkomende leeftijdsgebonden aandoeningen zoals nierziekte of cognitieve achteruitgang.',
  },
];

const howTo: PetAgeLocaleContent['howTo'] = [
  { name: 'Selecteer de diersoort', text: 'Kies of u een hond of een kat heeft om de juiste biologische formule toe te passen voor hun specifieke stofwisseling.' },
  { name: 'Geef de grootte aan (alleen honden)', text: 'Voor honden is gewicht de belangrijkste factor bij het bepalen van de biologische leeftijd. Geef aan of het klein (tot 10 kg), gemiddeld (10 tot 25 kg), groot (25 tot 45 kg) of gigantisch (meer dan 45 kg) is.' },
  { name: 'Voer het geboortejaar in', text: 'Voer het geboortejaar van uw huisdier in om hun chronologische leeftijd te berekenen. Ons systeem zal deze informatie vervolgens verwerken aan de hand van de vastgestelde verouderingscurven.' },
  { name: 'Analyseer de levensfase', text: 'Controleer het resultaat om te weten of uw huisdier zich in de baby-, jonge, volwassen of seniorfase bevindt vergeleken met een mens en begrijp hun huidige behoeften.' },
];

const seo: PetAgeLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Wat u moet weten over het ouder worden van huisdieren',
    items: [
      'De "regel van 7" is een mythe: honden rijpen exponentieel gedurende de eerste 2 jaar.',
      'Een 1-jarige hond is als 15 mensenjaren; een 2-jarige staat gelijk aan 24 mensenjaren.',
      'Grote honden worden na hun 2e jaar sneller oud dan kleine vanwege biologische stress.',
      'Katten volgen een meer lineaire curve: elk kattenjaar staat gelijk aan 4 mensenjaren na de leeftijd van 2 jaar.',
      'De biologische leeftijd is een betere voorspeller van gezondheidsbehoeften dan alleen de chronologische leeftijd.',
      'Regelmatige controles kunnen helpen bij het opsporen van ouderdomsverschijnselen voordat ze ernstig worden.',
    ],
  },
  { type: 'title', text: 'De Wetenschappelijke Waarheid over de Leeftijd van uw Huisdier', level: 2 },
  {
    type: 'paragraph',
    html: 'Wist u dat een 2-jarige kat al de volwassenheid heeft van een 24-jarige persoon? Ontdek waarom de regel van vermenigvuldigen met 7 een mythe is en hoe het begrijpen van de biologische realiteit de zorg voor uw huisdier kan verbeteren. De oude mythe dat "1 hondenjaar gelijk staat aan 7 mensenjaren" is een oversimplificatie die geen rekening houdt met de enorme ontwikkelingsveranderingen in de vroege levensfase. Huisdieren rijpen met een razendsnelle snelheid tijdens hun eerste twee levensjaren, waarbij ze zeer snel de seksuele en fysieke volwassenheid bereiken. Daarna vlakt deze verouderingscurve af en vertraagt deze aanzienlijk.',
  },
  {
    type: 'paragraph',
    html: 'Modern onderzoek, waaronder studies naar epigenetische klokken en DNA-methylering, heeft ons een veel genuancierder beeld gegeven. Deze studies laten zien dat de chemische modificaties van het DNA van een hond gedurende hun leven in verschillende tempo\'s veranderen. In de vroege puppytijd zijn deze veranderingen snel en intens, terwijl in de volwassenheid de metabolische en genetische verschuivingen geleidelijker verlopen. Dit inzicht stelde wetenschappers in staat om logaritmische formules te ontwikkelen die veel nauwkeuriger zijn dan elke lineaire vermenigvuldiging ooit zou kunnen zijn.',
  },
  { type: 'title', text: 'De Wetenskap achter de Berekening', level: 3 },
  {
    type: 'paragraph',
    html: 'Deze tool maakt gebruik van de officiële richtlijnen van de <strong>American Animal Hospital Association (AAHA)</strong> en de nieuwste studies over DNA-methylering bij honden om u een zo nauwkeurig mogelijke schatting te geven. Door grootte-specifieke gegevens te combineren met ras-onafhankelijke biologische markers, creëren we een uitgebreid model van de ontwikkeling van huisdieren. Deze aanpak erkent dat een Chihuahua en een Duitse Dog vanaf hun geboorte een totaal andere levenservaring en verouderingsprofiel hebben.',
  },
  {
    type: 'paragraph',
    html: 'Het begrijpen van deze verschillen is cruciaal voor verantwoordelijke hondeneigenaren. Het zorgt voor een betere timing van veterinaire ingrepen, zoals het overschakelen naar een seniorenvoeding of het starten van preventieve gewrichtssupplementen. Onze calculator overbrugt de kloof tussen complexe peer-reviewed wetenschap en praktische, alledaagse kennis voor dierenliefhebbers wereldwijd.',
  },
  {
    type: 'table',
    headers: ['Diersoort', 'Jaar 1', 'Jaar 2', 'Vanaf jaar 3'],
    rows: [
      ['Kat', '15 mensenjaren', '24 mensenjaren', '+4 jaar per jaar'],
      ['Kleine hond', '15 mensenjaren', '24 mensenjaren', '+5 jaar per jaar'],
      ['Gemiddelde hond', '15 mensenjaren', '24 mensenjaren', '+6 jaar per jaar'],
      ['Grote hond', '15 mensenjaren', '24 mensenjaren', '+7 jaar per jaar'],
      ['Gigantische hond', '15 mensenjaren', '24 mensenjaren', '+8 jaar per jaar'],
    ],
  },
  { type: 'title', text: 'Levensfasen: Wat u Kunt Verwachten en Hoe Voor te Bereiden', level: 3 },
  {
    type: 'paragraph',
    html: 'Het kennen van de werkelijke leeftijd van uw huisdier helpt u hun medische en emotionele behoeften in elke fase te begrijpen. Net zoals mensen verschillende levensfasen doormaken, ervaren honden en katten specifieke fysiologische en psychologische veranderingen naarmate ze groeien. Door u bewust te zijn van deze overgangen kunt u op het juiste moment de juiste ondersteuning bieden, of het nu gaat om energiek spel voor een tiener of gespecialiseerde orthopedische zorg voor een senior.',
  },
  {
    type: 'card',
    title: 'Puppy of Junior (0 tot 1 jaar)',
    icon: 'mdi:star-shooting',
    html: 'Dit is de fase van explosieve groei en ontwikkeling. Hun botten groeien in een ongelooflijk tempo, hun melktanden vallen uit om plaats te maken voor permanente tanden, en hun hersenen absorberen informatie als een spons. Vaccinatie en vroege socialisatie zijn hier van cruciaal belang om ervoor te zorgen dat ze opgroeien tot evenwichtige volwassenen. Dit is ook de beste tijd om goede gewoonten aan te leren die een leven lang meegaan.',
  },
  {
    type: 'card',
    title: 'Volwassen (2 tot 6 jaar)',
    icon: 'mdi:shield-check',
    html: 'Dit is voor de meeste huisdieren het toppunt van fysieke en mentale vorm. Hun persoonlijkheid is nu gevormd, en ze zijn meestal op hun meest actieve punt. Dit is het gouden moment om te genieten van intense fysieke activiteiten en een ideaal lichaamsgewicht te behouden om toekomstige ziekten te voorkomen. Consistente lichaamsbeweging en een uitgebalanceerd dieet zijn de pijlers van gezondheid tijdens deze jaren, wat helpt bij het opbouwen van sterke immuunsystemen en veerkrachtige lichamen.',
  },
  {
    type: 'card',
    title: 'Senior (ouder dan 7 jaar)',
    icon: 'mdi:heart-pulse',
    html: 'Er verschijnen grijze haren op de snuit en het huisdier heeft de neiging om meer te slapen. Hun stofwisseling vertraagt aanzienlijk en ze kunnen minder interesse tonen in actieve spelletjes. Vanaf hier zouden veterinaire controles elke zes maanden moeten plaatsvinden. Let op tekenen van artritis, veranderingen in de gezondheid van het gebit en eventuele gedragsveranderingen die op ongemak kunnen duiden. Vroegtijdige detectie van ouderdomskwalen is de beste manier om hun levenskwaliteit hoog te houden.',
  },
  {
    type: 'tip',
    title: 'Veterinair Advies over Ouder Worden',
    html: 'De berekende leeftijd is een gemiddelde biologische schatting op basis van uitgebreide datasets. Factoren zoals het specifieke ras, genetica, dieet en levensstijl kunnen allemaal een aanzienlijke invloed hebben op de werkelijke veroudering van uw huisdier. Voor persoonlijk advies en een uitgebreide gezondheidsbeoordeling kunt u altijd overleggen met uw dierenarts, die uw metgezel als geen ander kent.',
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
