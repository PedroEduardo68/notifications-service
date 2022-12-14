export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validadeContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    const isContentELenghtValid = this.validadeContentLength(content);
    if (!isContentELenghtValid) {
      throw new Error('Content Length error.');
    }

    this.content = content;
  }
}
