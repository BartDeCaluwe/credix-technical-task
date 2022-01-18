import { useClamp } from '../hooks/useClamp'

describe('useClamp', () => {
  it('clamps values less than min to min', () => {
    const value = -200
    const min = 0
    const max = 100
    const clamped = useClamp(value, min, max)

    expect(clamped).toEqual(0)
  })

  it('clamps values more than max to max', () => {
    const value = 200
    const min = 0
    const max = 100
    const clamped = useClamp(value, min, max)

    expect(clamped).toEqual(max)
  })

  it('returns values between min and max', () => {
    const value = 50
    const min = 0
    const max = 100
    const clamped = useClamp(value, min, max)

    expect(clamped).toEqual(value)
  })
})
