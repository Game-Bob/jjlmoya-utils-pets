export type ScheduleMode = 'interval' | 'times';

export interface MedicationScheduleInput {
  medicationName: string;
  startDate: string;
  startTime: string;
  mode: ScheduleMode;
  intervalHours: number;
  dailyTimes: string;
  durationDays: number;
  instructions: string;
}

export interface ScheduledDose {
  id: string;
  date: Date;
  dateKey: string;
  time: string;
}

export function getDateKey(date: Date): string {
  return [date.getFullYear(), String(date.getMonth() + 1).padStart(2, '0'), String(date.getDate()).padStart(2, '0')].join('-');
}

function parseClock(value: string): number | null {
  const match = /^(\d{1,2}):(\d{2})$/.exec(value.trim());
  if (!match) return null;
  const hours = Number(match[1]);
  const minutes = Number(match[2]);
  return hours <= 23 && minutes <= 59 ? hours * 60 + minutes : null;
}

function parseStart(input: MedicationScheduleInput): Date {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(input.startDate)) throw new Error('Invalid date');
  const minutes = parseClock(input.startTime);
  if (minutes === null) throw new Error('Invalid time');
  const parts = input.startDate.split('-').map(Number);
  const year = parts[0] ?? 0;
  const month = parts[1] ?? 0;
  const day = parts[2] ?? 0;
  const date = new Date(year, month - 1, day, Math.floor(minutes / 60), minutes % 60, 0, 0);
  if (Number.isNaN(date.getTime()) || getDateKey(date) !== input.startDate) throw new Error('Invalid date');
  return date;
}

function formatClock(minutes: number): string {
  return `${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`;
}

function createDose(date: Date): ScheduledDose {
  const copy = new Date(date);
  const time = formatClock(copy.getHours() * 60 + copy.getMinutes());
  return { id: `${getDateKey(copy)}T${time}`, date: copy, dateKey: getDateKey(copy), time };
}

function readDailyTimes(value: string): number[] {
  const values = value.split(/[,\s]+/).map((part) => parseClock(part)).filter((part): part is number => part !== null);
  return [...new Set(values)].sort((left, right) => left - right);
}

export function validateScheduleInput(input: MedicationScheduleInput): void {
  if (!input.medicationName.trim()) throw new Error('Missing medication name');
  parseStart(input);
  validateDuration(input.durationDays);
  validateTiming(input);
}

function validateDuration(durationDays: number): void {
  if (!Number.isInteger(durationDays) || durationDays < 1 || durationDays > 30) throw new Error('Invalid duration');
}

function validateTiming(input: MedicationScheduleInput): void {
  if (input.mode === 'interval') {
    if (!Number.isFinite(input.intervalHours) || input.intervalHours < 1 || input.intervalHours > 24) throw new Error('Invalid interval');
    return;
  }
  if (readDailyTimes(input.dailyTimes).length === 0) throw new Error('Missing times');
}

function generateDailySchedule(input: MedicationScheduleInput, start: Date, end: Date): ScheduledDose[] {
  const doses: ScheduledDose[] = [];
  const times = readDailyTimes(input.dailyTimes);
  for (let day = 0; day < input.durationDays; day += 1) {
    for (const minutes of times) {
      const dose = new Date(start);
      dose.setDate(start.getDate() + day);
      dose.setHours(Math.floor(minutes / 60), minutes % 60, 0, 0);
      if (dose >= start && dose < end) doses.push(createDose(dose));
    }
  }
  return doses;
}

export function generateSchedule(input: MedicationScheduleInput): ScheduledDose[] {
  validateScheduleInput(input);
  const start = parseStart(input);
  const end = new Date(start);
  end.setDate(end.getDate() + input.durationDays);
  const doses: ScheduledDose[] = [];

  if (input.mode === 'interval') {
    const cursor = new Date(start);
    while (cursor < end && doses.length < 200) {
      doses.push(createDose(cursor));
      cursor.setTime(cursor.getTime() + input.intervalHours * 60 * 60 * 1000);
    }
  } else doses.push(...generateDailySchedule(input, start, end));

  return doses.sort((left, right) => left.date.getTime() - right.date.getTime());
}

export function formatTime(date: Date, locale: string): string {
  return new Intl.DateTimeFormat(locale, { hour: 'numeric', minute: '2-digit' }).format(date);
}

export function formatDay(date: Date, locale: string): string {
  return new Intl.DateTimeFormat(locale, { weekday: 'long', month: 'short', day: 'numeric' }).format(date);
}
