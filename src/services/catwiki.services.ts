const API_URL = import.meta.env.VITE_API_URL;

export const getTopSearchedBreeds = async (quantity: number) => {
  try {
    const res = await fetch(API_URL + "/breeds/top?quantity=" + quantity); 
    return await res.json();
  } catch (error) {
    return [];
  }
};

export const getBreedSuggestions = async () => {
  try {
    const res = await fetch(API_URL + "/breeds");
    return await res.json();
  } catch (error) {
    return [];
  }
};

export const getBreedByName = async (name: string) => {
  try {
    const res = await fetch(API_URL + "/breeds/search?name=" + name);
    return await res.json();
  } catch (error) {
    return [];
  }
};

export const getImagesByBreed = async(breed: string) => {
  try {
    const res = await fetch(API_URL + "/breeds/images?breed="+breed)
    return await res.json()
  } catch (error) {
    return []
  }
}