
# Vue.js Project with Unit Testing

## Project Overview

This project is a Vue.js application that demonstrates the implementation of unit tests using [Vue Test Utils](https://vue-test-utils.vuejs.org/) and [Jest](https://jestjs.io/).

## Requirements

- [Node.js](https://nodejs.org/) (>= 12.x)
- [Vue CLI](https://cli.vuejs.org/)
- [Jest](https://jestjs.io/) for unit testing
- [Vue Test Utils](https://vue-test-utils.vuejs.org/) for Vue component testing

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/chafyaay/vue-test/edit/feat/implement-pokemon-app
cd vue-pokemon-app
```

### 2. Install dependencies

```bash
npm install
```

This will install all required dependencies, including Vue.js and Jest for unit testing.

## Development

To run the development server:

```bash
npm run dev
```

This will start the development server, and you can access your application at `http://localhost:5173/`.

## Unit Testing

### 1. Running tests

To run the unit tests, use the following command:

```bash
npm run test:unit
```

This command will run all tests using Jest and display the results in your terminal.

### 2. Writing tests

Tests are located in the `tests/unit` folder. You can create new test files with a `.spec.js` extension. A basic unit test for a Vue component might look like this:

```js
import { shallowMount } from '@vue/test-utils'
import MyComponent from '@/components/MyComponent.vue'

describe('MyComponent.vue', () => {
  it('renders the correct message', () => {
    const wrapper = shallowMount(MyComponent)
    expect(wrapper.text()).toMatch('Hello, Vue!')
  })
})
```

### 3. Test Coverage

To check the test coverage, you can run the following command:

```bash
npm run test:coverage
```

This will generate a test coverage report and display it in the terminal or create an HTML report in the `coverage` folder.

## Linting and Formatting

To ensure code quality, this project uses [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/).

### 1. Running the linter

```bash
npm run lint
```

This will check your code for style and quality issues.

### 2. Automatically fix issues

You can automatically fix some issues by running:

```bash
npm run lint -- --fix
```

## Build

To build the application for production:

```bash
npm run build
```

This will create a `dist` folder with optimized production assets.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
