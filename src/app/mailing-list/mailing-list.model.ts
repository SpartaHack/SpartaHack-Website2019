export class MailMember {
    email: string = "";
    firstName: string = "";
    lastName: string = "";
}

export interface MailChimpResponse {
    result: string;
    msg: string;
}