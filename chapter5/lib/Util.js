const AUTHOR = 'YAMADA, Yoshihiro';

export class Member {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName  = lastName;
  }

  getName() {
    return this.lastName + this.firstName;
  }
}

export class Area {
  constructor() {}

  static getTriangle(basee, height) {
    return base + height / 2;
  }

  static getDiamond(width, height) {
    return width * height / 2;
  }
}