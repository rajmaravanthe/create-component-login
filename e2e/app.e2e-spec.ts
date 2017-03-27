import { FolderStructureLoginPage } from './app.po';

describe('folder-structure-login App', function() {
  let page: FolderStructureLoginPage;

  beforeEach(() => {
    page = new FolderStructureLoginPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
