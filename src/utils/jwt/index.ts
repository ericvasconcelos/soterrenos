import { jwtDecode, JwtPayload } from 'jwt-decode';

export const decodeToken = (token: string): JwtPayload => {
  try {
    return jwtDecode<JwtPayload>(token);
  } catch {
    throw new Error('Invalid token');
  }
};

export const checkTokenExpiration = (token: string): boolean => {
  try {
    const { exp } = decodeToken(token);
    return exp ? Date.now() < exp * 1000 : false;
  } catch {
    return false;
  }
};
