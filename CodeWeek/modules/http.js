const httpGET = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const data = await response.json();

  const addElement = data.map((item, index) => {
    return {
      ...item,
      active: index % 2 === 0,
    };
  });

  return addElement;
};

export { httpGET };
