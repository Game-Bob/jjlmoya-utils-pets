import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetToxicityLocaleContent, PetToxicityUI } from '../entry';

const slug = 'sprawdzian-toksycznej-zywnosci-psy-koty';
const title = 'Tester toksycznej żywności dla psów i kotów';
const description = 'Sprawdź niebezpieczne produkty dla psów i kotów, poznaj objawy ostrzegawcze i dowiedz się, kiedy skontaktować się z weterynarzem.';

const ui: PetToxicityUI = {
  "journeyHint": "Wybierz zwierzę, otwórz atlas żywności i przeczytaj ostrzeżenie dla danego gatunku przed podjęciem decyzji.",
  "speciesLabel": "Gatunek",
  "speciesDog": "Pies",
  "speciesCat": "Kot",
  "speciesDogMeta": "Profil psa",
  "speciesCatMeta": "Profil kota",
  "foodLabel": "Żywność lub składnik",
  "foodPlaceholder": "Wybierz produkt",
  "foodMenuHint": "Lista zmienia się w zależności od zwierzęcia, ponieważ ryzyko jest specyficzne.",
  "resultEyebrow": "Atlas żywności wskazuje",
  "resultEmpty": "Wybierz produkt, aby otworzyć kartę bezpieczeństwa.",
  "sceneLabel": "Mapa ekspozycji",
  "sceneReady": "Wybierz produkt",
  "sceneSelected": "Karta gatunkowa otwarta",
  "riskCritical": "Pilna uwaga",
  "riskHigh": "Wysokie ryzyko",
  "riskCaution": "Ostrożność",
  "riskUnknown": "Brak wystarczających danych",
  "riskLabel": "Poziom ryzyka",
  "whyLabel": "Dlaczego to ważne",
  "signsLabel": "Objawy do obserwacji",
  "actionLabel": "Co należy zrobić",
  "callVetLabel": "Najbezpieczniejszym krokiem jest porada weterynaryjna.",
  "callVetText": "Kalkulator nie zastąpi badania ani nie obliczy bezpiecznej dawki.",
  "sourceLabel": "Użyte dowody",
  "sourceText": "Profile opierają się na wytycznych toksykologicznych ASPCA, FDA oraz MSD Veterinary Manual.",
  "emergencyTitle": "Jeśli zwierzę zjadło coś niepokojącego",
  "emergencyText": "Zadzwoń natychmiast do weterynarza lub kliniki całodobowej. Zachowaj opakowanie, skład i szacowaną ilość.",
  "openMenu": "Otwórz opcje",
  "closeMenu": "Zamknij opcje"
};

const faq: PetToxicityLocaleContent['faq'] = [
  {
    "question": "Czy ten tester gwarantuje bezpieczeństwo mojego pupila?",
    "answer": "Nie. To przewodnik edukacyjny, a nie diagnoza. W przypadku spożycia niebezpiecznego produktu skontaktuj się z weterynarzem."
  },
  {
    "question": "Jakie produkty są szczególnie niebezpieczne dla psów?",
    "answer": "Ksylitol, czekolada, kofeina, winogrona, rodzynki, cebula, czosnek, alkohol i surowe ciasto drożdżowe."
  },
  {
    "question": "Czy cebula i czosnek są niebezpieczne dla kotów?",
    "answer": "Tak. Koty są wyjątkowo wrażliwe na uszkodzenia krwinek czerwonych wywołane przez rośliny Allium (cebula, czosnek, szczypiorek)."
  },
  {
    "question": "Dlaczego ksylitol ma inne ostrzeżenie dla psów i kotów?",
    "answer": "Ksylitol powoduje u psów gwałtowny i niebezpieczny spadek poziomu cukru we krwi. U kotów zagrożenie to jest mniej udokumentowane."
  },
  {
    "question": "Co zrobić, jeśli zjedzony produkt nie znajduje się na liście?",
    "answer": "Brak na liście nie oznacza bezpieczeństwa. Zachowaj opakowanie i skonsultuj się z lekarzem weterynarii."
  },
];


const howTo: PetToxicityLocaleContent['howTo'] = [
  {
    "name": "Wybierz gatunek",
    "text": "Wybierz Psa lub Kota, aby załadować odpowiednie dane."
  },
  {
    "name": "Wybierz produkt",
    "text": "Otwórz menu i wybierz najbardziej pasujący składnik."
  },
  {
    "name": "Przeczytaj kartę bezpieczeństwa",
    "text": "Sprawdź poziom ryzyka, objawy oraz zalecane postępowanie."
  },
  {
    "name": "Skontaktuj się ze specjalistą",
    "text": "W przypadku realnego spożycia zadzwoń do lekarza weterynarii."
  }
];

