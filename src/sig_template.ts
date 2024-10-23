export interface Page {
  title: string;
  content: ContentItem[];
}

export interface ContentItem {
  render(): string;
  name: string;
  get(): any;
  children: ContentItem[];
}

export interface SigTemplate {
  renderPage(page: Page): string;
}
