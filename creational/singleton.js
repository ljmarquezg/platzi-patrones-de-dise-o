/*
como implementar singleton en javascript
1. Crear una clase con un constructor privado
2. Crea un método estático que llame al constructor privado
    que guarde esta instancia en una variable estática
*/
class Singleton {

    static instance = undefined;

    constructor(version){
        this.version = version;
    };

    static getInstance(version) {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(version);
        }

        return Singleton.instance;
    }
}

function appSingleton() {
    const singleton1 = Singleton.getInstance('version-1');
    const singleton2 = Singleton.getInstance('version-2');

    console.log(singleton1);
}

appSingleton();