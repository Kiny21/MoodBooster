export class Picture {
  id: string;
  alt: string;
  url: string;
  content!: string; // Added property to store the fetched content

  constructor(id: string, alt: string, url: string) {
    this.id = id;
    this.alt = alt;
    this.url = url;
  }
}
