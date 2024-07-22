const baseUrl = "https://schedulertaskserver.netlify.app";

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

export const getBorderColor = (procedure) => {
  let value = "";
  switch (procedure.toLocaleLowerCase()) {
    case "bleaching":
      value = "purple";
      break;
    case "wisdom teeth removal":
      value = "green";
      break;
    case "construction":
      value = "orange";
      break;
    case "root canal":
      value = "blue";
      break;
    case "scaling":
      value = "red";
      break;
    default:
      value = "default";
      break;
  }
  return value;
};