const seo: PetToxicityLocaleContent['seo'] = [
  {
    type: 'summary',
    title: "Szybki sprawdzian bezpieczeństwa żywności dla psów i kotów",
    items: [
      "Wybierz najpierw gatunek, ponieważ ten sam składnik inaczej wpływa na psa i kota.",
      "Użyj kart produktów, aby zrozumieć zagrożenie i poziom pilności.",
      "Spożycie ksylitolu przez psa traktuj jako stan nagły.",
      "Skonsultuj się z weterynarzem w przypadku każdego realnego incydentu."
],
  },
  {
    type: 'title',
    text: "Jak odpowiedzialnie korzystać z mego testera toksycznej żywności",
    level: 2,
  },
  {
    type: 'paragraph',
    html: "Ten tester toksycznej żywności powstał z myślą o pierwszych chwilach po zjedzeniu przez psa lub kota czegoś niedozwolonego. Wybierz zwierzę i otwórz profil produktu, aby przygotować się do rozmowy z lekarzem. Ułatwia to opanowanie stresu i sprawne przekazanie faktów w trakcie rozmowy z lecznicą. Prezentowane informacje obejmują poziom zagrożenia, objawy oraz zalecenia dotyczące pierwszej pomocy. W przypadku wątpliwości zawsze należy zasięgnąć profesjonalnej opinii weterynaryjnej.",
  },
  {
    type: 'paragraph',
    html: "Gatunek zwierzęcia ma kluczowe znaczenie. Psy i koty inaczej metabolizują substancje. Ksylitol wywołuje u psów gwałtowny wyrzut insuliny i groźną hipoglikemię, z kolei cebula i czosnek niszczą krwinki czerwone u kotów, prowadząc do anemii hemolitycznej. Właściwa weryfikacja chroni pupila przed błędnym postępowaniem domowym. W przypadku wątpliwości zawsze należy zasięgnąć profesjonalnej opinii weterynaryjnej.",
  },
  {
    type: 'title',
    text: "Główne zagrożenia żywieniowe i kluczowe szczegóły",
    level: 2,
  },
  {
    type: 'table',
    headers: ["Żywność lub składnik","Główne zagrożenie","Ważny kontekst"],
    rows: [["Czekolada i kofeina","Wpływ na serce i układ nerwowy","Zawartość kakao i masa ciała mają znaczenie."],["Ksylitol","Gwałtowny spadek cukru u psów","Sprawdź gumy bez cukru i ciastka."],["Winogrona i rodzynki","Ryzyko uszkodzenia nerek u psów","Nie uznawaj małych ilości za bezpieczne."],["Cebula i czosnek","Uszkodzenie krwinek czerwonych","Postacie suszone i w proszku potęgują ryzyko."],["Surowe ciasto drożdżowe","Pęcznienie żołądka i alkohol","Rosnące ciasto wywołuje nacisk i fermentację."]],
  },
  {
    type: 'paragraph',
    html: "Oprócz toksyczności chemicznej istnieją zagrożenia fizyczne, takie jak zadławienia kośćmi czy ryzyko zapalenia trzustki po tłustym jedzeniu. Gotowane kości mogą pękać i ranić przewód pokarmowy, a tłuste potrawy wywołują bolesny stan zapalny trzustki. Przeanalizowanie sytuacji ułatwia decyzję o natychmiastowym wyjeździe do kliniki weterynaryjnej. W przypadku wątpliwości zawsze należy zasięgnąć profesjonalnej opinii weterynaryjnej.",
  },
  {
    type: 'title',
    text: "Postępowanie po możliwym spożyciu",
    level: 2,
  },
  {
    type: 'list',
    items: [
      "Usuń resztki jedzenia i zachowaj opakowanie.",
      "Zapisz wagę zwierzęcia, produkt, ilość i czas spożycia.",
      "Zadzwoń do weterynarza lub do centrum toksykologicznego.",
      "Nie wywołuj wymiotów bez wskazania lekarza.",
      "W przypadku drgawek lub utraty przytomności natychmiast jedź do kliniki."
],
  },
  {
    type: 'tip',
    title: "Zdrowie zwierzęcia jest najważniejsze",
    html: "Objawy mogą pojawić się po czasie. Nie czekaj na pogorszenie stanu zdrowia. W przypadku wątpliwości zawsze należy zasięgnąć profesjonalnej opinii weterynaryjnej.",
  },
];

const schemas: PetToxicityLocaleContent['schemas'] = [
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

export const content: PetToxicityLocaleContent = {
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
