import { ProjPage } from './app.po';

describe('proj App', () => {
  let page: ProjPage;

  beforeEach(() => {
    page = new ProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
