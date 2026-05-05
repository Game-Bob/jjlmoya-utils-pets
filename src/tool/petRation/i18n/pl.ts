import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { PetRationUI, PetRationLocaleContent } from '../index';

const slug = 'kalkulator-dziennej-racji-zywieniowej-zwierzat';
const title = 'Kalkulator Dziennej Racji Żywieniowej dla Zwierząt';
const description = 'Oblicz dokładną ilość karmy, której potrzebuje Twój pies lub kot. Narzędzie oparte na weterynaryjnych formułach RER i DER dla zachowania zdrowej wagi.';

const ui: PetRationUI = {
  toolTitle: 'Kalkulator Dziennej Racji',
  sectionProfile: '1. Profil Zwierzęcia',
  labelAnimal: 'Zwierzę',
  labelStage: 'Etap Życia',
  labelWeight: 'Masa Ciała',
  labelActivity: 'Aktywność Fizyczna',
  sectionDiet: '2. Dieta i Karma',
  labelDietType: 'Rodzaj Karmienia',
  speciesDog: 'Pies',
  speciesCat: 'Kot',
  speciesRabbit: 'Królik',
  stagePuppy: 'Szczeniak lub Kociak',
  stageAdult: 'Dorosły',
  stageSenior: 'Senior',
  activityLow: 'Niska',
  activityMod: 'Normalna',
  activityHigh: 'Wysoka',
  dietDry: 'Tylko Sucha',
  dietMixed25: 'Mieszana (25%)',
  dietHalf: 'Pół na Pół (50%)',
  dietWet: 'Tylko Mokra',
  manualAdjust: 'Ręczna regulacja (1-99%)',
  wetPercentLabel: '% mokrej karmy w diecie',
  tagDry: 'Sucha',
  tagWet: 'Mokra',
  totalKcal: 'Razem',
  kcalUnit: 'kcal/dzień',
  statusPuppy: 'Faza szybkiego wzrostu',
  statusSenior: 'Dojrzały metabolizm',
  statusLargeDog: 'Duża rasa: Pielęgnacja stawów',
  statusDefault: 'Zrównoważona waga',
};

const faq: PetRationLocaleContent['faq'] = [
  {
    question: 'Co to jest RER i dlaczego jest ważne?',
    answer: 'RER (Resting Energy Requirement) to minimalna energia, której Twój pupil potrzebuje do utrzymania podstawowych funkcji życiowych w spoczynku. Jest to naukowa podstawa do obliczania dziennej racji, co pozwala uniknąć niedożywienia lub przekarmiania. Zrozumienie RER pozwala właścicielom dostosować spożycie pokarmu do konkretnych potrzeb biologicznych ich zwierzęcia, zapewniając, że nie spożywają one więcej, niż ich organy mogą wydajnie przetworzyć.',
  },
  {
    question: 'Jak sterylizacja wpływa na rację żywieniową mojego pupila?',
    answer: 'Zwierzęta wysterylizowane mają tendencję do posiadania metabolizmu podstawowego o około 15 do 20 procent niższego. Mogą potrzebować nieco mniejszej racji lub poziomu aktywności ustawionego na Niski w kalkulatorze, aby uniknąć przyrostu masy ciała. Zmiany hormonalne po zabiegu zmieniają sposób, w jaki organizm przechowuje tłuszcz i spala energię, co sprawia, że czujność nad miską z jedzeniem jest jeszcze ważniejsza dla długoterminowego zdrowia.',
  },
  {
    question: 'Czy mogę używać tego kalkulatora dla szczeniąt?',
    answer: 'Rosnące szczenięta mają znacznie wyższe zapotrzebowanie na energię (do 3 razy więcej niż RER). Ten kalkulator jest zoptymalizowany dla dorosłych psów i kotów. W przypadku szczeniąt zawsze skonsultuj się z weterynarzem w celu ustalenia konkretnego planu wzrostu. Niewłaściwe karmienie w fazie wczesnego wzrostu może prowadzić do poważnych problemów ze szkieletem w późniejszym życiu, ponieważ nadmiar kalorii może wymusić zbyt szybki rozwój kości.',
  },
  {
    question: 'Ile razy dziennie powinienem rozdzielać rację?',
    answer: 'Idealnie jest rozłożyć całkowitą wynikową ilość na 2 lub 3 posiłki dziennie. Pomaga to utrzymać stabilny poziom glukozy i poprawia trawienie, szczególnie u ras skłonnych do skrętu żołądka. Stałe pory posiłków pomagają również utrzymać zwierzę w sytości i zmniejszają prawdopodobieństwo proszenia o resztki między zaplanowanymi karmieniami.',
  },
];

