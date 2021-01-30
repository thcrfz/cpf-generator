import Validate from './Validate';

export default class Generate {
  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  formatted(cpf) {
    return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(
      6,
      9
    )}-${cpf.slice(9, 11)}`;
  }

  generator() {
    const noDigit = this.rand();
    const firstDigit = Validate.generateDigit(noDigit);
    const secondDigit = Validate.generateDigit(noDigit + firstDigit);
    const newCPF = noDigit + firstDigit + secondDigit;

    if (newCPF.charAt(0).repeat(11) === newCPF) return false;

    return this.formatted(newCPF);
  }
}
