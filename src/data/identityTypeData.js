export const getIdentityTypes = async () => {
    const response = await fetch(`https://teleperformance-back-api.azurewebsites.net/api/IdentityType`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      });
    const dataResponse = await response.json();
    return dataResponse;
  };

  export default {getIdentityTypes}