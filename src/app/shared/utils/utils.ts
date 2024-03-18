import configData from "../../interfaces/config-data";
import { datos } from "../../interfaces/data";


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
    
}