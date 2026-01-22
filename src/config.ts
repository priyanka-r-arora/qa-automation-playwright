class Config {
  public get baseUrl(): string {
    return "https://web-frontend-qa-bphse9crexbna2he.westeurope-01.azurewebsites.net";
  }

  public pageUrl(path: string): string {
    const cleanPath = path.replace(/^\/+|\/+$/g, "");
    return `${this.baseUrl}/${cleanPath}`;
  }
}
export default new Config();
