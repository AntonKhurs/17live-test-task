import User from "../models/user";

const apiUrl = 'https://webcdn.17app.co/campaign/pretest/data.json';

export async function getUsersData(): Promise<User[]> {
  const api = apiUrl;
  const response = await fetch(api);
  return response.json();
}