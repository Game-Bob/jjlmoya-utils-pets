import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetWaterIntakeLocaleContent, PetWaterIntakeUI } from '../entry';

const slug = 'kalkulator-zapotrzebowania-na-wode-psy-koty';
const title = 'Kalkulator dziennego zapotrzebowania na wodę dla psów i kotów';
const description = 'Oblicz codzienne zapotrzebowanie na wodę dla psa lub kota na podstawie masy ciała, diety, aktywności i temperatury otoczenia.';

const ui: PetWaterIntakeUI = {
  "journeyHint": "Wybierz zwierzę, wprowadź masę ciała oraz ustaw karmę i temperaturę otoczenia.",
  "speciesLegend": "Dla kogo jest miska z wodą?",
  "speciesDog": "Pies",
  "speciesCat": "Kot",
  "weightLabel": "Masa ciała",
  "weightHint": "Wprowadź aktualną zdrową wagę zwierzęcia.",
  "weightKg": "kg",
  "dietLegend": "Ile wody pochodzi z karmy?",
  "dietDry": "Głównie sucha karma",
  "dietMixed": "Żywienie mieszane",
  "dietWet": "Głównie mokra karma",
  "activityLegend": "Dzisiejsza aktywność",
  "activityCalm": "Spokojny / Odpoczynek",
  "activityTypical": "Umiarkowana / Normalna",
  "activityActive": "Intensywna / Bardzo aktywny",
  "heatLegend": "Klimat i temperatura",
  "heatNormal": "Umiarkowany / Normalna",
  "heatWarm": "Ciepło",
  "heatHot": "Gorąco / Upał",
  "resultEyebrow": "Szacowany poziom wody",
  "totalRangeLabel": "Całkowite zapotrzebowanie na wodę (wszystkie źródła)",
  "drinkingRangeLabel": "Wskazówka orientacyjna dla miski",
  "totalRangeHint": "Ogólny zakres dzienny uwzględniający wilgotność karmy.",
  "drinkingRangeHint": "Szacowana część wypijana bezpośrednio z miski.",
  "statusEveryday": "Standardowe warunki",
  "statusActive": "Aktywny dzień",
  "statusWarm": "Ciepła pogoda",
  "statusDemanding": "Wymagające warunki",
  "statusDetailEveryday": "Baza bez dodatkowych czynników ciepła lub wysiłku.",
  "statusDetailActive": "Wysiłek zwiększa utratę wody. Zapewnij stały dostęp do świeżej wody.",
  "statusDetailWarm": "Upał zwiększa ziajanie. Cień i chłód są priorytetem.",
  "statusDetailDemanding": "Wysoka aktywność i upał. Uważnie obserwuj zwierzę.",
  "resultEmpty": "Wprowadź prawidłową wagę, aby zobaczyć poziom wody.",
  "sceneAria": "Zbiornik na wodę dla wybranego zwierzęcia",
  "sceneTotal": "WODA CAŁKOWITA",
  "noteTitle": "Miska z wodą nie zastępuje diagnozy",
  "noteText": "Zawsze zapewniaj czystą wodę. W przypadku nagłych zmian w piciu skonsultuj się z weterynarzem.",
};

const faq: PetWaterIntakeLocaleContent['faq'] = [
  {
    "question": "Ile wody powinien pić pies lub kot dziennie?",
    "answer": "Wytyczne weterynaryjne AAHA zalecają około 60 mL/kg dziennie dla psów i 40 mL/kg dla kotów. Wartość zależy od diety, aktywności i temperatury."
  },
  {
    "question": "Czy mokra karma zmniejsza zapotrzebowanie na picie z miski?",
    "answer": "Tak, mokra karma zawiera od 75% do 82% wody, pokrywając większość zapotrzebowania. Zwierzęta jedzące mokrą karmę piją z miski znacznie mniej."
  },
  {
    "question": "Kiedy należy się niepokoić spożyciem wody?",
    "answer": "Skonsultuj się z weterynarzem, jeśli zauważysz nagły wzrost pragnienia (polidypsja) lub odmowę picia wody, co może wskazywać na chorobę nerek lub cukrzycę."
  },
  {
    "question": "Czy upał podwaja zapotrzebowanie na wodę?",
    "answer": "Tak, ziajanie podczas upałów zwiększa utratę wody. Zawsze zapewniaj świeżą wodę i cień."
  }
];

const howTo: PetWaterIntakeLocaleContent['howTo'] = [
  {
    "name": "Wybierz gatunek i wagę",
    "text": "Wybierz psa lub kota i wprowadź zdrową wagę w kg lub lb."
  },
  {
    "name": "Określ rodzaj karmy",
    "text": "Wybierz karmę suchą, mieszaną lub mokrą, aby uwzględnić wodę z posiłków."
  },
  {
    "name": "Dostosuj aktywność i temperaturę",
    "text": "Ustaw poziom aktywności i temperaturę otoczenia dla utraty wody."
  },
  {
    "name": "Sprawdź szacunki",
    "text": "Sprawdź całkowite zapotrzebowanie na wodę oraz szacowaną ilość do wypicia z miski."
  }
];

