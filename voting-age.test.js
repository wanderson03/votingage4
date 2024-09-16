// DO NOT CHANGE ANYTHING IN THIS FILE.
// IF YOU CHANGE THE TEST, YOU WILL RECEIVE 0 FOR THIS ASSIGNMENT.

const prompCreator = require('prompt-sync');

jest.mock(
  'prompt-sync',
  () => {
    const mPrompt = jest.fn();
    return jest.fn(() => mPrompt);
  },
  { virtual: true }
);

describe('Test voting ages', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });
  afterAll(() => {
    jest.resetAllMocks();
  });
  test('should return true when age is 18', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce(18);

    jest.isolateModules(() => {
      const { result } = require('./voting-age');
      expect(result).toBe(true);
    });
  });

  test('should return true when age is 19', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce(19);

    jest.isolateModules(() => {
      const { result } = require('./voting-age');
      expect(result).toBe(true);
    });
  });

  test('should return false when age is 17', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce(17);

    jest.isolateModules(() => {
      const { result } = require('./voting-age');
      expect(result).toBe(false);
    });
  });

  test('should return false when age is 0', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce(0);

    jest.isolateModules(() => {
      const { result } = require('./voting-age');
      expect(result).toBe(false);
    });
  });

  test('should return true when age is 21', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce(21);

    jest.isolateModules(() => {
      const { result } = require('./voting-age');
      expect(result).toBe(true);
    });
  });

  test('should return false when age is 16', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce(16);

    jest.isolateModules(() => {
      const { result } = require('./voting-age');
      expect(result).toBe(false);
    });
  });
});
