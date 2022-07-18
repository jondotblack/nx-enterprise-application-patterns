# NX enterpise application patterns

This is a non-functional application.  It is purely mocked up as an example of how to structure large enterprise applications and best practices for naming conventions/code styling.

Author: [@jondotblack](https://jon.black) has developed design systems for Amazon, American Express, Goldman Sachs, Spotify, and countless others.

## Example tech stack

- [Nx](https://nx.dev)
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Chakra UI](https://chakra-ui.com/)
- [Storybook](https://storybook.js.org/)
- [Jest](https://jestjs.io/)
- [Testing library](https://testing-library.com/)
- [Cypress](https://www.cypress.io/)
- [Apollo](https://www.apollographql.com/) + [GraphQL](https://graphql.org/)

## Application or library directory Structure

.
├── public                      # nextJs public assets
├── src                         # source files
├──── components
├────── products                # collection of components
├──────── __mocks__             # mocks used for storybook and testing
├──────── __tests__             # unit tests (Component.spec.js)
├──────── components            # individual components placed within a sub dir
├────────── Component.tsx
├──────── contexts              # a context specific to component(s)
├──────── hooks                 # hooks specific to component(s)
├──────── utils                 # utils specific to component(s)
├────── image                   # basic single component structure
├──────── __mocks__
├──────── __tests__
├──────── Image.tsx
├──────── Image.stories.ts      # should leverage stories for all UI elements
├──────── index.ts
├──── configs                   # currently only used in Soma
├──── constants                 # should be "consistent" therefore in global scope
├──── contexts                  # global context/providers
├──── graphql                   # all graphql queries, mutations, hooks, & fragments
├──── hooks                     # all general app or lib hooks
├──── layouts                   # all base or page specific layouts (wrap `children`)
├──── libs                      # used for third-party dependency setup
├──── pages                     # Next routes / pages
├──── styles                    # any theme or styling overrides for app or lib
├──── utils                     # all general app or lib utils
├────── __tests__
└── README.md


## Code styling guide
* All components use Pascal case
* All component variants should be mocked up in Storybook 
* Constants use Camel case with each key being all caps and underscores
* Hooks use Camel case and should be prefixed with `use`
* Mocks use Camel case and should be prefixed with `Mock`