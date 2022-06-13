# reproduction-route-params-is-not-tracked

This Ember application demonstrates that `Route.paramsFor()` is not autotracked.

It uses `trackedFunction` from `ember-resources` in `app/routes/post.js`.
The tracked function consumes a param of the route (`:post_id`) using
`Routes.paramsFor()`. It logs the ID to console when ever it runs.

I would expect that the tracked function reruns whenever the route param
changes. But it does not. It only runs once.

As `model` hook reruns every time a work-around is assigning the route param
to a tracked property in `model` hook and consuming that one in the tracked
function. While this works, it is way less ergonomic.

Please note that using `RouteService.currentRoute.params` would be an
alternative pattern. While this would be great for use cases within a
controller or component, it has noticeable trade-off that
`RouterService.currentRoute` is updated _after_ `model` hook run.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)
* [Ember CLI](https://cli.emberjs.com/release/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd reproduction-route-params-is-not-tracked`
* `yarn install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `yarn lint`
* `yarn lint:fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://cli.emberjs.com/release/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
