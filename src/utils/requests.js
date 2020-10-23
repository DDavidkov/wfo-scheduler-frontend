export const getRequest = url => {
  const token = getToken();

  return fetch(url, {
    method: "GET",
    headers: {
      Authorization: token ? token.token : undefined,
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
};

export const postRequest = (url, body) => {
  const token = getToken();

  return fetch(url, {
    method: "POST",
    headers: {
      Authorization: token ? token.token : undefined,
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
};

export const putRequest = (url, body) => {
  const token = getToken();

  return fetch(url, {
    method: "PUT",
    headers: {
      Authorization: token ? token.token : undefined,
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
};

export const deleteRequest = url => {
  const token = getToken();

  return fetch(url, {
    method: "PUT",
    headers: {
      Authorization: token ? token.token : undefined,
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
};

const getToken = () => {
  try {
    const token = JSON.parse(localStorage.getItem("jwtToken"));

    return token;
  } catch {
    return undefined;
  }
};

export const isOkStatus = res => res && Math.floor(res.status / 100) === 2;
