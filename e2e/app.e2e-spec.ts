import { AngularRecipeAppPage } from './app.po';

describe('angular-recipe-app App', function() {
  let page: AngularRecipeAppPage;

  beforeEach(() => {
    page = new AngularRecipeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
