import data from '../../../../notifications.json';
import { normalize, schema } from 'normalizr';
// import * as data from "../../../../notifications.json";

// Create use entity
const user = new schema.Entity('users');

// Create message entity
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

// Create notification entity
const notification = new schema.Entity('notification', {
  author: user,
  context: message,
});

export const normalizedData = normalize(data, [notification]);

function getAllNotificationsByUser(userId) {
  const contexts = [];

  for (let i = 0; i < data.length; i++) {
    const { author, context } = data[i];

    if (author.id === userId) contexts.push(context);
  }

  return contexts;
}

export default getAllNotificationsByUser;
