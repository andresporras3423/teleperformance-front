export const getPerson = async (indentity_number) => {
  const response = await fetch(`https://teleperformance-back-api.azurewebsites.net/api/Person?identity_number=${indentity_number}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const dataResponse = await response.json();
  return dataResponse;
};

export const updatePerson = async (person_id, identity_type_id, 
    identity_number, company_name, 
    first_name, second_name, first_last_name, 
    second_last_name, email, 
    allow_email_message, allow_phone_message) => {
  const response = await fetch('https://teleperformance-back-api.azurewebsites.net/api/Person', {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      person_id, identity_type_id, identity_number, company_name, first_name, second_name, first_last_name, second_last_name, email, allow_email_message, allow_phone_message, allow_phone_message
    }),
  });
  const dataResponse = await response.json();
  return dataResponse;
};

export default { getPerson, updatePerson };
