// exporting like this makes everything work
// export { bar, baz, foo } from './someModule.js'

// exporting like this causes test to error out with:
// TypeError: Cannot redefine property: foo
export * from './someModule'
