import { jwtDecode } from 'jwt-decode';

type JwtPayload = {
  exp: number;
  iat: number;
  sub: string;
  role: string;
};

export const decodeToken = (token: string): JwtPayload => {
  try {
    return jwtDecode<JwtPayload>(token);
  } catch {
    throw new Error('Invalid token');
  }
};

export const checkTokenExpiration = (token: string): boolean => {
  const { exp } = decodeToken(token);
  return Date.now() < exp * 1000;
};
