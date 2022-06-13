import Route from '@ember/routing/route';
import { trackedFunction } from 'ember-resources/util/function';

export default class PostRoute extends Route {
  data = trackedFunction(this, async () => {
    const { post_id: postId } = this.paramsFor(this.routeName);
    console.log(`tracked function runs with post ID: ${postId}`);
    return postId;
  });

  model({ post_id: postId }) {
    console.log(`Model hook runs for post id ${postId}`);

    return this.data;
  }
}
