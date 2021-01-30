/* eslint-disable no-restricted-syntax */
export default class Validate {
  constructor(CPF) {
    Object.defineProperty(this, 'clearCPF', {
      writable: false,
      configurable: false,
      enumerable: false,
      value: CPF.replace(/\D+/g, ''),
    });
  }

  isSequence() {
    return this.clearCPF.charAt(0).repeat(11) === this.clearCPF;
  }

  generate() {
    const noDigit = this.clearCPF.slice(0, -2);
    const firstDigit = this.generateDigit(noDigit);
    const secondDigit = this.generateDigit(noDigit + firstDigit);
    this.newCPF = noDigit + firstDigit + secondDigit;
  }

  static generateDigit(noDigit) {
    let total = 0;
    let reverse = noDigit.length + 1;

    for (const numericString of noDigit) {
      total += reverse * Number(numericString);
      reverse--;
    }

    const digit = 11 - (total % 11);
    return digit <= 9 ? String(digit) : '0';
  }

  Validation() {
    if (!this.clearCPF) return false;
    if (typeof this.clearCPF !== 'string') return false;
    if (this.clearCPF.length !== 11) return false;
    if (this.isSequence()) return false;
    if (this.generate()) return false;

    return this.newCPF === this.clearCPF;
  }
}
