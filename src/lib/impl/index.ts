


export interface IEmail {
    email(): string;
}

export interface IString {
    email(): IEmail;
}

export interface INumber {
    number(): string;
}

export interface IBoolean {
    boolean(): string;
}