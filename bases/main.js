"use strict";
// (() => {
//   const a:number = 10;
//   console.log( a );
// })();
(function () {
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return (firstName + " " + (lastName || '----')).toUpperCase();
        }
        else {
            return firstName + " " + (lastName || '----');
        }
    };
    var name = fullName('Alejandro', 'Cruz');
    console.log({ name: name });
});
(function () {
    var fullName = function (firstName, lastName) {
        return firstName + " " + (lastName || '----');
    };
    var name = fullName('Alejandro');
    console.log({ name: name });
});
(function () {
    var fullName = function (firstName, lastName) {
        if (!firstName) {
            throw new Error('Nombre requerido');
        }
        return firstName + " " + lastName;
    };
    var name = fullName('Alejandro', 'Cruz');
    console.log({ name: name });
});
(function () {
    var fullName = function (fristName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        return fristName + " " + restArgs.join(' ');
    };
    var superman = fullName('Clarck', 'Joseph', 'Kent');
    console.log({ superman: superman });
})();
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola " + name; };
    var saveTheWorld = function () { return "El mundo est\u00E1 salvado!"; };
    var myFunction;
    // myFunction = 10;
    // myFunction = addNumbers;
    // console.log( myFunction(1, 5) );
    // myFunction = greet;
    // console.log( myFunction('Alejandro') );
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(function () {
    var hero = 'Flash';
    function returnName() {
        return hero;
    }
    var activateBatisignal = function () {
        return 'Batiseñal activada';
    };
    console.log(typeof returnName);
    var heroName = returnName();
})();
(function () {
    // Objetos
    var batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    var bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar: function () {
            console.log("Disparando");
        }
    };
    // Villanos debe de ser un arreglo de objetos personalizados
    var villanos = [{
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: undefined,
            mutante: true
        }];
    // Multiples tipos
    // cree dos tipos, uno para charles y otro para apocalipsis
    var charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    var apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
    var mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(function () {
    var flash = {
        name: 'Bare Alle',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    };
    var superman = {
        name: 'Clark Kent',
        age: 40,
        powers: ['Super fuerza']
    };
    console.log(flash);
})();
(function () {
    var flash = {
        name: 'Bare Alle',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    };
    var superman = {
        name: 'Clark Kent',
        age: 40,
        powers: ['Super fuerza']
    };
    console.log(flash);
})();
(function () {
    var myCustomVariable = 'Fernando';
})();
(function () {
    var avenger = 123;
    var exists;
    var power;
    avenger = 'Dr Strange';
    console.log(avenger);
    avenger = 150.342;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(function () {
    // Tipos
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    // Tuplas
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    // Arreglos
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    // enum { fuerzaAcuaman }
    var power;
    (function (power) {
        power[power["acuaman"] = 0] = "acuaman";
        power[power["batman"] = 1] = "batman";
        power[power["flash"] = 5] = "flash";
        power[power["superman"] = 100] = "superman";
    })(power || (power = {}));
    var fuerzaFlash = power.flash;
    var fuerzaSuperman = power.superman;
    var fuerzaBatman = power.batman;
    var fuerzaAcuaman = power.acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(function () {
    var numbers = [1, 2, 3, 4, 5, 6];
    var villians = ['rojo', 'formamu', 'Duende verde'];
    villians.forEach(function (v) { return console.log(v.toUpperCase()); });
})();
(function () {
    var isSuperman = true;
    var isBatman = false;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman: isSuperman });
})();
(function () {
    var audioLevel;
    (function (audioLevel) {
        audioLevel[audioLevel["min"] = 0] = "min";
        audioLevel[audioLevel["medium"] = 1] = "medium";
        audioLevel[audioLevel["max"] = 2] = "max";
    })(audioLevel || (audioLevel = {}));
    ;
    var currentAudio = audioLevel.medium;
    console.log(audioLevel);
})();
(function () {
    var abc = function (message) {
        throw new Error(message);
    };
    abc('Ayuda');
})();
(function () {
    var nada = undefined;
    console.log(nada);
})();
(function () {
    var avengers = 10;
    console.log(avengers);
    var villians = 20;
    if (avengers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('nos salvamos');
    }
    avengers = Number('123');
    console.log({ avengers: avengers });
})();
(function () {
    var _a;
    var batman = 'Batman';
    var linternaVerda = "Linterna Verde";
    var volcanNegro = "H\u00E9roe: Volcan Negro";
    var abc = 123;
    console.log("I'm " + batman + ", " + abc + " ");
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No está presente');
})();
(function () {
    var hero = ['Dr Strange', 100];
})();
(function () {
    function callBatman() {
        return;
    }
    var callSuperman = function () {
        return;
    };
    var a = callBatman();
    console.log(a);
});
