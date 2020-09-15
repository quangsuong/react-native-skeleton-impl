import { assetsUrl } from '../urlHelpers'

describe('assetsUrl', () => {
  const host = 'https://example.com'

  const subject = (path: string) => assetsUrl(path, host)

  it('parse URL without slash correctly', () => {
    const expected = 'https://example.com/public/image.png'
    expect(subject('public/image.png')).toEqual(expected)
  })

  it('parse URL with slash correctly', () => {
    const expected = 'https://example.com/public/image.png'
    expect(subject('/public/image.png')).toEqual(expected)
  })
})
