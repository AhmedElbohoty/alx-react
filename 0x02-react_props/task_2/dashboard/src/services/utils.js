export function getFullYear() {
  return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
  return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}

export function getLatestNotification() {
  return '<strong>Urgent Requirement</strong> - complete by EOD';
}
