export const LESSONS: any = [
  {
    id: 1,
    date: '14.09.2020',
    topic: 'Angular Core Deep Dive',
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
    name: 'Ivanov',
    mid_grade: 5.5,
    rounded_mid_grade: 5,
    grades: [7,8,9],
  },
  {
    name: 'Petrov',
    mid_grade: 4.5,
    rounded_mid_grade: 4,
    grades: [11,12,13],
  },
  {
    name: 'Sidorov',
    mid_grade: 3.5,
    rounded_mid_grade: 3,
    grades: [14,15,16],
  },
];