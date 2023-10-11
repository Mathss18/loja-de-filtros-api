import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src', '!src/**/*.hbs'],
  splitting: false,
  sourcemap: true,
  clean: true,
})