export const isValidToken = (token: string) => {
  try {
    const { exp } = JSON.parse(atob(token.split('.')[1]));
    return Date.now() < exp * 1000;
  } catch {
    return false;
  }
};
