import { foo } from './someModule'

export function sayHello() {
  console.log("We're are ready to go :)")
}

export function testFoo(): string {
  return foo()
}
