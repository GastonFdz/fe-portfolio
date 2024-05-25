export class Contact {
    private nameContact: string = "";
    private lastnameContact: string = "";
    private emailContact: string = "";
    private phoneContact: string = "";
    private subjectContact: string = "";
    private messageContact: string = "";

    constructor(name?: string, lastname?: string, email?: string, phone?: string, subject?: string, message?: string) {
        this.nameContact = name ? name : "";
        this.lastnameContact = lastname ? lastname : "";
        this.emailContact = email ? email : "";
        this.phoneContact = phone ? phone : "";
        this.subjectContact = subject ? subject : "";
        this.messageContact = message ? message : "";
    }

    public get name() {
        return this.nameContact;
    }

    public set name(name: string) {
        this.nameContact = name;
    }

    public get lastname() {
        return this.lastnameContact;
    }

    public set lastname(lastname: string) {
        this.lastnameContact = lastname;
    }

    public get email() {
        return this.emailContact;
    }

    public set email(email: string) {
        this.emailContact = email;
    }

    public get phone() {
        return this.phoneContact;
    }

    public set phone(phone: string) {
        this.phoneContact = phone;
    }

    public get subject() {
        return this.subjectContact;
    }

    public set subject(subject: string) {
        this.subjectContact = subject;
    }

    public get message() {
        return this.messageContact;
    }

    public set message(message: string) {
        this.messageContact = message;
    }

    public verfyFields(): boolean {
        return this.nameContact.length > 0
            && this.lastnameContact.length > 0
            && this.emailContact.length > 0
            && this.phoneContact.length > 0
            && this.subjectContact.length > 0
            && this.messageContact.length > 0
    }
}