import data from '../../../../notifications.json';
// import * as notificationData from "../../../../notifications.json";

function getAllNotificationsByUser(userId) {
  const contexts = [];

  for (let i = 0; i < data.length; i++) {
    const { author, context } = data[i];

    if (author.id === userId) contexts.push(context);
  }

  return contexts;
}

export default getAllNotificationsByUser;
