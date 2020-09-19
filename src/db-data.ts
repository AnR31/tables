


export class LESSONS: any[] = [
  {
    id: 1,
    topic: 'Angular Core Deep Dive',
    date: '14.09.2020',
    homework: 'Сделать расписание как в google',
    note: 'Что может быть проще',
  },
  {
    id: 2,
    date: '15.09.2020',
    topic: 'Angular super core',
    homework: 'Сделать почту как в google',
    note: 'Дайте пару дней',
  },
  {
    id: 3,
    date: '16.09.2020',
    topic: 'Angular mega core',
    homework: 'Сделать поиск как в google',
    note: 'Наверняка все получится',
  },
];

export function findCourseById(lessonId: number) {
  return LESSONS.find((lesson) => lesson.id == lessonId);
}

export const GRADES: any = [
  {
    id: 1,
    name: 'Ivanov',
    mid_grade: 5.5,
    rounded_mid_grade: 5,
    grades: [ {lesson: 1, score: 7}, {lesson: 2, score: 8}, {lesson: 3, score: 9} ],
  },
  {
    id: 2,
    name: 'Petrov',
    mid_grade: 4.5,
    rounded_mid_grade: 4,
    grades: [ {lesson: 1, score: 10}, {lesson: 2, score: 11}, {lesson: 3, score: 12} ],
  },
  {
    id: 3,
    name: 'Sidorov',
    mid_grade: 3.5,
    rounded_mid_grade: 3,
    grades: [ {lesson: 1, score: 13}, {lesson: 2, score: 14}, {lesson: 3, score: 15} ],
  },
];