import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { PetCollarSizeCalculatorLocaleContent } from '../entry';
import type { PetCollarSizeCalculatorUI } from '../ui';

const slug = 'kalkulator-rozmiaru-obrozy-dla-zwierzat';
const title = 'Kalkulator rozmiaru obroży dla zwierząt';
const description = 'Zmierz szyję, dodaj luz i znajdź regulowany zakres obroży do sprawdzenia na zwierzęciu.';
const ui: PetCollarSizeCalculatorUI = {
  neckCircumferenceLabel: 'Obwód szyi', unitLabel: 'Wyświetlaj', centimetres: 'Centymetry', inches: 'Cale', allowanceLabel: 'Luz', collarTypeLabel: 'Rodzaj obroży', flatCollar: 'Zwykła', breakawayCollar: 'Bezpieczna', martingaleCollar: 'Martingale', statusTight: 'Dodaj więcej luzu', statusBalanced: 'Gotowe do sprawdzenia', statusLoose: 'Sprawdź bezpieczeństwo', statusTightDetail: 'Dodaj więcej luzu.', statusBalancedDetail: 'Sprawdź ten zakres ręcznie.', statusLooseDetail: 'Sprawdź, czy obroża nie zsuwa się.', fitStudyLabel: 'Badanie dopasowania obroży', fitWindowLabel: 'Znajdź ten zakres', measuredLabel: 'Zmierzona szyja', roomLabel: 'Luz', checkLabel: 'Sprawdzenie ręczne', sceneAria: 'Badanie dopasowania z okręgiem szyi i regulowanym zakresem obroży', neckMarker: 'szyja', easeMarker: 'luz', rangeMarker: 'zakres obroży', minimumMarker: 'początek', maximumMarker: 'koniec', checkFlat: 'Wygodna, bezpieczna i bez otarć.', checkBreakaway: 'Sprawdź dopasowanie i mechanizm otwierania.', checkMartingale: 'Pętla zaciskająca nie może uciskać szyi.', invalidInput: 'Wpisz prawidłowy obwód szyi i luz.',
};
const faq: PetCollarSizeCalculatorLocaleContent['faq'] = [
  { question: 'Jak zmierzyć szyję zwierzęcia?', answer: 'Owiń miękką taśmę w miejscu, w którym będzie leżeć obroża. Trzymaj ją prosto i blisko sierści, ale nie ściskaj skóry ani sierści. Powtórz pomiar, jeśli zmieni się położenie obroży, sierść lub postawa zwierzęcia.' },
  { question: 'Dlaczego wynik jest zakresem?', answer: 'Regulowane obroże mają różne zakresy i rozmiary nie są takie same u wszystkich producentów. Kalkulator dodaje wybrany luz i tworzy małe okno do porównania. Później trzeba sprawdzić konkretną obrożę na zwierzęciu.' },
  { question: 'Ile luzu wybrać?', answer: 'Nie ma jednej wartości dla każdego zwierzęcia. Sierść, szerokość, materiał i aktywność zmieniają dopasowanie. Potraktuj liczbę jako widoczne założenie, a komfort i bezpieczeństwo potwierdź spokojnym sprawdzeniem ręcznym.' },
  { question: 'Czy obliczenie pasuje do obroży martingale?', answer: 'Pierwszy szacunek zaczyna się od tego samego obwodu szyi. Końcowa kontrola jest inna: pętla zaciskająca musi być ograniczona i nie może dusić. Stosuj instrukcję producenta, jeśli konstrukcja jest nieznana.' },
  { question: 'Czy mogę użyć wyniku dla szczeniaka?', answer: 'Tak, jako obrazu obecnego dopasowania. Młode zwierzęta rosną i zmienia się ich sierść, dlatego pomiar trzeba regularnie powtarzać i uważnie kontrolować.' },
];
const howTo: PetCollarSizeCalculatorLocaleContent['howTo'] = [
  { name: 'Zmierz szyję', text: 'Zmierz spokojne zwierzę stojące naturalnie, w miejscu ułożenia obroży. Taśma powinna być płaska i nie może ciągnąć.' },
  { name: 'Wybierz luz', text: 'Ustaw odstęp między szyją a obrożą za pomocą widocznego suwaka. Początkowe 2 cm to tylko przykład.' },
  { name: 'Wybierz rodzaj', text: 'Wybierz obrożę zwykłą, bezpieczną lub martingale, aby przypomnienie pasowało do mechanizmu.' },
  { name: 'Porównaj regulację', text: 'Znajdź obrożę, której regulacja obejmuje cały wynik, a następnie wykonaj próbę na zwierzęciu.' },
];
const seo: PetCollarSizeCalculatorLocaleContent['seo'] = [
  { type: 'summary', title: 'Od pomiaru do zakresu zakupowego', items: ['Mierz w miejscu, w którym obroża naprawdę będzie leżeć.', 'Pokaż luz zamiast zgadywać na podstawie rasy.', 'Porównaj wynik z rzeczywistym zakresem regulacji produktu.', 'Zakończ spokojną kontrolą na zwierzęciu.'] },
  { type: 'title', text: 'Jaką decyzję pomaga podjąć kalkulator', level: 2 },
  { type: 'paragraph', html: 'Tabele rozmiarów są niejasne, gdy zwierzę znajduje się między dwoma rozmiarami, ma gęstą sierść albo rośnie. To narzędzie zaczyna od pomiaru, który możesz sprawdzić: obwodu szyi w miejscu ułożenia obroży. Następnie dodajesz wybrany luz. Wynik nie próbuje odgadnąć etykiety handlowej mała, średnia lub duża, tylko tworzy konkretny zakres do porównania z regulacją produktów.' },
  { type: 'paragraph', html: 'Zakres jest celowo krótki i służy jako punkt wyjścia do zakupów. Regulowane obroże nie mają jednej światowej normy, a użyteczna długość może różnić się od nazwy rozmiaru w sklepie. Produkt pasuje do wyboru, gdy jego regulacja obejmuje cały zakres. Sama liczba nie potwierdza jednak, że odpowiednie są krawędź, klamra, sierść lub mechanizm.' },
  { type: 'title', text: 'Jak mierzyć przed zakupem', level: 2 },
  { type: 'list', items: ['Mierz, gdy zwierzę jest spokojne i stoi naturalnie.', 'Trzymaj taśmę poziomo i nie ściskaj sierści ani skóry.', 'Powtórz pomiar, jeśli obroża ma leżeć wyżej lub niżej.', 'U młodego zwierzęcia zapisz datę i kontroluj dopasowanie podczas wzrostu.'] },
  { type: 'paragraph', html: 'Luz jest jawnym założeniem, a nie gwarancją bezpieczeństwa. Właściwa wartość zależy od zwierzęcia, sierści, szerokości, materiału i sposobu użycia. Próba z palcami może być wskazówką, lecz liczba nie staje się przez to regułą dla każdego. Przy otarciach, kaszlu, bólu, trudnościach z oddychaniem, stresie lub ograniczeniu ruchu zdejmij obrożę i skonsultuj się ze specjalistą.' },
  { type: 'title', text: 'Czytaj okrąg dopasowania', level: 2 },
  { type: 'table', headers: ['Sygnał', 'Znaczenie', 'Następny krok'], rows: [['Zmierzona szyja', 'Obwód przed dodaniem luzu.', 'Powtórz pomiar, jeśli taśma była krzywo lub za ciasno.'], ['Początek', 'Szyja plus wybrany luz.', 'Użyj jako dolnej granicy regulacji.'], ['Koniec', 'Małe okno do porównania.', 'Szukaj regulacji obejmującej całe okno.'], ['Kontrola', 'Przypomnienie o wybranym luzie.', 'Potwierdź na zwierzęciu.']] },
  { type: 'title', text: 'Rodzaj obroży zmienia końcową kontrolę', level: 2 },
  { type: 'paragraph', html: 'Zwykła obroża wymaga sprawdzenia wygody i bezpieczeństwa, natomiast model bezpieczny lub martingale dodaje pytanie o mechanizm. Sprawdź krawędź, klamrę, sierść i pętlę zaciskającą. Liczba pomaga odfiltrować produkty, ale ostateczna decyzja zależy od spokojnego zwierzęcia i instrukcji producenta.' },
  { type: 'tip', title: 'Sprawdź spokojnie ręką', html: 'Załóż obrożę, gdy zwierzę jest spokojne. Powinno móc się poruszać, oddychać, jeść, pić i obracać głowę bez otarć. Sprawdź też, czy obroża nie przechodzi przez głowę, gdy ma pozostać na miejscu. Kontroluj ponownie po strzyżeniu, wzroście, zmianie masy lub położenia.' },
];
const schemas: PetCollarSizeCalculatorLocaleContent['schemas'] = [
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'LifestyleApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } } as WithContext<SoftwareApplication>,
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as WithContext<FAQPage>,
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) } as WithContext<HowTo>,
];
export const content: PetCollarSizeCalculatorLocaleContent = { slug, title, description, ui, seo, faq, bibliography, howTo, schemas };
