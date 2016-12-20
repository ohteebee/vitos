import { VitosofgreerPage } from './app.po';

describe('vitosofgreer App', function() {
  let page: VitosofgreerPage;

  beforeEach(() => {
    page = new VitosofgreerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
