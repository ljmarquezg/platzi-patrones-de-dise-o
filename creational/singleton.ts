/*
como implementar singleton en javascript
1. Crear una clase con un constructor privado
2. Crea un método estático que llame al constructor privado
    que guarde esta instancia en una variable estática
*/
class SingletonTS {

    private static instance: SingletonTS | null = null;
    private version: string;

    private constructor(version: string){
        this.version = version;
    };

    static getInstance(version: string): SingletonTS {
        if (!SingletonTS.instance) {
            SingletonTS.instance = new SingletonTS(version);
        }

        return SingletonTS.instance;
    }
}

export function appSingleton(): void {
    const singleton1 = Singleton.getInstance('version-1');

    console.log(singleton1);
}

appSingleton();