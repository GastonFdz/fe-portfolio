import ContactData from "./contact-data";
import PersonalData from "./personal-data";
import UrlData from "./url-data";

interface ConfigData {
    personal: PersonalData;
    contact: ContactData;
    config: UrlData;
}

export default ConfigData;