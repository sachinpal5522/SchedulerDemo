const baseUrl = "http://localhost:3000";

export const customFetch = async (url) => {
  let response = await fetch(`${baseUrl}${url}`);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  return response.json();
};

export const customPut = async (url, data) => {
  let response = await fetch(`${baseUrl}${url}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  return response.json();
};

export const customPatch = async (url, data) => {
  let response = await fetch(`${baseUrl}${url}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  return response.json();
};

export const customDelete = async (url, data) => {
  let response = await fetch(`${baseUrl}${url}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  return response.json();
};
