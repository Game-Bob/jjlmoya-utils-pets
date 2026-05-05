import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { PetRationUI, PetRationLocaleContent } from '../index';

const slug = 'kalkylator-daglig-fodergiva-husdjur';
const title = 'Kalkylator för daglig fodergiva till husdjur';
const description = 'Beräkna den exakta mängden foder som din hund eller katt behöver. Verktyg baserat på veterinära RER- och DER-formler för en hälsosam vikt.';

const ui: PetRationUI = {
  toolTitle: 'Kalkylator för daglig ranson',
  sectionProfile: '1. Husdjursprofil',
  labelAnimal: 'Djur',
  labelStage: 'Livsstadie',
  labelWeight: 'Kroppsvikt',
  labelActivity: 'Fysisk aktivitet',
  sectionDiet: '2. Diet och foder',
  labelDietType: 'Typ av utfodring',
  speciesDog: 'Hund',
  speciesCat: 'Katt',
  speciesRabbit: 'Kanin',
  stagePuppy: 'Valp eller Kattunge',
  stageAdult: 'Vuxen',
  stageSenior: 'Senior',
  activityLow: 'Låg',
  activityMod: 'Normal',
  activityHigh: 'Hög',
  dietDry: 'Endast torrt',
  dietMixed25: 'Blandat (25%)',
  dietHalf: 'Hälften (50%)',
  dietWet: 'Endast vått',
  manualAdjust: 'Manuell justering (1-99%)',
  wetPercentLabel: '% våtfoder i dieten',
  tagDry: 'Torrt',
  tagWet: 'Vått',
  totalKcal: 'Totalt',
  kcalUnit: 'kcal/dag',
  statusPuppy: 'Snabb tillväxtfas',
  statusSenior: 'Mogen metabolism',
  statusLargeDog: 'Stor ras: Ledvård',
  statusDefault: 'Balanserad vikt',
};

const faq: PetRationLocaleContent['faq'] = [
  {
    question: 'Vad är RER och varför är det viktigt?',
    answer: 'RER (Resting Energy Requirement) är den minsta energi som ditt husdjur behöver för att upprätthålla sina grundläggande livsviktiga funktioner i vila. Det är den vetenskapliga grunden för att beräkna den dagliga rationen, vilket förhindrar under- eller överutfodring. Genom att förstå RER kan ägare bättre anpassa matintaget efter husdjurets specifika biologiska behov och undvika onödig belastning på organen.',
  },
  {
    question: 'Hur påverkar sterilisering mitt husdjurs ranson?',
    answer: 'Steriliserade djur tenderar att ha en basalomsättning som är ca 15-20% lägre. De kan behöva en något mindre ranson eller en aktivitetsnivå inställd på Låg i kalkylatorn för att undvika viktökning. Hormonella förändringar efter ingreppet påverkar hur kroppen lagrar fett och förbränner energi, vilket gör vaksamhet på fodergivan extra viktig.',
  },
  {
    question: 'Kan jag använda denna kalkylator för valpar?',
    answer: 'Växande valpar har mycket högre energibehov (upp till 3 gånger RER). Denna kalkylator är optimerad för vuxna hundar och katter. För valpar, rådfråga alltid din veterinär för en specifik tillväxtplan eftersom felaktig utfodring under den tidiga tillväxtfasen kan leda till allvarliga skelettproblem senare i livet.',
  },
  {
    question: 'Hur många gånger om dagen ska jag fördela ransonen?',
    answer: 'Det idealiska är att sprida den resulterande totala mängden över 2 eller 3 måltider per dag. Detta hjälper till att bibehålla stabila glukosnivåer och förbättrar matsmältningen, särskilt hos raser som är benägna att drabbas av magomvridning. Regelbundna måltider hjälper också till att hålla husdjuret mätt och nöjt under hela dagen.',
  },
];

const howTo: PetRationLocaleContent['howTo'] = [
  { name: 'Välj art noggrant', text: 'Ange om beräkningen gäller en hund eller katt, eftersom deras ämnesomsättning och viktgränser varierar betydligt beroende på deras unika biologiska egenskaper.' },
  { name: 'Justera för exakt vikt', text: 'Flytta reglaget till ditt husdjurs nuvarande vikt i kilogram. Det är viktigt att använda en nyligen uppmätt vikt för att få en korrekt beräkning av energibehovet.' },
  { name: 'Definiera aktivitetsnivå', text: 'Välj mellan låg, normal eller hög aktivitet baserat på den faktiska dagliga motionen och energinivån din fyrbenta följeslagare uppvisar.' },
  { name: 'Ange fodrets energiinnehåll', text: 'Titta på foderförpackningen för det exakta kcal/kg-värdet så att den slutgiltiga ransonen i gram blir så precis som möjligt för optimal hälsa.' },
];

