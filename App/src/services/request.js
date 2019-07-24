const API_REQUESTS_URL = "http://localhost:4000/api/schedule/requests";

async function createError(response) {
  const { errors } = await response.json();
  const error = new Error(errors.message);
  error.status = response.status;
  error.statusText = response.statusText;
  return error;
}

async function requestsFetch() {
  const response = await fetch(API_REQUESTS_URL, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) throw createError(response);
  const result = await response.json();

  return result;
}

async function updateRequest(id, status) {
  const response = await fetch(`${API_REQUESTS_URL}/${id}`, {
    method: "PATCH",
    credentials: "include",
    body: JSON.stringify({ status }),
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) throw createError(response);
  return await response.json();
}

async function cancelRequest(id) {
  const response = await fetch(`${API_REQUESTS_URL}/${id}`, {
    method: "DELETE",
    credentials: "include",
  });
  if (!response.ok) throw createError(response);
}

async function createRequest(requests) {
  const response = await fetch(API_REQUESTS_URL, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({requests}),
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) throw createError(response);
  const result = await response.json();
  return result;
}

export { requestsFetch, createRequest, updateRequest, cancelRequest };
