const httpGET = async (endpoint) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: AUTH,
    },
  });
  const data = await response.json();
  return data;
};

const BASE_URL = "https://api.themoviedb.org/3/";
const AUTH =
  " Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDgzZTFiN2NhOTUyZGIxZTZlM2Y0MzRmNWY4Yjc3YSIsInN1YiI6IjY1Njc0OTE1ZDk1NDIwMDBjNDFmY2VlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hZEKn8CuRHWcAfDNzIIOwJO-_mwQoeAh8izQ6bhUAk4";

export { httpGET };
