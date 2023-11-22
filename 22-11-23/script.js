//// ----> Exercise N.1 <---- //// ----------------------------------------------------

////// Static and not reusable function because the link is provided within the function //////
// const fetchData = async () => {
//   const response = await fetch("https://picsum.photos/v2/list");
//   const data = await response.json();
//   const urlList = data.map((image) => console.log(image.download_url))

//   return urlList;
// };

// fetchData();

//// Dynamic and reusable function because the link is provided when calling back (line 25) the function //////
const fetchDataExercise1 = async (base_url) => {
  const response = await fetch(base_url);
  const data = await response.json();
  const imgUrlList = data.map((image) =>
    console.log(image.download_url)
  );
  return imgUrlList;
};

fetchDataExercise1("https://picsum.photos/v2/list");

//// ---->  END Exercise N.1 <---- //// -------------------------------------------------

//// ----> Exercise N.2 <---- //// ----------------------------------------------------

// let singleImage = {
//   id: "0",
//   author: "Alejandro Escamilla",
//   download_url: "https://picsum.photos/id/0/5000/3333",
// };

// const imgGenerator = (imgUrl, imageId, author) => {
//   const wrapperEl = document.createElement("div");
//   const imgEl = document.createElement("img");
//   const imgTitleEl = document.createElement("h2");

//   wrapperEl.className = "wrapper";
//   imgEl.className = "imgStyle";
//   imgEl.src = imgUrl;
//   imgEl.alt = imageId;
//   imgTitleEl.className = "authorName";
//   imgTitleEl.textContent = "Pic by: " + author;

//   wrapperEl.append(imgEl, imgTitleEl);

//   return wrapperEl;
// };

// document.body.append(
//   imgGenerator(
//     singleImage.download_url,
//     singleImage.id,
//     singleImage.author
//   )
// );

//// ----> END Exercise N.2 <---- //// ----------------------------------------------------

//// ----> Exercise N.3 <---- //// ----------------------------------------------------

const fetchDataExercise3 = async (base_url) => {
  const response = await fetch(base_url);
  const data = await response.json();
  return data;
};

const imgGenerator = (imgUrl, imageId, author) => {
  const wrapperEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const imgTitleEl = document.createElement("h2");

  wrapperEl.className = "wrapper";
  imgEl.className = "imgStyle";
  imgEl.src = imgUrl;
  imgEl.alt = imageId;
  imgTitleEl.className = "authorName";
  imgTitleEl.textContent = "Pic by: " + author;

  wrapperEl.append(imgEl, imgTitleEl);

  return wrapperEl;
};

fetchDataExercise3("https://picsum.photos/v2/list").then((data) => {
  data.map((element) => {
    document.body.append(
      imgGenerator(element.download_url, element.id, element.author)
    );
  });
});

//// ----> END Exercise N.3 <---- //// ----------------------------------------------------
