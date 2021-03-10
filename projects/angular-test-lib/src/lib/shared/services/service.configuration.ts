export interface ServiceConfigurationParameters {
    token?: string | (() => string);
    basePath?: string;
}

export class Configuration {
    token?: string | (() => string);
    basePath?: string;

    constructor(configurationParameters: ServiceConfigurationParameters = {}) {
        this.token = configurationParameters.token;
        this.basePath = configurationParameters.basePath;
    }
}