const seo: PetWaterIntakeLocaleContent['seo'] = [
  {
    "type": "summary",
    "title": "Wytyczne Dotyczące Zapotrzebowania na Wodę u Psa i Kota",
    "items": [
      "Zapotrzebowanie bazowe: Psy wymagają ~60 mL/kg dziennie; koty ~40 mL/kg dziennie według wytycznych AAHA.",
      "Wpływ diety: Mokra karma dostarcza 70-80% wilgoci, znacznie zmniejszając picie z miski.",
      "Upał i aktywność: Ziajanie zwiększa utratę wody, podnosząc codzienne zapotrzebowanie na płyny.",
      "Ostrzeżenia zdrowotne: Nagłe zmiany w pragnieniu wymagają natychmiastowej oceny weterynaryjnej.",
      "Dostęp do świeżej wody: Umieszczenie kilku czystych misek w spokojnych miejscach wspiera zdrowe nawyki."
    ]
  },
  {
    "type": "title",
    "text": "Zrozumienie Codziennego Zapotrzebowania na Wodę dla Psów i Kotów",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Prawidłowe nawodnienie jest kluczowe dla funkcji metabolicznych, trawienia, smarowania stawów i zdrowia nerek u zwierząt domowych. Woda stanowi od 60% do 70% całkowitej masy ciała dorosłego psa lub kota, a nawet niewielki deficyt płynów może zaburzyć vitalne procesy fizjologiczne. Literatura weterynaryjna American Animal Hospital Association (AAHA) ustala podstawowe zapotrzebowanie na około 60 mL na kilogram masy ciała dla psów oraz 40 mL na kilogram dla kotów."
  },
  {
    "type": "paragraph",
    "html": "Jednakże te wartości reprezentują całkowite codzienne zapotrzebowanie na płyny, a nie ilość, którą zwierzę musi wypić bezpośrednio z miski. Całkowite spożycie wody obejmuje wodę pitną, wilgoć zawartą w karmie komercyjnej lub domowej oraz niewielką ilość wody metabolicznej. Zrozumienie tej różnicy pomaga właścicielom uniknąć niepotrzebnego niepokoju, gdy kot lub pies rzadziej odwiedza miskę przy diecie mokrej."
  },
  {
    "type": "title",
    "text": "Całkowita Woda vs Spożycie z Miski",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Forma podawanej karmy odgrywa dominującą rolę w określaniu, ile wody zwierzę wypije z miski. Sucha karma komercyjna zawiera zaledwie 6% do 10% wilgoci, co wymaga od zwierzęcia wypicia prawie całego zapotrzebowania z miski. Z kolei mokra karma w puszkach składa się w 75% do 82% z wody. Kot lub pies jedzący wyłącznie mokrą karmę może uzyskać większość nawodnienia z posiłków."
  },
  {
    "type": "table",
    "headers": [
      "Czynnik Wejściowy",
      "Wpływ na Zapotrzebowanie",
      "Kluczowa Uwaga Kliniczna"
    ],
    "rows": [
      [
        "Profil Gatunku",
        "Ustala podstawowe tempo",
        "Baza dla psa ~60 mL/kg; Baza dla kota ~40 mL/kg"
      ],
      [
        "Masa Ciała",
        "Skaluje całkowitą objętość",
        "Używaj docelowej wagi dla zwierząt z nadwagą"
      ],
      [
        "Wilgotność Diety",
        "Określa udział z karmy",
        "Mokra karma dostarcza do 80% wody"
      ],
      [
        "Aktywność i Upał",
        "Zwiększa utratę przez ziajanie",
        "Wysokie temperatury wymagają więcej wody"
      ]
    ]
  },
  {
    "type": "title",
    "text": "Praktyczne Wytyczne Zarządzania Nawodnieniem",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Właściciele powinni skupić się na zapewnieniu swobodnego dostępu do świeżej, czystej wody przez cały czas. Miski na wodę powinny być codziennie myte i napełniane świeżą wodą. Dla kotów warto stosować fontanny lub szerokie miski."
  },
  {
    "type": "card",
    "title": "Dieta Sucha (Karma Sucha)",
    "icon": "mdi:food-drumstick",
    "html": "Zwierzęta na suchej karmie silnie zależą od picia z miski. Upewnij się, że miski są czyste i umieszczone w spokojnych miejscach."
  },
  {
    "type": "card",
    "title": "Dieta Mokra (Puszki)",
    "icon": "mdi:food-drumstick",
    "html": "Mokra karma dostarcza znacznej wilgoci. Chociaż zwierzęta jedzące puszki piją mniej z miski, świeża woda musi być zawsze dostępna."
  },
  {
    "type": "card",
    "title": "Upał i Dni Aktywne",
    "icon": "mdi:weather-sunny",
    "html": "Podczas upałów ziajanie zwiększa utratę wody. Zawsze zapewniaj zacienione miejsca i przerwy na wodę."
  },
  {
    "type": "tip",
    "title": "Czerwone Flagi Weterynaryjne",
    "html": "Nagła zmiana w wzorcach picia - picie znacznie większej ilości wody (polidypsja) lub odmowa picia - to ważny wskaźnik kliniczny. Skonsultuj się z weterynarzem."
  }
];

const schemas: PetWaterIntakeLocaleContent['schemas'] = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  } as WithContext<SoftwareApplication>,
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  } as WithContext<FAQPage>,
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
  } as WithContext<HowTo>,
];

export const content: PetWaterIntakeLocaleContent = {
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
