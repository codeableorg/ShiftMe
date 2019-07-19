const API_REQUESTS_URL = "http://localhost:4000/api/schedule/requests";

async function createError(response) {
  const { errors } = await response.json();
  const error = new Error(errors.message);
  error.status = response.status;
  error.statusText = response.statusText;
  return error;
}

async function requests() {
  const response = await fetch(API_REQUESTS_URL, {
    credentials: "include",
    headers: {
      "Content-Type": "aplication/json"
    }
  });
  if (!response.ok) throw createError(response);
  const result = await response.json();

  return result;
}

export default { requests };
