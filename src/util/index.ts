function $(selector: string, parent = document) {
  return parent.querySelector(selector);
}

export { $ };
