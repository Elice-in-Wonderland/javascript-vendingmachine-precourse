function $(selector: string, parent: any = document) {
  return parent.querySelector(selector);
}

export { $ };
