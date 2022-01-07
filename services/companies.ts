import config from "@config/index";

export const getCompaniesRequest = async () => {
  const response = await fetch(`${config.API_URL}/companies`);
  const data = await response.json();
  return data;
};