const seo: PetRationLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Viktiga principer för veterinär nutrition och hälsa',
    items: [
      'RER-formeln är: 70 × (vikt i kg)^0,75. Det är den vetenskapliga grunden för all modern veterinär kaloriberäkning.',
      'DER multiplicerar RER med djurets specifika livsstilsfaktor för att ge ett dagsbehov.',
      'En kastrerad hund behöver upp till 20 % färre kalorier än en intakt hund på grund av hormonella förändringar.',
      'Fetma drabbar 50 % av alla husdjur idag och förkortar deras förväntade livslängd och livskvalitet avsevärt.',
      'Att räkna ut den exakta ransonen är en av de mest effektiva formerna av förebyggande medicin för husdjursägare.',
      'Användning av en köksvåg ger den exakthet som krävs för att följa en vetenskapligt baserad utfodringsplan.',
    ],
  },
  { type: 'title', text: 'Komplett guide till att beräkna ditt husdjurs dagliga fodergiva för optimal hälsa', level: 2 },
  {
    type: 'paragraph',
    html: 'Att mata en hund eller katt på rätt sätt handlar om mycket mer än att bara fylla deras matskål varje morgon. Nutrition är den fundamentala pelaren för deras hälsa, livslängd och känslomässiga välbefinnande. En <strong>kalkylator för daglig fodergiva för husdjur</strong> är ett oumbärligt verktyg för alla ansvarsfulla ägare som vill undvika de två vanligaste problemen i dagens veterinära nutrition: undernäring på grund av brist på näringsämnen och, framför allt, fetma, som drabbar mer än 50 % av alla husdjur i utvecklade länder.',
  },
  {
    type: 'paragraph',
    html: 'I den här guiden utforskar vi de vetenskapliga grunderna bakom kaloriberäkningar, hur man tolkar foderetiketter och hur faktorer som ålder, fysisk aktivitetsnivå och fysiologisk status påverkar mängden foder som din följeslagare behöver varje dag. Vi hjälper dig att förstå hur små justeringar i dagsransonen kan göra stor skillnad för att förebygga diabetes, ledproblem och hjärthälsa hos ditt djur.',
  },
  { type: 'title', text: 'Vetenskapen bakom beräkningarna: Hur RER och DER fungerar', level: 3 },
  {
    type: 'paragraph',
    html: 'För att avgöra exakt hur mycket ett djur bör äta varje dag använder veterinärer och nutritionister två nyckelbegrepp: RER och DER. Dessa förkortningar står för viloenergi respektive dagsbehov. Att förstå hur dessa hänger samman är avgörande för att kunna styra husdjurets vikt och välmående på ett säkert sätt.',
  },
  {
    type: 'paragraph',
    html: 'RER täcker den energi som krävs för grundläggande organfunktioner, andning och cirkulation när djuret vilar. DER tar sedan detta värde och anpassar det efter djurets livsstil, oavsett om det är en aktiv tävlingshund eller en lugn innekatt. Genom att kalibrera dessa värden korrekt kan vi uppnå en balans som främjar en sund kroppskondition över tid.',
  },
  {
    type: 'stats',
    items: [
      { label: 'RER: Viloenergi', value: '70 × kg^0,75' },
      { label: 'Faktor för valpar', value: 'x2,5 till x3,5' },
      { label: 'Faktor för aktiva vuxna', value: 'x1,6 till x2,0' },
      { label: 'Faktor för seniorer', value: 'x1,0 till x1,4' },
    ],
  },
  { type: 'title', text: 'Hur du läser och tolkar husdjurets foderetikett', level: 3 },
  {
    type: 'paragraph',
    html: 'För att kalkylatorn ska kunna ge dig exakta gram behöver du veta produktens <strong>kaloritäthet</strong>, även känd som dess omsättbara energi. Detta värde uttrycks vanligtvis som kcal/kg eller kcal/100g på förpackningen. Om informationen saknas på påsen kan man använda generella riktvärden baserade på fodertyp.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Lättfoder (Light)', value: '~3000 kcal/kg' },
      { label: 'Standard vuxenfoder', value: '~3500 kcal/kg' },
      { label: 'Energirikt valpfoder', value: '~4000 kcal/kg' },
      { label: 'Våtfoder på burk', value: '~1000 kcal/kg' },
    ],
  },
  {
    type: 'tip',
    title: 'Näringstips från veterinären',
    html: 'Varje husdjur är en unik individ med egna förutsättningar. Kalkylatorn erbjuder en vetenskapligt förankrad startpunkt, men du bör alltid övervaka den faktiska kroppskonditionen genom att känna på ditt husdjurs revben. Om du kan känna dem lätt utan att behöva trycka hårt har ditt djur en bra vikt. Om revbenen är svåra att hitta under ett lager fett är det dags att begränsa ransonen.',
  },
  { type: 'title', text: 'Skillnader i nutrition mellan katter och hundar', level: 3 },
  {
    type: 'paragraph',
    html: 'Katter är strikta köttätare och deras metabolism är optimerad för att hämta energi från animaliska proteiner. Hos hundar ser vi en mer flexibel ämnesomsättning, men man bör ändå vara försiktig med överskott av kolhydrater som kan leda till viktuppgång. Båda arterna mår bäst av en kontrollerad ranson som undviker överdriven belastning på leder och hjärt-kärlsystemet genom hela livet.',
  },
  {
    type: 'paragraph',
    html: 'Att spendera några minuter på att räkna ut den exakta ransonen är en av de mest lönsamma investeringarna i förebyggande medicin som du kan göra som ägare. En hälsosam vikt minskar drastiskt risken för kroniska sjukdomar och ger din bästa vän de bästa förutsättningarna för ett långt och friskt liv. Rådfråga gärna din veterinär vid nästa rutinbesök för att säkerställa att din nuvarande utfodringsstrategi är optimal.',
  },
];

const schemas: PetRationLocaleContent['schemas'] = [
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

export const content: PetRationLocaleContent = {
  
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
