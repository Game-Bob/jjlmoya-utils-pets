import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { PetMedicationSchedulePlannerLocaleContent, PetMedicationSchedulePlannerUI } from '../ui';

type MedicationUIFields = Pick<PetMedicationSchedulePlannerUI, 'dateLocale' | 'medicationNameLabel' | 'medicationNamePlaceholder' | 'startDateLabel' | 'startTimeLabel' | 'scheduleModeLabel' | 'intervalMode' | 'timesMode' | 'intervalHoursLabel' | 'timesLabel' | 'timesHint' | 'durationLabel' | 'durationUnit' | 'instructionsLabel' | 'instructionsPlaceholder' | 'reset' | 'scheduleTitle' | 'nextDoseLabel' | 'noNextDose' | 'completedCount' | 'markDone' | 'markUndone' | 'completed' | 'upcoming' | 'due' | 'emptySchedule' | 'invalidInput' | 'safetyTitle' | 'safetyText' | 'scheduleIllustration'>;

export interface MedicationCopy extends MedicationUIFields {
  slug: string;
  title: string;
  description: string;
  summary: string[];
  seoTitle1: string;
  seoIntro: string;
  seoTitle2: string;
  seoMethod: string;
  seoTitle3: string;
  seoSafety: string;
  tipTitle: string;
  tipText: string;
  methodText: string;
  faq: { question: string; answer: string }[];
  howTo: { name: string; text: string }[];
}

export function createContent(copy: MedicationCopy): PetMedicationSchedulePlannerLocaleContent {
  const ui = copy as unknown as PetMedicationSchedulePlannerUI;
  const faq = copy.faq;
  const howTo = copy.howTo;
  let slug = copy.slug;
  if (['ja-JP', 'ko-KR', 'zh-CN'].includes(copy.dateLocale)) slug = 'pet-medication-schedule-planner';
  const schemas = [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: copy.title, description: copy.description, applicationCategory: 'LifestyleApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } } as WithContext<SoftwareApplication>,
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) } as WithContext<FAQPage>,
    { '@context': 'https://schema.org', '@type': 'HowTo', name: copy.title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) } as WithContext<HowTo>,
  ];
  return {
    slug,
    title: copy.title,
    description: copy.description,
    ui,
    faq,
    howTo,
    bibliography,
    schemas,
    seo: [
      { type: 'summary', title: copy.title, items: copy.summary },
      { type: 'title', text: copy.seoTitle1, level: 2 },
      { type: 'paragraph', html: copy.seoIntro },
      { type: 'title', text: copy.seoTitle2, level: 2 },
      { type: 'paragraph', html: copy.seoMethod },
      { type: 'title', text: copy.seoTitle3, level: 2 },
      { type: 'paragraph', html: copy.seoSafety },
      { type: 'tip', title: copy.tipTitle, html: copy.tipText },
      { type: 'title', text: copy.scheduleTitle, level: 2 },
      { type: 'paragraph', html: [...copy.howTo.map((step) => `${step.name}: ${step.text}`), ...copy.faq.map((item) => `${item.question} ${item.answer}`), copy.methodText, copy.safetyText].join(' ') },
    ],
  };
}
