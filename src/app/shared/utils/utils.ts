import configData from "../interfaces/config-data";
import { datos } from "../interfaces/data";


export class Utils {

    private static loadedData: configData;

    static loadConfigData() {
        if (!this.loadedData) {
            this.loadedData = datos;
        }
        return this.loadedData;
    }

    static get fullName(): string {
        const data = this.loadConfigData();
        return data.personal.name + " " + data.personal.surname;
    }

    static get phoneNumber(): string {
        const data = this.loadConfigData();
        return data.contact.phone;
    }

    static get email(): string {
        const data = this.loadConfigData();
        return `${data.contact.email}`;
    }

    static get subject(): string {
        const data = this.loadConfigData();
        return `${data.config.subject}`;
    }

    static get urlTelegram(): string {
        const data = this.loadConfigData();
        return `${data.config.urlTelegram}${data.contact.telegram}?start=${this.phoneNumber}`;
    }

    static get urlSkype(): string {
        const data = this.loadConfigData();
        return data.contact.skype;
    }

    static get userNameLinkedin(): string {
        const data = this.loadConfigData();
        return data.contact.linkedin;
    }

    static get urlLinkedin(): string {
        const data = this.loadConfigData();
        return data.config.urlLinkedin + this.userNameLinkedin;
    }

    static get urlGithub(): string {
        const data = this.loadConfigData();
        return data.config.urlGithub + data.contact.github;
    }

    static get urlWhtsapp(): string {
        const data = this.loadConfigData();
        return data.config.urlWhatsapp + this.phoneNumber + data.config.textoWhatsappMsg;
    }

    static get botTokenTelegram(): string{
        const data = this.loadConfigData();
        return data.config.botTokenTelegram;
    }

    static get chatIdTelegram(): string{
        const data = this.loadConfigData();
        return data.config.chatIdTelegram;
    }
    static set chatIdTelegram(idChat:string){
        const data = this.loadConfigData();
        data.config.chatIdTelegram = idChat;
    }

    static get baseUrl(): string{
        const data = this.loadConfigData();
        return data.config.baseUrl;
    }

    static set baseUrl(baseUrl:string){
        const data = this.loadConfigData();
        data.config.baseUrl = baseUrl;
    }
}