import { testFoo } from './index'
import * as someModule from './someModule'

jest.spyOn(someModule, 'foo').mockImplementation(() => 'mockedFoo')

describe('Unit testing', () => {
  it('should return `foo`', () => {
    expect(testFoo()).toBe('mockedFoo')
  })
})
