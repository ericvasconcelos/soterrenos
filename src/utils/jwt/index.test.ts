import { jwtDecode } from 'jwt-decode';

import { checkTokenExpiration, decodeToken } from './index';
import { JwtPayload } from './types';

jest.mock('jwt-decode', () => ({
  jwtDecode: jest.fn(),
}));

const mockJwtDecode = jwtDecode as jest.MockedFunction<typeof jwtDecode>;

describe('JWT Utilities', () => {
  const validToken = 'valid.token.here';
  const expiredToken = 'expired.token.here';
  const invalidToken = 'invalid.token';
  const fixedDate = new Date('2023-01-01T00:00:00Z').getTime();

  const mockValidPayload: JwtPayload = {
    exp: fixedDate / 1000 + 3600, // 1 hora no futuro
    iat: fixedDate / 1000,
    sub: 'user-123',
    role: 'admin',
  };

  const mockExpiredPayload: JwtPayload = {
    exp: fixedDate / 1000 - 3600, // 1 hora no passado
    iat: fixedDate / 1000 - 7200,
    sub: 'user-456',
    role: 'user',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(fixedDate);
  });

  describe('decodeToken', () => {
    it('should decode valid token correctly', () => {
      mockJwtDecode.mockReturnValue(mockValidPayload);

      const result = decodeToken(validToken);

      expect(jwtDecode).toHaveBeenCalledWith(validToken);
      expect(result).toEqual(mockValidPayload);
    });

    it('should throw error for invalid token', () => {
      mockJwtDecode.mockImplementation(() => {
        throw new Error('Invalid token');
      });

      expect(() => decodeToken(invalidToken)).toThrow('Invalid token');
    });
  });

  describe('checkTokenExpiration', () => {
    beforeAll(() => {
      jest.useFakeTimers();
      jest.setSystemTime(new Date('2023-01-01T00:00:00Z').getTime());
    });

    afterAll(() => {
      jest.useRealTimers();
    });

    it('should return true for valid token', () => {
      mockJwtDecode.mockReturnValue(mockValidPayload);

      const result = checkTokenExpiration(validToken);
      expect(result).toBe(true);
    });

    it('should return false for expired token', () => {
      mockJwtDecode.mockReturnValue(mockExpiredPayload);

      const result = checkTokenExpiration(expiredToken);
      expect(result).toBe(false);
    });

    it('should return false for token without expiration', () => {
      mockJwtDecode.mockReturnValue({} as JwtPayload);

      const result = checkTokenExpiration(validToken);
      expect(result).toBe(false);
    });

    it('should handle invalid token gracefully', () => {
      mockJwtDecode.mockImplementation(() => {
        throw new Error('Invalid token');
      });

      const result = checkTokenExpiration(invalidToken);
      expect(result).toBe(false);
    });
  });
});
