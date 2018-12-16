export class User {
    application_id: number = null
    auth_token: string = "";
    checked_in: boolean = false
    confirmation_sent_at: string = "";
    confirmation_token: string = "";
    confirmed_at: string = null
    created_at: string = "";
    email: string = "";
    encrypted_password: string = "";
    first_name: string = "";
    id: number = 0;
    last_name: string = "";
    remember_created_at: string = null;
    reset_password_sent_at: string = null;
    reset_password_token: string = null;
    role: string = "";
    rsvp_id: number = null
}

export class PasswordChange {
    current_password: string = "";
    password: string = "";
    password_confirmation: string = "";
}