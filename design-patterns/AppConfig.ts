class AppConfig {

    private static instance: AppConfig;

    private constructor(
        public appName: string,
        public type: string
    ) {
    }

    public static getInstance(): AppConfig {
        if (!AppConfig.instance) {
            AppConfig.instance = new AppConfig("Config Única", "Tipo Único");
        }

        return AppConfig.instance;
    }

}

// const config1 = new AppConfig("config1", "type1");
// const config2 = new AppConfig("config1", "type1");
const config1 = AppConfig.getInstance();
const config2 = AppConfig.getInstance();

if (config1 === config2) {
    console.log("Os objetos são iguais");
} else {
    console.log("diferentes");
}