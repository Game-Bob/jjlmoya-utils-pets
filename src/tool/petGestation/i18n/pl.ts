import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetGestationLocaleContent } from '../index';

const slug = 'kalkulator-ciazy-zwierzat';
const title = 'Kalkulator ciąży zwierząt domowych';
const description = 'Oblicz przewidywany termin porodu psa, kota, królika lub fretki na podstawie daty krycia z udokumentowanym zakresem.';

const ui: PetGestationLocaleContent['ui'] = {
  "journeyHint": "Wybierz gatunek, wpisz datę krycia i sprawdź oczekiwany termin porodu.",
  "instantHint": "Zmień dowolne ustawienie, a kalendarz zaktualizuje się natychmiast.",
  "speciesLegend": "Jakie to zwierzę domowe?",
  "speciesDog": "Pies",
  "speciesCat": "Kot",
  "speciesRabbit": "Królik",
  "speciesFerret": "Fretka",
  "speciesDogMeta": "58 do 72 dni",
  "speciesCatMeta": "64 do 66 dni",
  "speciesRabbitMeta": "Ok. 31 dni",
  "speciesFerretMeta": "Ok. 42 dni",
  "matingDateLabel": "Data krycia",
  "matingDateHint": "Użyj pierwszej znanej daty krycia. To szacunek, a nie doważona data zapłodnienia.",
  "presetToday": "Dzisiaj",
  "presetWeekAgo": "7 dni temu",
  "presetFortnightAgo": "14 dni temu",
  "calculateButton": "Oblicz okres porodu",
  "resultEyebrow": "Kompas ciąży wskazuje",
  "dueDateLabel": "Przewidywany termin porodu",
  "windowLabel": "Oczekiwany przedział",
  "remainingLabel": "Dni do terminu",
  "elapsedLabel": "Dni od krycia",
  "daysLabel": "dni",
  "dayLabel": "dzień",
  "statusFuture": "Ta data jest w przyszłości",
  "statusWaiting": "Ciąża w toku",
  "statusWindow": "Okres porodu rozpoczęty",
  "statusLate": "Przekroczono szacowany termin",
  "resultEmpty": "Wykres ciąży pojawi się tutaj.",
  "sampleLabel": "Przykład",
  "sceneMating": "KRYCIE",
  "sceneToday": "Obecny stan",
  "sceneDue": "OKRES PORODU",
  "noteTitle": "Ważna uwaga zdrowotna",
  "noteText": "Data krycia nie zawsze odpowiada owulacji lub zapłodnieniu. Skonsultuj się z weterynarzem w celu potwierdzenia ciąży i opieki.",
  "sourceTitle": "Metodologia",
  "sourceText": "Psy wykorzystują zakres 58-72 dni, podczas gdy koty, króliki i fretki bazują na Podręczniku Weterynaryjnym MSD.",
  "invalidDate": "Wprowadź prawidłową datę krycia.",
  "futureDate": "Przyszła data krycia nie dotyczy aktywnej ciąży."
};

const faq: PetGestationLocaleContent['faq'] = [
  {
    "question": "Jak dokładny jest kalkulator ciąży zwierząt?",
    "answer": "To wyliczenie szacunkowe służące do planowania opieki. U suk data krycia może różnić się od owulacji, ponieważ plemniki zachowują żywotność przez kilka dni w drogach rodnych. Kalkulator pokazuje przedział czasu zamiast jednej sztywnej daty. Lekarz weterynarii może dokładniej określić termin poprzez badanie USG lub badanie palpacyjne."
  },
  {
    "question": "Ile trwa ciąża u psa?",
    "answer": "Podręcznik Weterynaryjny MSD podaje od 58 do 72 dni od pierwszego krycia, gdy data owulacji nie jest znana. Gdy data owulacji jest znana, okres ten wynosi od 62 do 64 dni. Rasa i liczebność miotu wpływają na przebieg porodu."
  },
  {
    "question": "Ile trwa ciąża u kota?",
    "answer": "Ciąża u kota trwa zazwyczaj około 65 dni (od 64 do 66 dni od piku hormonalnego wywołanego kryciem). Pomaga to właścicielowi przygotować odpowiednie miejsce na porodówkę i przygotować niezbędny sprzęt."
  },
  {
    "question": "Dlaczego uwzględniono króliki i fretki?",
    "answer": "Króliki (ok. 31 dni) i fretki (ok. 42 dni) to popularne zwierzęta domowe o krótkim i dobrze udokumentowanym okresie ciąży. Kalkulator stanowi ułatwienie dla hodowców i opiekunów."
  },
  {
    "question": "Kiedy należy skontaktować się z weterynarzem?",
    "answer": "Skontaktuj się z weterynarzem w przypadku trudnego porodu, krwawienia, nietypowych wypływów lub przenoszenia ciąży poza przewidywany zakres czasu."
  }
];

