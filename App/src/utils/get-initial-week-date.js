function getInitialWeekDate(now = new Date()) {
  const day = now.getDay();
  if (day === 0) return now;
  now.setDate(now.getDate() - day);
  return now;
}

export default getInitialWeekDate