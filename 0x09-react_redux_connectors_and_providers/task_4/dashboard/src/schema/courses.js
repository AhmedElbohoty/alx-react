import { schema, normalize } from 'normalizr';

const courseSchema = new schema.Entity('courses');

export function coursesNormalizer(data) {
  return normalize(data, [courseSchema]);
}
