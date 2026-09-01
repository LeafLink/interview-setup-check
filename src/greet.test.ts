import { expect, test } from 'vitest';
import { greet } from './greet';

test('greets the world', () => {
  expect(greet('World')).toBe('Hello, World!');
});
