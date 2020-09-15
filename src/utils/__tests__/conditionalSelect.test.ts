import { conditionalSelect } from '..'

it('returns items with fulfilled condition', () => {
  const items = [
    { condition: false, item: '1' },
    { condition: true, item: '2' },
    { condition: false, item: '2' },
    { condition: true, item: '4' },
  ]
  const expected = ['2', '4']

  expect(conditionalSelect(...items)).toEqual(expected)
})
