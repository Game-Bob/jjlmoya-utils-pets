import { describe, expect, it } from 'vitest';
import { generateSchedule, getDateKey, type MedicationScheduleInput } from './logic';

const base: MedicationScheduleInput = {
  medicationName: 'Prescribed medicine', startDate: '2026-09-05', startTime: '22:00', mode: 'interval', intervalHours: 8, dailyTimes: '', durationDays: 2, instructions: '',
};

describe('pet medication schedule logic', () => {
  it('creates interval doses across midnight without changing the local date incorrectly', () => {
    const doses = generateSchedule(base);
    expect(doses.map((dose) => `${getDateKey(dose.date)} ${dose.time}`)).toEqual(['2026-09-05 22:00', '2026-09-06 06:00', '2026-09-06 14:00', '2026-09-06 22:00', '2026-09-07 06:00', '2026-09-07 14:00']);
  });

  it('creates sorted daily-time doses and removes duplicates', () => {
    const doses = generateSchedule({ ...base, startTime: '07:00', mode: 'times', dailyTimes: '20:00, 08:00, 08:00', durationDays: 2 });
    expect(doses.map((dose) => dose.time)).toEqual(['08:00', '20:00', '08:00', '20:00']);
    expect(doses[2]?.dateKey).toBe('2026-09-06');
  });

  it('rejects a schedule without a medication or usable timing', () => {
    expect(() => generateSchedule({ ...base, medicationName: '' })).toThrow('Missing medication name');
    expect(() => generateSchedule({ ...base, mode: 'times', dailyTimes: 'later' })).toThrow('Missing times');
  });
});
