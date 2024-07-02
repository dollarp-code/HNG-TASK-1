function updateTime() {
  const now = new Date();
  const nigeriaTime = new Date(now.getTime() + 1 * 60 * 60 * 1000);

  const utcTimeString = nigeriaTime.toUTCString().split(' ')[4];
  const dayOfWeek = nigeriaTime.toUTCString().split(',')[0];

  document.getElementById('utc-time').textContent = utcTimeString;
  document.getElementById('current-day').textContent = dayOfWeek;
}

setInterval(updateTime, 1000);
updateTime();