const howTo: PetGestationLocaleContent['howTo'] = [
  {
    "name": "Wybierz gatunek",
    "text": "Wybierz psa, kota, królika lub fretkę, aby zastosować odpowiedni profil ciąży."
  },
  {
    "name": "Wpisz datę krycia",
    "text": "Wprowadź pierwszą znaną datę krycia samicy."
  },
  {
    "name": "Sprawdź wynik",
    "text": "Odczytaj przewidywany termin, przedział porodu oraz upływające dni."
  },
  {
    "name": "Przygotuj porodówkę",
    "text": "Zaplanuj przygotowania i skonsultuj się z lekarzem weterynarii."
  }
];

const seo: PetGestationLocaleContent['seo'] = [
  {
    "type": "summary",
    "title": "Długość ciąży zwierząt domowych w pigułce",
    "items": [
      "Wpisz datę krycia i wybierz gatunek, aby oszacować termin porodu.",
      "Psy mają szerszy zakres z uwagi na czas między kryciem a owulacją.",
      "Koty, króliki i fretki korzystają z oficjalnych norm Podręcznika MSD.",
      "Narzędzie pomocnicze do planowania, które nie zastępuje badania weterynaryjnego."
    ]
  },
  {
    "type": "title",
    "text": "Jak działa kalkulator ciąży zwierząt",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Kalkulator przelicza datę krycia na przewidywany okres porodu uwzględniając specyfikę biologiczną danego gatunku. Pozwala to na odpowiednie przygotowanie legowiska oraz sprzętu oraz sformułowanie pytań do weterynarza. Ważne informacje dla właścicieli zwierząt i lekarzy weterynarii dotyczące monitorowania zdrowia w czasie ciąży oraz zapewnienia optymalnego przygotowania do porodu dla matki i młodych. Ważne informacje dla właścicieli zwierząt i lekarzy weterynarii dotyczące monitorowania zdrowia w czasie ciąży oraz zapewnienia optymalnego przygotowania do porodu dla matki i młodych. Ważne informacje dla właścicieli zwierząt i lekarzy weterynarii dotyczące monitorowania zdrowia w czasie ciąży oraz zapewnienia optymalnego przygotowania do porodu dla matki i młodych. Ważne informacje dla właścicieli zwierząt i lekarzy weterynarii dotyczące monitorowania zdrowia w czasie ciąży oraz zapewnienia optymalnego przygotowania do porodu dla matki i młodych. Ważne informacje dla właścicieli zwierząt i lekarzy weterynarii dotyczące monitorowania zdrowia w czasie ciąży oraz zapewnienia optymalnego przygotowania do porodu dla matki i młodych."
  },
  {
    "type": "paragraph",
    "html": "Wizualny kompas ułatwia śledzenie upływających dni ciąży i wskazuje aktualny etap rozwoju. W momencie wejścia w Okres porodu użytkownik widzi wyraźny komunikat bez konieczności analizy skomplikowanych tabel."
  },
  {
    "type": "title",
    "text": "Udokumentowane profile ciąży zwierząt",
    "level": 2
  },
  {
    "type": "table",
    "headers": [
      "Gatunek",
      "Typowy okres",
      "Szacunek od krycia"
    ],
    "rows": [
      [
        "Pies",
        "Ok. 63 dni",
        "58 do 72 dni"
      ],
      [
        "Kot",
        "Ok. 65 dni",
        "64 do 66 dni"
      ],
      [
        "Królik",
        "Ok. 31 dni",
        "31 dni"
      ],
      [
        "Fretka",
        "Ok. 42 dni",
        "42 dni"
      ]
    ]
  },
  {
    "type": "paragraph",
    "html": "U suk należy pamiętać, że owulacja i zapłodnienie mogą nastąpić kilka dni po kryciu, stąd szerszy przedział czasowy podawany przez normy weterynaryjne w celach bezpieczeństwa."
  },
  {
    "type": "title",
    "text": "Przygotowanie do nadchodzącego porodu",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Przygotuj ciche i czyste miejsce na porodówkę oraz miej pod ręką numer do całodobowej kliniki weterynaryjnej na wypadek powikłań. Dbałość o spokojne otoczenie zmniejsza stres samicy."
  },
  {
    "type": "tip",
    "title": "Zdrowie zwierzęcia jest najważniejsze",
    "html": "W razie jakichkolwiek wątpliwości lub niepokojących objawów niezwłocznie zasięgnij porady weterynarza."
  }
];

const schemas: PetGestationLocaleContent['schemas'] = [
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

export const content: PetGestationLocaleContent = {
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
