import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetCarrierCrateSizePlannerLocaleContent } from '../entry';
import type { PetCarrierCrateSizePlannerUI } from '../ui';

const slug = 'kalkulator-wymiarow-transportera-dla-zwierzat';
const title = 'Kalkulator Wymiarów Transportera dla Zwierząt Domowych';
const description = 'Oblicz zalecane wymiary wewnętrzne transportera dla psa lub kota na podstawie sześciu pomiarów ciała, z weryfikacją do podróży samolotem.';

const ui: PetCarrierCrateSizePlannerUI = {
  heroEyebrow: 'Najpierw zmierz. Kupuj z pewnością.',
  journeyHint: 'Wybierz zwierzę i tryb podróży, wprowadź pomiary i użyj schematu jako punktu odniesienia do sprawdzenia wnętrza transportera.',
  unitLegend: 'Jednostki wyświetlania',
  speciesStep: 'Zacznij od zwierzęcia',
  metricUnit: 'Metryczne',
  imperialUnit: 'Imperialne',
  speciesLegend: 'Kto podróżuje?',
  speciesDog: 'Pies',
  speciesCat: 'Kot',
  modeLegend: 'Gdzie odbywa się podróż?',
  modeCar: 'Samochód',
  modeAir: 'Samolot',
  measurementsLegend: 'Zmierz swojego pupila',
  noseTailLabel: 'Od czubka nosa do nasady ogona',
  noseTailHint: 'Mierz bez uwzględniania zakrzywienia ogona',
  elbowHeightLabel: 'Od podłoża do łokcia',
  shoulderWidthLabel: 'Szerokość w barkach',
  standingHeightLabel: 'Wysokość w pozycji stojącej',
  beddingLabel: 'Grubość legowiska lub materaca',
  weightLabel: 'Waga zwierzęcia',
  cmUnit: 'cm',
  inchUnit: 'cal',
  kgUnit: 'kg',
  lbUnit: 'funt',
  snubNosedLabel: 'Rasa krótkogłowa lub brachycefaliczna',
  snubNosedHint: 'Podróż samolotem wymaga poprawek IATA. Skonsultuj się z weterynarzem i linią lotniczą.',
  presetLegend: 'Rozpocznij z profilem',
  presetCat: 'Kot',
  presetSmallDog: 'Mały pies',
  presetMediumDog: 'Średni pies',
  presetLargeDog: 'Duży pies',
  resultEyebrow: 'Zalecany schemat pomiarowy',
  resultTitle: 'Odpowiednia przestrzeń do obracania się',
  resultDimensionLabel: 'Minimalne wymiary wewnętrzne',
  lengthLabel: 'Długość',
  widthLabel: 'Szerokość',
  heightLabel: 'Wysokość',
  petWeightLabel: 'Waga zwierzęcia',
  journeyLabel: 'Tryb podróży',
  statusComfort: 'Podstawowy poziom komfortu',
  statusAirReview: 'Weryfikacja transportu lotniczego',
  statusSnub: 'Korekta dla pyska krótkiego',
  resultDetail: 'Sprawdź rzeczywiste wnętrze transportera, otwór drzwiowy, wentylację i przepisy przewoźnika przed zakupem.',
  checklistTitle: 'Cztery kontrole ciała',
  checklistStand: 'Zwierzę może swobodnie stać i siedzieć wyprostowane bez dotykania sufitu głową lub uszami.',
  checklistTurn: 'Zwierzę może swobodnie obrócić się w pozycji stojącej.',
  checklistLie: 'Zwierzę może wygodnie położyć się w naturalnej pozycji na legowisku.',
  checklistAirline: 'W przypadku lotu sprawdź wymogi linii, wentylację, zamknięcia i nieprzepuszczalność podłoża.',
  invalidInput: 'Wprowadź dodatnie wartości dla każdego pomiaru ciała oraz wagi.',
  noteTitle: 'Używaj tego narzędzia jako szacunku przestrzeni, a nie zgody na lot',
  noteText: 'Przepisy różnią się w zależności od linii lotniczej, pojazdu i zwierzęcia. Lekarz weterynarii powinien ocenić stan zdrowia pupila.',
  methodTitle: 'Metoda obliczeniowa',
  methodText: 'Wzór opiera się na wytycznych IATA: długość odpowiada odległości od nosa do ogona plus połowie wysokości łokcia, szerokość to podwójna szerokość barków, a wysokość to wysokość stojąca plus grubość legowiska.',
  blueprintLabel: 'Schemat transportera z wymiarami pokazujący zwierzę wewnątrz oraz linie pomocnicze długości i wysokości',
  dimensionInside: 'Wymiary wewnętrzne',
  checkMark: 'OK',
};

