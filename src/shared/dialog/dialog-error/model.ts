export class DialogModelError {
    constructor(
      public title: string,
      public message: string,
      public key: any,
      public dialogType: string
    ) {}
  }