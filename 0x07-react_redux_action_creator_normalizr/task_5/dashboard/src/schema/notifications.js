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
  const result = [];
  const notifsIds = normalizedData.entities.notification;
  const messages = normalizedData.entities.messages;

  for (const id in notifsIds) {
    if (notifsIds[id].author === userId) {
      result.push(messages[notifsIds[id].context]);
    }
  }

  return result;
}

export default getAllNotificationsByUser;
