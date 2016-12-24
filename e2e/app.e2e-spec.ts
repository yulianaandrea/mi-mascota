import { Angular2ProyectoPage } from './app.po';

describe('angular2-proyecto App', function() {
  let page: Angular2ProyectoPage;

  beforeEach(() => {
    page = new Angular2ProyectoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
