import { bibliography } from '../bibliography';
import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { PetAgeUI, PetAgeLocaleContent } from '../index';

const slug = 'kalkulator-wieku-zwierzat';
const title = 'Kalkulator Wieku Zwierząt';
const description = 'Odkryj prawdziwy wiek swojego psa lub kota w latach ludzkich. Zapomnij o "regule pomnożenia przez 7". Skorzystaj z naszego kalkulatora opartego na współczesnej wiedzy weterynaryjnej.';

const ui: PetAgeUI = {
  toolTitle: 'Kalkulator Wieku',
  toolSubtitle: 'Ile lat ludzkich ma naprawdę Twój futrzasty przyjaciel?',
  petNameLabel: 'Imię (Opcjonalnie)',
  petNamePlaceholder: 'np. Buddy',
  petTypeDog: 'Pies',
  petTypeCat: 'Kot',
  sizeSmall: 'Mały',
  sizeMedium: 'Średni',
  sizeLarge: 'Duży',
  sizeGiant: 'Olbrzymi',
  birthYearLabel: 'Rok urodzenia',
  humanAgeLabel: 'Wiek ludzki',
  humanAgeUnit: 'lat',
  humanAgeYears: 'lat',
  lifeStageLabel: 'Etap życia',
  milestoneLabel: 'Następny krok milowy',
  shareBtn: 'Udostępnij wynik',
  shareSuccess: 'Skopiowano! Otwieranie karty...',
  humanAgeTitle: 'Magiczny Wiek',
  recalculateBtn: 'Oblicz inny wiek',
  realAgeLabel: 'Prawdziwy Wiek',
  defaultPetName: 'Twoje zwierzę',
  stageDogPuppy: 'Radosny Szczeniak',
  stageDogTeen: 'Zbuntowany Nastolatek',
  stageDogAdult: 'Dorosły w Szczytowej Formie',
  stageDogMature: 'Dystyngowana Dojrzałość',
  stageDogSenior: 'Mądrość Seniora',
  stageCatKitten: 'Dziecięca Ciekawość',
  stageCatYouth: 'Focza Młodość',
  stageCatReign: 'Domowe Panowanie',
  stageCatVeteran: 'Rozpieszczony Weteran',
  stageCatVenerable: 'Czcigodny Starszyzna',
};

const faq: PetAgeLocaleContent['faq'] = [
  {
    question: 'Czy to prawda, że jeden rok psi odpowiada siedmiu latom ludzkim?',
    answer: 'Nie. To uproszczona reguła, którą nowoczesna nauka weterynaryjna obaliła. Psy dojrzewają bardzo szybko w ciągu pierwszych dwóch lat życia, a proces ten następnie spowalnia, różniąc się znacznie w zależności od wagi i rasy. Ostatnie badania nad metylacją DNA pozwoliły na stworzenie bardziej precyzyjnych formuł starzenia, które lepiej odzwierciedlają prawdziwy rozwój biologiczny zwierząt w ciągu ich życia.',
  },
  {
    question: 'Dlaczego duże psy starzeją się szybciej?',
    answer: 'Psy dużych ras mają bardziej przyspieszony metabolizm i wzrost, co powoduje większy stres oksydacyjny w ich komórkach. Oznacza to, że ich oczekiwana długość życia jest krótsza niż psów małych. Markery biologiczne pokazują, że rasy olbrzymie mogą osiągnąć status seniora już w wieku 5 lat ludzkich, podczas gdy rasy małe mogą go nie osiągnąć do 10 lub 11 lat.',
  },
  {
    question: 'Jak starzeją się koty w porównaniu do ludzi?',
    answer: 'Kot kończy okres niemowlęcy w wieku jednego miesiąca, okres buntu w wieku 6 miesięcy, a dorosłość (odpowiednik 24 lat ludzkich) osiąga w wieku 2 lat. Po tym czasie każdy rok życia kota odpowiada w przybliżeniu 4 latom ludzkim. Ten wzorzec jest dość spójny u różnych ras kotów, w przeciwieństwie do znacznych różnic obserwowanych u psów.',
  },
  {
    question: 'W jakim wieku zwierzę jest uważane za seniora?',
    answer: 'Zazwyczaj psa uważa się za seniora, gdy osiągnie on 75% oczekiwanej długości życia. W przypadku kotów jest to zazwyczaj od 7 do 11 lat, w zależności od ich stanu zdrowia. Regularne badania weterynaryjne stają się coraz ważniejsze na tym etapie, aby monitorować typowe dolegliwości związane z wiekiem, takie jak choroby nerek czy pogorszenie funkcji poznawczych.',
  },
];

