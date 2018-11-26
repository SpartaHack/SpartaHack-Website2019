export class UserInput {
    first_name: string = "";
    last_name: string = "";
    email: string = "";
    password: string = "";
    password_confirmation: string = "";
}

export class Credentials {
    email: string = "";
    password: string = "";
}

export class PasswordReset {
    password: string = "";
    passwordConfirmation: string = "";
}