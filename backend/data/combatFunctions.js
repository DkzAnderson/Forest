
const combatFunctions = {
    PhysicDmgNormal: (self, target) => {
        // daño que sera reducido por la defensa
        let reduce = (target.atributes[2].values.actual / 1000);
        // daño total del atacante despues de reducir
        let dmg = (self.atributes[0].values.actual - (self.atributes[0].values.actual * reduce)).toFixed(0);

        let result = (target.atributes[4].values.actual - dmg);
        // evita que se muestre valores negativos en la interfaz( barra de hp );
        if (result < 0) target.atributes[4].values.actual = 0
        else target.atributes[4].values.actual = result

    },
    PhysicDmgDirect: (self, target) => {
        //Daño directo (Ignora defensa)
        // daño total del atacante
        let dmg = self.atributes[0].values.actual;
        let result = target.atributes[4].values.actual - dmg;
        // evita que se muestre valores negativos en la interfaz( barra de hp );
        if (result < 0) target.atributes[4].values.actual = 0;
        else target.atributes[4].values.actual = result;
    },
    MagicDmgNormal: (self, target) => {
        // daño que sera reducido por la defensa
        let reduce = (target.atributes[3].values.actual / 1000);
        // daño total del atacante despues de reducir
        let dmg = (self.atributes[1].values.actual - (self.atributes[0].values.actual * reduce)).toFixed(0);

        let result = (target.atributes[4].values.actual - dmg);
        console.log(result);
        // evita que se muestre valores negativos en la interfaz( barra de hp );
        if (result < 0) target.atributes[4].values.actual = 0
        else target.atributes[4].values.actual = result

    },
    MagicDmgDirect: (self, target) => {
        //Daño directo (Ignora defensa)
        // daño total del atacante
        let dmg = self.atributes[1].values.actual;
        let result = target.atributes[4].values.actual - dmg;
        // evita que se muestre valores negativos en la interfaz( barra de hp );
        if (result < 0) target.atributes[4].values.actual = 0;
        else target.atributes[4].values.actual = result;
    },
    Defend: (self) => {
        self.atributes[2].values.actual = (self.atributes[2].values.actual * 2)
        self.atributes[3].values.actual = (self.atributes[3].values.actual * 2)
    }

    /*
        Usar Algoritmo de arriba para modificar
        el calculo de daño en la clase skill
    */

    /*
        Generar algoritmo para automatizar ataques con 
        este porcentaje de uso

        hp 50+ => daño normal (70%) / daño fuerte (30%)
        hp 50- => daño normal (40%) / daño fuerte (30%) / sanación (30%)
        hp 30- => daño normal (20%) / daño fuerte (40%) / sanación (40%)
    
    */



}

const combat = combatFunctions;

export default combat;