const howTo: PetAgeLocaleContent['howTo'] = [
  { name: 'Wybierz gatunek zwierzęcia', text: 'Wybierz, czy masz psa, czy kota, aby zastosować właściwą formułę biologiczną dla ich specyficznego tempa metabolizmu.' },
  { name: 'Wskaż rozmiar (tylko psy)', text: 'W przypadku psów waga jest kluczowym czynnikiem przy określaniu wieku biologicznego. Określ, czy jest mały (do 10 kg), średni (10 do 25 kg), duży (25 do 45 kg) czy olbrzymi (powyżej 45 kg).' },
  { name: 'Wprowadź rok urodzenia', text: 'Wpisz rok urodzenia swojego zwierzęcia, aby obliczyć jego wiek chronologiczny. Nasz system przetworzy te informacje zgodnie z ustalonymi krzywymi starzenia.' },
  { name: 'Przeanalizuj odpowiednik ludzki', text: 'Sprawdź wynik, aby dowiedzieć się, czy Twoje zwierzę jest w fazie szczenięcej, młodej, dorosłej czy starszej w porównaniu z człowiekiem i zrozumieć jego obecne potrzeby.' },
];

const seo: PetAgeLocaleContent['seo'] = [
  {
    type: 'summary',
    title: 'Co musisz wiedzieć o starzeniu się zwierząt',
    items: [
      '"Reguła 7" to mit: psy dojrzewają wykładniczo przez pierwsze 2 lata życia.',
      '1-roczny pies to jak 15 lat ludzkich; 2-letni odpowiada 24 latom ludzkim.',
      'Duże psy starzeją się szybciej niż małe po 2. roku życia z powodu obciążeń biologicznych.',
      'Koty podążają za bardziej liniową krzywą: każdy rok koci odpowiada 4 latom ludzkim po 2. roku życia.',
      'Wiek biologiczny jest lepszym prognostykiem potrzeb zdrowotnych niż sam wiek chronologiczny.',
      'Regularne badania przesiewowe mogą pomóc wykryć problemy związane z wiekiem, zanim staną się poważne.',
    ],
  },
  { type: 'title', text: 'Naukowa Prawda o Wieku Twojego Zwierzęcia', level: 2 },
  {
    type: 'paragraph',
    html: 'Czy wiesz, że 2-letni kot ma już dojrzałość 24-letniej osoby? Dowiedz się, dlaczego zasada mnożenia przez 7 jest mitem i jak zrozumienie rzeczywistości biologicznej może poprawić opiekę nad Twoim zwierzakiem. Stary mit, że "1 rok psi równa się 7 latom ludzkim" to uproszczenie, które nie bierze pod uwagę ogromnych zmian rozwojowych widocznych na początku życia. Zwierzęta dojrzewają z zawrotną prędkością w ciągu pierwszych dwóch lat życia, osiągając dojrzałość seksualną i fizyczną bardzo szybko. Później ta krzywa starzenia spłaszcza się i znacznie spowalnia.',
  },
  {
    type: 'paragraph',
    html: 'Nowoczesne badania, w tym badania nad zegarami epigenetycznymi i metylacją DNA, dały nam znacznie bardziej szczegółowy obraz. Badania te pokazują, że modyfikacje chemiczne DNA psa zmieniają się w różnym tempie w ciągu jego życia. W wczesnym szczenięctwie zmiany te są szybkie i intensywne, natomiast w dorosłości przesunięcia metaboliczne i genetyczne są bardziej stopniowe. To zrozumienie pozwoliło naukowcom opracować formuły logarytmiczne, które są znacznie dokładniejsze niż jakiekolwiek mnożenie liniowe.',
  },
  { type: 'title', text: 'Nauka stojąca za Obliczeniami', level: 3 },
  {
    type: 'paragraph',
    html: 'To narzędzie wykorzystuje oficjalne wytyczne <strong>American Animal Hospital Association (AAHA)</strong> oraz najnowsze badania nad metylacją DNA u psów, aby zapewnić Ci jak najdokładniejsze szacunki. Łącząc dane specyficzne dla rozmiaru z niezależnymi od rasy markerami biologicznymi, tworzymy kompleksowy model rozwoju zwierzęcia. Takie podejście uznaje, że Chihuahua i Dog Niemiecki mają zupełnie inne doświadczenia życiowe i profile starzenia się od momentu narodzin.',
  },
  {
    type: 'paragraph',
    html: 'Zrozumienie tych różnic jest kluczowe dla odpowiedzialnych właścicieli zwierząt. Pozwala na lepsze planowanie interwencji weterynaryjnych, takich jak zmiana diety na profil seniora czy rozpoczęcie profilaktycznego podawania suplementów na stawy. Nasz kalkulator wypełnia lukę między złożoną nauką opartą na recenzjach a praktyczną, codzienną wiedzą dla miłośników zwierząt na całym świecie.',
  },
  {
    type: 'table',
    headers: ['Gatunek', 'Rok 1', 'Rok 2', 'Od roku 3'],
    rows: [
      ['Kot', '15 lat ludzkich', '24 lata ludzkie', '+4 lata rocznie'],
      ['Mały pies', '15 lat ludzkich', '24 lata ludzkie', '+5 lat rocznie'],
      ['Średni pies', '15 lat ludzkich', '24 lata ludzkie', '+6 lat rocznie'],
      ['Duży pies', '15 lat ludzkich', '24 lata ludzkie', '+7 lat rocznie'],
      ['Olbrzymi pies', '15 lat ludzkich', '24 lata ludzkie', '+8 lat rocznie'],
    ],
  },
  { type: 'title', text: 'Etapy Życia: Czego się Spodziewać i jak się Przygotować', level: 3 },
  {
    type: 'paragraph',
    html: 'Znajomość prawdziwego wieku zwierzęcia pomaga zrozumieć jego potrzeby medyczne i emocjonalne w każdej fazie. Podobnie jak ludzie przechodzą przez różne etapy życia, psy i koty doświadczają specyficznych zmian fizjologicznych i psychologicznych podczas dorośnięcia. Świadomość tych przejść pozwala na zapewnienie właściwego wsparcia we właściwym czasie, niezależnie od tego, czy jest to gra o wysokiej energii dla nastolatka, czy specjalistyczna opieka ortopedyczna dla seniora.',
  },
  {
    type: 'card',
    title: 'Szczeniak lub Junior (od 0 do 1 roku)',
    icon: 'mdi:star-shooting',
    html: 'To etap wybuchowego wzrostu i rozwoju. Ich kości rosną w niesamowitym tempie, ich zęby mleczne wypadają, aby zrobić miejsce dla stałych, a ich mózg pochłania informacje jak gąbka. Szczepienie i wczesna socjalizacja są tutaj kluczowe, aby upewnić się, że wyrosną na dobrze przystosowane dorosłe osobniki. To także najlepszy czas na ustalenie dobrych nawyków, które zostaną na całe życie.',
  },
  {
    type: 'card',
    title: 'Dorosły (od 2 do 6 lat)',
    icon: 'mdi:shield-check',
    html: 'To dla większości zwierząt szczyt formy fizycznej i psychicznej. Ich osobowość jest już ukształtowana i zazwyczaj są w najbardziej aktywnym momencie. To złoty moment na cieszenie się intensywną aktywnością fizyczną i utrzymanie idealnej masy ciała, aby zapobiec przyszłym chorobom. Konsekwentne ćwiczenia i zrównoważona dieta są filarami zdrowia w tych latach, pomagając budować silny układ odpornościowy i odporne ciało.',
  },
  {
    type: 'card',
    title: 'Senior (powyżej 7 lat)',
    icon: 'mdi:heart-pulse',
    html: 'Na pysku zaczynają pojawiać się siwe włosy, a zwierzę ma tendencję do częstszego spania. Ich metabolizm spowalnia znacząco i mogą wykazywać mniejsze zainteresowanie aktywnymi zabawami. Od teraz badania weterynaryjne powinny odbywać się co sześć miesięcy. Zwracaj uwagę na oznaki zapalenia stawów, zmiany w zdrowiu zębów lub jakiekolwiek zmiany w zachowaniu, które mogą wskazywać na dyskomfort. Wczesne wykrywanie dolegliwości seniora to najlepszy sposób na utrzymanie wysokiej jakości życia.',
  },
  {
    type: 'tip',
    title: 'Weterynaryjna Porada dotycząca Starzenia',
    html: 'Obliczony wiek to średnia szacunkowa wartość biologiczna oparta na obszernych zestawach danych. Czynniki takie jak konkretna rasa, genetyka, dieta i styl życia mogą mieć znaczący wpływ na rzeczywiste tempo starzenia się zwierzaka. Aby uzyskać spersonalizowaną poradę i kompleksową ocenę stanu zdrowia, zawsze konsultuj się ze swoim lekarzem weterynarii.',
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
  faqTitle: 'Często Zadawane Pytania',
  faq: 'Bibliografia',
  bibliography,
  howTo,
  schemas,
};
