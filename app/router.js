import EmberRouter from '@ember/routing/router';
import config from 'reproduction-route-params-is-not-tracked/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('post', { path: '/:post_id' });
});
