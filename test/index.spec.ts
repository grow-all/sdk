import { sum } from '../src'

it('sum', () => {
  const total = sum(1, 1)
  expect(total).toBe(2)
})