const faq: PetCarrierCrateSizePlannerLocaleContent['faq'] = [
  {
    question: 'Jak prawidłowo zmierzyć psa lub kota do transportera?',
    answer: 'Zmierz odległość od czubka nosa do nasady ogona, od podłoża do stawu łokciowego, szerokość w najszerszym miejscu barków oraz wysokość od podłoża do najwyższego punktu głowy lub uszu. Grubość legowiska dodaj osobno.',
  },
  {
    question: 'Jakie wymiary wewnętrzne oblicza ten kalkulator?',
    answer: 'Szacuje minimalną długość wewnętrzną na podstawie długości ciała i łokcia, szerokość na podstawie barków oraz całkowitą wysokość uwzględniającą legowisko.',
  },
  {
    question: 'Czy wyniki gwarantują akceptację przez linie lotnicze?',
    answer: 'Nie. Tryb lotniczy stosuje referencyjne wzory IATA, jednak każda linia lotnicza może posiadać własne wymogi. Zawsze weryfikuj oficjalne zasady przewoźnika.',
  },
  {
    question: 'Dlaczego rasy z krótkim pyskiem wymagają większego transportera w samolocie?',
    answer: 'Wytyczne IATA zalecają większą przestrzeń dla ras brachycefalicznych, aby zapobiec przegrzaniu i trudnościom w oddychaniu podczas lotu.',
  },
  {
    question: 'Czy transporter do samochodu powinien być jak największy?',
    answer: 'Nie. Powinien zapewniać odpowiednią przestrzeń do wstania, obrócenia się i położenia, ale musi dać się stabilnie zamocować w pojeździe.',
  },
];

const howTo: PetCarrierCrateSizePlannerLocaleContent['howTo'] = [
  { name: 'Wybierz tryb podróży', text: 'Wybierz samochód lub samolot, aby dostosować kryteria weryfikacji.' },
  { name: 'Wprowadź sześć pomiarów', text: 'Zmierz wymiary ciała oraz wagę zwierzęcia, gdy jest spokojne.' },
  { name: 'Odczytaj wymiary wewnętrzne', text: 'Użyj długości, szerokości i wysokości jako punktu wyjścia do porównania modeli na rynku.' },
  { name: 'Sprawdź zgodność z przepisami', text: 'Przed zakupem skontroluj zamknięcie, wentylację oraz zasady linii lotniczej.' },
];

const seo: PetCarrierCrateSizePlannerLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Poradnik wyboru odpowiedniego transportera dla zwierzęcia domowego',
    items: [
      'Mierz dokładnie ciało zwierzęcia zamiast kierować się wyłącznie całkowitą wagą ciała psa lub kota.',
      'Używaj użytkowych wymiarów wewnętrznych do porównywania modeli w sklepach stacjonarnych i internetowych.',
      'Zawsze sprawdzaj zamknięcie bezpieczeństwa, solidność drzwi, mocowania i wentylację transportera.',
      'Transport lotniczy wymaga specjalnego przygotowania, weryfikacji przepisów i konsultacji weterynaryjnej.',
    ],
  },
  { type: 'title', text: 'Jak zaplanować wymiary transportera dla zwierząt', level: 2 },
  {
    type: 'paragraph',
    html: 'Odpowiedni transporter musi umożliwiać cztery naturalne ruchy Twojego psa lub kota: stanie wyprostowane bez schylania głowy i uszu, siedzenie w naturalnej pozycji, swobodne obracanie się wokół własnej osi oraz wygodne leżenie w pozycji relaksacyjnej. Ten kalkulator wyznacza niezbędną długość, szerokość i wysokość wewnętrzną w sposób spersonalizowany i precyzyjny, co pozwala na bezpieczną i bezstresową podróż.',
  },
  {
    type: 'paragraph',
    html: 'Obliczone wartości reprezentują rzeczywistą przestrzeń użytkową wewnątrz klatki. Pamiętaj, że grube legowisko, miski na wodę czy pochylone ścianki zmniejszają dostępną przestrzeń użytkową przy zakupie. W przypadku jakichkolwiek wątpliwości zawsze wybieraj większy rozmiar transportera dla wygody.',
  },
  { type: 'title', text: 'Znaczenie poszczególnych pomiarów ciała dla zwierzęcia', level: 2 },
  {
    type: 'table',
    headers: ['Pomiar ciała', 'Znaczenie dla zwierzęcia', 'Zastosowanie w obliczeniach'],
    rows: [
      ['Nos do nasady ogona', 'Wyznacza podstawową długość ciała bez uwzględniania ogona.', 'Długość wewnętrzna'],
      ['Od podłoża do łokcia', 'Zapewnia przestrzeń do obracania kończyn przednich i swobodnych ruchów.', 'Długość wewnętrzna'],
      ['Szerokość w barkach', 'Gwarantuje odpowiednią szerokość w najszerszym miejscu tułowia.', 'Szerokość wewnętrzna'],
      ['Wysokość w pozycji stojącej', 'Chroni głowę i uszy przed uderzaniem o sufit klatki.', 'Wysokość wewnętrzna'],
      ['Grubość legowiska', 'Utrzymuje realną wysokość użytkową po włożeniu miękkiego posłania.', 'Wysokość wewnętrzna'],
      ['Waga ciała', 'Służy do weryfikacji maksymalnego obciążenia i wytrzymałości transportera.', 'Weryfikacja nośności'],
    ],
  },
  {
    type: 'paragraph',
    html: 'Wzory bazują na oficjalnych normach IATA dotyczących transportu żywych zwierząt drogą lotniczą i lądową: długość wewnętrzna łączy długość ciała i połowę wysokości łokcia, szerokość to podwójna szerokość barków, a wysokość obejmuje wysokość stojącą plus grubość legowiska.',
  },
  { type: 'title', text: 'Uwagi dotyczące podróży samolotem i transportu', level: 2 },
  {
    type: 'paragraph',
    html: 'Szacunek wymiarów nie zastępuje oficjalnej zgody linii lotniczej. Czynniki takie jak typ samolotu, wentylacja z czterech stron i temperatura są kluczowe dla bezpieczeństwa i zdrowia zwierzęcia w trakcie całego lotu.',
  },
  {
    type: 'tip',
    title: 'Praktyczny test przestrzeni w domu przed wyjazdem',
    html: 'Umieść zwierzę w transporterze w spokojnym otoczeniu i obserwuj jego swobodę ruchów przez kilka minut. Jeśli wygląda na ściśnięte przy obracaniu lub siadaniu, wybierz bez wahania większy rozmiar transportera.',
  },
];

const schemas: PetCarrierCrateSizePlannerLocaleContent['schemas'] = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  } as WithContext<FAQPage>,
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
  } as WithContext<HowTo>,
];

export const content: PetCarrierCrateSizePlannerLocaleContent = { slug, title, description, ui, seo, faq, bibliography, howTo, schemas };
