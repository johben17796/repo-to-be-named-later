// import { ApiMessage } from "../interfaces/ApiMessage";
import { RawgData } from "../interfaces/RawgData";

const retrieveGames = async () => {
    try {
      const response = await fetch('/api/RAWG/', {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
  
      if(!response.ok) {
        throw new Error('invalid RAWG API response, check network tab!');
      }
  
      return data;
    } catch (err) {
      console.log('Error from data retrieval:', err);
      return [];
    }  
  };
  
  const retrieveGamesByName = async (slug: string | null): Promise<RawgData> => {
    try {
      const response = await fetch(`/api/RAWG/gamesByName/${slug}`, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const data = await response.json();
      if(!response.ok) {
        throw new Error('invalid RAWG API response, check network tab!');
      }
  
      return data;
    } catch (err) {
      console.log('Error from data retrieval:', err);
      return Promise.reject('No matches for that search criteria');
    }
  };

export { retrieveGames, retrieveGamesByName };