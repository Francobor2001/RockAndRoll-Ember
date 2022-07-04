import Route from '@ember/routing/route';

export default class BandsBandRoute extends Route {
  model(params) {
    let bands = this.modelFor('bands'); //obtain the model from the father(bands)
    console.log(bands.find((band) => band.id === params.id));
    return bands.find((band) => band.id === params.id);
  }
}
