## Repro for jest_workaround Unnamed Re-Export Bug

```bash
yarn
yarn test
```

Output:

```
 FAIL  src/index.spec.ts
  ● Test suite failed to run

    TypeError: Cannot redefine property: foo
        at Function.defineProperty (<anonymous>)

      2 | import * as someModule from './someModule'
      3 |
    > 4 | jest.spyOn(someModule, 'foo').mockImplementation(() => 'mockedFoo')
        |      ^
      5 |
      6 | describe('Unit testing', () => {
      7 |   it('should return `foo`', () => {

      at ModuleMocker.spyOn (node_modules/jest-mock/build/index.js:774:16)
      at Object.spyOn (src/index.spec.ts:4:6)
```

The re-export in question in is in: [src/someModules/index.ts](https://github.com/wadjoh/swc-jest-workaround-bug/blob/main/src/someModule/index.ts#L6)