const howTo: PetRationLocaleContent['howTo'] = [
  { name: 'Wybierz gatunek ostrożnie', text: 'Wskaż, czy obliczenie dotyczy psa czy kota, ponieważ ich metabolizm i limity wagowe znacznie się różnią w zależności od ich unikalnych cech biologicznych.' },
  { name: 'Dostosuj do dokładnej wagi', text: 'Przesuń suwak do aktualnej wagi swojego zwierzaka w kilogramach. Ważne jest, aby użyć ostatnio zmierzonej wagi dla dokładnego obliczenia zapotrzebowania na energię.' },
  { name: 'Określ ich poziom aktywności', text: 'Wybierz między niską, normalną lub wysoką aktywnością na podstawie rzeczywistych codziennych ćwiczeń i poziomu energii, jakie wykazuje Twój czworonożny towarzysz.' },
  { name: 'Wprowadź kaloryczność karmy na kg', text: 'Poszukaj na opakowaniu karmy dla zwierząt dokładnej wartości kcal/kg, aby końcowa racja w gramach była jak najbardziej precyzyjna dla optymalnego zdrowia.' },
];

const seo: PetRationLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Kluczowe Zasady Żywienia i Zdrowia Weterynaryjnego',
    items: [
      'Formuła RER to: 70 × (waga w kg)^0,75. Jest to naukowa podstawa wszystkich nowoczesnych obliczeń kalorycznych weterynaryjnych.',
      'DER mnoży RER przez konkretny współczynnik stylu życia zwierzęcia, aby zapewnić dzienne zapotrzebowanie.',
      'Wykastrowany pies potrzebuje do 20 procent mniej kalorii niż pies nienaruszony z powodu zmian hormonalnych.',
      'Otyłość dotyka dziś 50 procent zwierząt domowych i znacząco skraca ich oczekiwaną długość i jakość życia.',
      'Obliczanie dokładnej racji jest jedną z najskuteczniejszych form medycyny prewencyjnej dla właścicieli zwierząt.',
      'Używanie wagi kuchennej zapewnia dokładność potrzebną do przestrzegania naukowo opracowanego planu żywienia.',
    ],
  },
  { type: 'title', text: 'Kompletny Przewodnik po Obliczaniu Dziennej Racji Żywieniowej Twojego Pupila dla Optymalnego Zdrowia', level: 2 },
  {
    type: 'paragraph',
    html: 'Prawidłowe karmienie psa lub kota to nie tylko kwestia napełniania ich miski każdego ranka. Żywienie jest fundamentalnym filarem ich zdrowia, długowieczności i dobrego samopoczucia emocjonalnego. <strong>Kalkulator dziennej racji dla zwierząt</strong> jest niezbędnym narzędziem dla każdego odpowiedzialnego właściciela, który chce uniknąć dwóch najczęstszych problemów we współczesnym żywieniu weterynaryjnym: niedożywienia z powodu braku składników odżywczych oraz, przede wszystkim, otyłości, która dotyka ponad 50% zwierząt domowych w krajach rozwiniętych.',
  },
  {
    type: 'paragraph',
    html: 'W tym przewodniku zbadamy naukowe podstawy obliczeń kalorycznych, sposób interpretacji etykiet karm oraz to, jak czynniki takie jak wiek, poziom aktywności fizycznej i stan fizjologiczny wpływają na ilość pokarmu, której Twój towarzysz potrzebuje każdego dnia. Pomożemy Ci zrozumieć, jak niewielkie korekty w dziennej racji mogą przynieść ogromną różnicę w zapobieganiu cukrzycy, problemom ze stawami i zdrowiu serca Twojego zwierzęcia.',
  },
  { type: 'title', text: 'Nauka stojąca za Obliczeniami: Zrozumienie RER i DER', level: 3 },
  {
    type: 'paragraph',
    html: 'Aby dokładnie określić, ile zwierzę powinno jeść każdego dnia, weterynarze i dietetycy stosują dwa kluczowe pojęcia: RER i DER. Skróty te oznaczają odpowiednio Resting Energy Requirement (zapotrzebowanie na energię spoczynkową) oraz Daily Energy Requirement (dzienne zapotrzebowanie na energię). Zrozumienie ich interakcji jest kluczowe dla bezpiecznego i kontrolowanego zarządzania wagą i dobrem Twojego pupila.',
  },
  {
    type: 'paragraph',
    html: 'RER pokrywa energię potrzebną do podstawowych funkcji narządów, oddychania i krążenia podczas odpoczynku zwierzęcia. DER bierze następnie tę wartość i dostosowuje ją do stylu życia zwierzęcia, niezależnie od tego, czy jest to aktywny pies pracujący, czy spokojny kot niewychodzący. Dzięki prawidłowemu skalibrowaniu tych wartości możemy osiągnąć równowagę, która sprzyja zdrowej kondycji ciała w długim okresie.',
  },
  {
    type: 'stats',
    items: [
      { label: 'RER: Energia spoczynkowa', value: '70 × kg^0,75' },
      { label: 'Współczynnik szczeniaka', value: 'od x2,5 do x3,5' },
      { label: 'Współczynnik aktywnego dorosłego', value: 'od x1,6 do x2,0' },
      { label: 'Współczynnik seniora', value: 'od x1,0 do x1,4' },
    ],
  },
  { type: 'title', text: 'Jak Czytać i Interpretować Etykietę Karmy Twojego Zwierzęcia', level: 3 },
  {
    type: 'paragraph',
    html: 'Aby kalkulator podał Ci dokładne gramy, musisz znać <strong>gęstość kaloryczną</strong> produktu, znaną również jako energia metaboliczna. Wartość ta jest zazwyczaj wyrażona jako kcal/kg lub kcal/100g na opakowaniu. Wprowadzając te liczby precyzyjnie, możesz opracować dietę, która nie jest ani niedoborowa, ani nadmierna.',
  },
  {
    type: 'stats',
    items: [
      { label: 'Chrupki dietetyczne Light', value: '~3000 kcal/kg' },
      { label: 'Standardowe chrupki dla dorosłych', value: '~3500 kcal/kg' },
      { label: 'Wysokoenergetyczne chrupki dla szczeniąt', value: '~4000 kcal/kg' },
      { label: 'Mokra karma w puszce', value: '~1000 kcal/kg' },
    ],
  },
  {
    type: 'tip',
    title: 'Uwaga Żywieniowa od Weterynarza',
    html: 'Każde zwierzę jest indywidualnością o własnym, unikalnym metabolizmie. Kalkulator oferuje naukowo poparty punkt wyjścia, ale zawsze powinieneś monitorować rzeczywistą kondycję ciała, wyczuwając żebra swojego zwierzaka. Jeśli możesz je łatwo wyczuć bez mocnego naciskania, waga jest idealna. Jeśli żebra są trudne do znalezienia pod warstwą tłuszczu, może nadszedł czas, aby ograniczyć rację żywnościową.',
  },
  { type: 'title', text: 'Różnice w Żywieniu Między Kotami a Psami', level: 3 },
  {
    type: 'paragraph',
    html: 'Koty są ścisłymi mięsożercami, a ich metabolizm jest zoptymalizowany do pozyskiwania energii z białek zwierzęcych. U psów widzimy bardziej elastyczny metabolizm wszystkożerny, ale nadal należy uważać na nadmiar węglowodanów, który może prowadzić do wzrostu wagi. Oba gatunki rozkwitają przy kontrolowanej racji, która unika nadmiernego obciążenia stawów i układu sercowo-naczyniowego przez całe ich życie.',
  },
  {
    type: 'paragraph',
    html: 'Poświęcenie kilku minut na obliczenie dokładnej racji jest jedną z najbardziej opłacalnych inwestycji w medycynę prewencyjną, jaką możesz podjąć jako właściciel. Zdrowa waga drastycznie zmniejsza ryzyko chorób przewlekłych i daje Twojemu najlepszemu przyjacielowi największą szansę na długie, pełne energii życie. Skonsultuj się z weterynarzem podczas następnej rutynowej wizyty, aby upewnić się, że Twoja obecna strategia żywienia jest optymalna.',
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
