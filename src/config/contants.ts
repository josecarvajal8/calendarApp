import {IEvent} from '../models/events';

export enum fonts {
  thin = 'Montserrat-Thin',
  light = 'Montserrat-Light',
  regular = 'Montserrat-Regular',
  semibold = 'Montserrat-Semibold',
  bold = 'Montserrat-Bold',
}

export const LABEL_MONTHS: Record<number, string> = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
};

export const EVENTS_KEY = 'events';

export const mockEvents: IEvent[] = [
  {
    id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    date: new Date('2024-08-14T00:00:00.000Z'),
    time: ['10:30', '11:00'],
    title: 'Project Kickoff',
    description: 'Initial meeting to kick off the new project.',
  },
  {
    id: 'd3e6a1de-6e16-4e36-9e29-5bbaebc86fbb',
    date: new Date('2024-08-15T00:00:00.000Z'),
    time: ['15:45', '16:00'],
    title: 'Client Presentation',
    description: 'Presentation for the client to review the progress.',
  },
  {
    id: '9c6d2e28-8d7a-4b9b-8c9c-f8fcbabde084',
    date: new Date('2024-08-16T00:00:00.000Z'),
    time: ['20:00', '21:30'],
    title: 'New architecture',
    description: 'Debate about new arch..',
  },
  {
    id: 'b650efeb-d7d2-4e3a-9f5b-b7504d7506e5',
    date: new Date('2024-08-17T00:00:00.000Z'),
    time: ['12:00', '14:30'],
    title: 'Design Review',
    description: 'Review of the design with the stakeholders.',
  },
  {
    id: 'a91a7b71-3a6d-4e8d-8eb7-2c44664d8b3b',
    date: new Date('2024-08-18T00:00:00.000Z'),
    time: ['16:00', '17:00'],
    title: 'End of Sprint',
    description: 'Review of the sprint and planning for the next one.',
  },
];
