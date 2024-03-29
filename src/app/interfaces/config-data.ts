import { environment } from "@env";
import { ApiConfig } from "./api-config";
import ContactData from "./contact-data";
import PersonalData from "./personal-data";
import UrlData from "./url-data";
interface ConfigData {
    personal: PersonalData;
    contact: ContactData;
    config: UrlData;
}

export default ConfigData;

export const apiConfig: ApiConfig = {
    urlContactService: environment.urlBase + environment.urlContactService,
    urlCurrencyService: environment.urlBase + environment.urlCurrencyService,
    environment: environment.environment

};