const API_NOTIFICATIONS_URL = "http://localhost:4000/api/notifications";

async function createError(response) {
  const { errors } = await response.json();
  const error = new Error(errors.message);
  error.status = response.status;
  error.statusText = response.statusText;
  return error;
}

async function notifications() {
  const response = await fetch(API_NOTIFICATIONS_URL, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) throw createError(response);
  const result = await response.json();

  return result;
}

async function updatedNotifications() {
  const response = await fetch(API_NOTIFICATIONS_URL, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) throw createError(response);
}

export { notifications, updatedNotifications };
