export const getAllCountries = async () => {
  try {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getSearchedCountries = async (query) => {
  try {
    const res = await fetch(`https://restcountries.eu/rest/v2/name/${query}`);
    const data = res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
