let empty = (value) => {
  return value === undefined ||
    value === null ||
    value === "" ||
    ["Null", "NULL", "", "null"].indexOf(value) > -1
    ? true
    : false;
};

class EmailExtractor {
  constructor(text) {
    this.text = text;
  }

  static findEmails(text) {
    const reg =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    return empty(text) ? [] : text.toLowerCase().match(reg);
  }
  static getEmails(text) {
    const emails = EmailExtractor.findEmails(text);
    return emails;
  }
  static getUniqueEmails(text) {
    const emails = EmailExtractor.getEmails(text);
    return Array.from(new Set(emails));
  }
}
