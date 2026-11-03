# angular-learning-project

A learning project built while studying Angular, combining a notes interface with movie search through the OMDb API. The focus is on practising Angular fundamentals in a small application: components, services, routing, forms and asynchronous data.

## Features

- Browse sample notes and open an individual note using a route parameter.
- Add notes through a template-driven form with required fields and length validation.
- Shorten note previews with a custom pipe and format list dates with DatePipe.
- Search movies by title and display posters, years and API error messages.
- Responsive CSS layouts using Flexbox and Grid.

## Stack and concepts practised

- Angular 21 and TypeScript
- Standalone components and component inputs/outputs
- Angular Router and ActivatedRoute
- Dependency injection and shared services
- Signals for note storage and movie search results
- HttpClient and RxJS Observables
- FormsModule, ngModel and template-driven validation
- Built-in and custom pipes

The project includes Angular CLI-generated server-rendering and hydration configuration. This configuration is separate from the learning features described above.

## Run locally

Use a Node.js version supported by Angular 21 and npm.

```bash
git clone https://github.com/DebHtm/itproger.git
cd itproger
npm ci
npm start
```

Open http://localhost:4200/.

Movie search requires an internet connection and a working OMDb API key. The current learning implementation sets the key in `src/app/service/movies.ts`. Browser-side API keys are visible to visitors; moving a key to a frontend environment file does not make it secret.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Note list and add-note form |
| `/note/:id` | Note details |
| `/movies` | Movie search |
| `/about` | Placeholder page |

## Source structure

```text
src/app/
  components/note-add/  Note form and validation
  header/              Shared header
  footer/              Shared footer
  models/              Note model
  pages/               Routed pages
  pipes/               Note preview pipe
  service/             Notes state and movie API requests
```

## Development commands

```bash
npm run build        # Build the application
npm test             # Run the configured unit test runner
```

The repository includes generated starter tests. They need to be reviewed and updated for the current application; their presence does not indicate complete feature coverage or a passing test suite.

## Current limitations and next steps

- Notes are stored in memory and reset on reload. There is no backend or persistence.
- Missing note IDs need a user-friendly not-found state.
- Movie search currently displays the returned page of results without pagination or a loading indicator.
- Some form and API values still use `any`; explicit response and form types are a next step.
- The About page and some interface text are unfinished.
- Planned improvements include focused behaviour tests, accessibility checks and a deployed demo.

## Learning context

This is an educational project developed while following Angular learning materials, with AI assistance for styling and selected explanations and code changes. It is presented as practical learning work, with the current limitations documented above.
