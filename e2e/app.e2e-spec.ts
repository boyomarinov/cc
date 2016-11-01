import { CcNewPage } from './app.po';

describe('cc-new App', function() {
  let page: CcNewPage;

  beforeEach(() => {
    page = new CcNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
