export const getPerson = async (indentity_number) => {
    const response = await fetch(`https://teleperformance-back-api.azurewebsites.net/api/Person?identity_number=${indentity_number}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      });
    const dataResponse = await response.json();
    return dataResponse;
  };

  export default {getPerson}