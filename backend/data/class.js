import player from "./player";
import Player  from "./player";

let npcID = 0;
let equipableID  = 1000;
let consumableID = 3000;
let materialID   = 4000;
const random = (min,max)=>{
    return Math.floor(Math.random() * (max - min+1) + min)
}

function createSkill({npc,name,dmg,type,range=0}){
// createSkill(this.name,'Mordedura',this.dmgSkill,'damage',0),

        let skill = {
            name : name,
            dmg : dmg,
            range : range,
            type : type,
            npc : npc,
        }
        return skill
        /*

        UseSkill(target=Player){
            let checkHp = ()=>{
                if(this.hpActual >= this.hpTotal) this.UseSkill();
            }


            types
            -damage
            -heal
            -special
                0->daño+sanacion
                1->daño ignora def
                2->sanacion 50% hp+aumento de daño 20%
            -pasive
                0->aumento de daño
                1->aumento de def y spr
                2->aumento de hpT,hpAct,dmg,DmgSkill,spr y def
    
            range
            0-> bajo
            1-> medio
            2-> fuerte
        
    
            switch (skill.type) {
                case 'pasive':
                    switch (this.range) {
                        case 1:
                            //defensive
                            this.npc.def = this.npc.def+(this.npc.def*0.1);
                            this.npc.spr = this.npc.spr+(this.npc.spr*0.1);
                            break;
                        case 2:
                            //all
                            this.npc.hpActual = this.npc.hpActual+(this.npc.hpActual*0.15);
                            this.npc.hpTotal = this.npc.hpTotal+(this.npc.hpTotal*0.15);
                            this.npc.mpTotal = this.npc.mpTotal+(this.npc.mpTotal*0.15);
                            this.npc.mpActual = this.npc.mpActual+(this.npc.mpActual*0.15);
    
                            this.npc.def = this.npc.def+(this.npc.def*0.15);
                            this.npc.spr = this.npc.spr+(this.npc.spr*0.15);
                            this.npc.dmg = this.npc.dmg+(this.npc.dmg*0.15);
                            this.npc.dmgSkill = this.npc.dmgSkill+(this.npc.dmgSkill*0.15);
                            break;
                        default:
                            //damage+
                            this.npc.dmg = this.npc.dmg+(this.npc.dmg*0.1);
                            this.npc.dmgSkill = this.npc.dmgSkill+(this.npc.dmgSkill*0.1);
                            break;
                    }
                    break;
                case 'heal':
                    switch (skill.range) {
                        case 1:
                            checkHp();
                            this.npc.hpActual= this.npc.hpActual+(this.npc.hpActual*0.3)
                            break;
                        case 2:
                            checkHp();
                            this.npc.hpActual= this.npc.hpActual+(this.npc.hpActual*0.4)
                            break;
                    
                        default:
                            //0
                            checkHp();
                            this.npc.hpActual= this.npc.hpActual+(this.npc.hpActual*0.2)
                            break;
                    }
                    
                    break;
                case 'special':
                    switch (this.range) {
                        case 1:
                            // daño que ignora spr y aumenta con la spr del objetivo
                            target.hpActual = (target.hpActual-this.npc.dmgSkill+(target.spr/100)).toFixed(0);
                            break;
                        case 2:
                            this.npc.hpActual = this.npc.hpActual+(this.npc.hpTotal/2)
                            this.npc.dmg = this.npc.dmg + (this.npc.dmg*0.2)
                            this.npc.dmgSkill = this.npc.dmgSkill+(this.npc.dmgSkill*0.2)
                            break;
                    
                        default:
                            //dmg + sanacion
                            let dmgInflicted = target.hpActual
                            
                            target.hpActual = target.hpActual-(this.dmgSkill-(this.dmgSkill*(target.spr/100))).toFixed(0);
                            dmgInflicted = dmgInflicted-target.hpActual
                            this.npc.hpActual = this.npc.hpActual + (dmgInflicted/2);
    
                            if(this.npc.hpActual > this.npc.hpTotal){
                                this.npc.hpActual = this.npc.hpTotal
                            }
                            break;
                    }
                    break;
                case 'damage':
                    switch (this.range) {
                        case 1:
                            //daño medio
                            target.hpActual = target.hpActual-((this.dmgSkill+(this.dmgSkill*0.25))-(this.dmgSkill*(Player.spr/100))).toFixed(0);
    
                            break;
                        case 2:
                            //daño fuerte
                            target.hpActual = target.hpActual-((this.dmgSkill+(this.dmgSkill*0.45))-(this.dmgSkill*(Player.spr/100))).toFixed(0);
                            break;
                    
                        default:
                            //daño normal
    
                            target.hpActual = target.hpActual-(this.dmgSkill-(this.dmgSkill*(Player.spr/100))).toFixed(0);
                            break;
                    }
    
                    break;
    
                default:
                    switch (this.range) {
                        case 1:
                            //daño medio
                            target.hpActual-((this.dmgSkill+(this.dmgSkill*0.25))-(this.dmgSkill*(Player.spr/100))).toFixed(0);
                            break;
                        case 2:
                            target.hpActual-((this.dmgSkill+(this.dmgSkill*0.45))-(this.dmgSkill*(Player.spr/100))).toFixed(0);
                            //daño fuerte
                            break;
                    
                        default:
                            //daño normal
                            target.hpActual = target.hpActual-(this.dmgSkill-(this.dmgSkill*(Player.spr/100))).toFixed(0);
                            break;
                    }
                    break;
            
                }
    
        }

    }

    switch (npc.rarity) {
        case 'Normal':
            return new PnjSkill (npc,name,dmg,type,range);
            break;
        case Dictionary.ranges.elite:
            // Habilidades para Elites
            break;
        case Dictionary.ranges.rare:
            // Habilidades para Rares
            break;
        case 'player':
            //Habilidades para El jugador
            break;
    
        default:

            break;
    }
    */
}

const Dictionary = {
    types:{
        Acuatic:    "Acuatico",
        Beast:      "Bestia",
        Dragon:     "Dragon",
        Element:    "Elemental",
        Flying:     "Volador",
        Insect:     "Insecto",
        Humanoid:   "Humanoide",
        Undead:     "No-muerto",

    },
    ranges:{
        normal:"Normal",
        boss: "Jefe",
        rare:  "Raro"
    } 
}


class equipableItem{
    constructor(name,quality='Normal',img){
        this.name = name;
        this.quality = quality;
        this.type = ''
        this.img = img;
        this.id = equipableID;
        equipableID = this.id+1
    }

    SetAtributes() {

        let listaDeMods = [
            { name: 'AcuaticKiller', value: 0 },
            { name: 'BeastKiller', value: 0 },
            { name: 'DragonKiller', value: 0 },
            { name: 'ElementKiller', value: 0 },
            { name: 'FlyingKiller', value: 0 },
            { name: 'InsectKiller', value: 0 },
            { name: 'HumanKiller', value: 0 },
            { name: 'UndeadKiller', value: 0 }
        ]
        // usado para aumentar las estadisticas de manera porcentual
        // conforme al nivel del jugador
        const multiplicador = 0.5 * player.lvl
        // Agregado de Estadisticas 
        // Según tipo de item y su calidad.
        switch (this.quality) {
            case 'Legendario':
                let index = 0;
                switch (this.type) {
                    case 'Armadura':
                        this.atributes = [
                            {
                                name: 'ATQ',
                                value: 0
                            },
                            {
                                name: 'MAG',
                                value: 0
                            },
                            {
                                name: 'DEF',
                                value: Number((random(200, 500) + (multiplicador / 25)).toFixed(0))
                            },
                            {
                                name: 'SPR',
                                value: Number((random(200, 500) + (multiplicador / 25)).toFixed(0))
                            },
                            {
                                name: 'HP',
                                value: Number((random(350, 700) + (multiplicador / 25)).toFixed(0))
                            },
                            {
                                name: 'MP',
                                value: Number((random(200, 400) + (multiplicador / 25)).toFixed(0))
                            },

                        ]
                        break;
                    case 'Accesorio':
                        this.atributes = [
                            {
                                name: 'ATQ',
                                value: Number((random(125, 500) + (multiplicador / 25)).toFixed(0))
                            },
                            {
                                name: 'MAG',
                                value: Number((random(125, 500) + (multiplicador / 25)).toFixed(0))
                            },
                            {
                                name: 'DEF',
                                value: 0
                            },
                            {
                                name: 'SPR',
                                value: 0
                            },
                            {
                                name: 'HP',
                                value: Number((random(0, 200) + (multiplicador / 25)).toFixed(0))
                            },
                            {
                                name: 'MP',
                                value: Number((random(0, 200) + (multiplicador / 25)).toFixed(0))
                            },

                        ]
                        // Agregado de Mods
                        while (index < 2) {
                            let mod = random(0, listaDeMods.length - 1);
                            // establece un valor cuando este es igual a 0
                            // caso contrario vuelve a revisar hasta 
                            // agregar 2 valores
                            if (listaDeMods[mod].value == 0) {
                                listaDeMods[mod].value = Number(random(20, 30));
                                index++
                            }
                        }
                        this.mods = listaDeMods;
                        break;
                    case 'Arma':
                        this.atributes = [
                            {
                                name: 'ATQ',
                                value: Number((random(350, 800) + (multiplicador / 25)).toFixed(0))
                            },
                            {
                                name: 'MAG',
                                value: Number((random(350, 800) + (multiplicador / 25)).toFixed(0))
                            },
                            {
                                name: 'DEF',
                                value: 0
                            },
                            {
                                name: 'SPR',
                                value: 0
                            },
                            {
                                name: 'HP',
                                value: 0
                            },
                            {
                                name: 'MP',
                                value: Number((random(0, 100) + (multiplicador / 25)).toFixed(0))
                            },

                        ]
                        // Agregado de Mods
                        while (index < 2) {
                            let mod = random(0, listaDeMods.length - 1);
                            // establece un valor cuando este es igual a 0
                            // caso contrario vuelve a revisar hasta 
                            // agregar 2 valores
                            if (listaDeMods[mod].value == 0) {
                                listaDeMods[mod].value = Number(random(20, 30));
                                index++
                            }
                        }
                        this.mods = listaDeMods;
                        break;
                    case 'Casco':
                        this.atributes = [
                            {
                                name: 'ATQ',
                                value: 0
                            },
                            {
                                name: 'MAG',
                                value: 0
                            },
                            {
                                name: 'DEF',
                                value: Number((random(200, 500) + (multiplicador / 25)).toFixed(0))
                            },
                            {
                                name: 'SPR',
                                value: Number((random(200, 500) + (multiplicador / 25)).toFixed(0))
                            },
                            {
                                name: 'HP',
                                value: Number((random(350, 700) + (multiplicador / 25)).toFixed(0))
                            },
                            {
                                name: 'MP',
                                value: Number((random(200, 400) + (multiplicador / 25)).toFixed(0))
                            },

                        ]
                        break;
                    default:
                        this.atributes = [
                            {
                                name: 'ATQ',
                                value: 0
                            },
                            {
                                name: 'MAG',
                                value: 0
                            },
                            {
                                name: 'DEF',
                                value: Number((random(200, 500) + (multiplicador / 25)).toFixed(0))
                            },
                            {
                                name: 'SPR',
                                value: Number((random(200, 500) + (multiplicador / 25)).toFixed(0))
                            },
                            {
                                name: 'HP',
                                value: Number((random(350, 700) + (multiplicador / 25)).toFixed(0))
                            },
                            {
                                name: 'MP',
                                value: Number((random(200, 400) + (multiplicador / 25)).toFixed(0))
                            },

                        ]
                        break;
                }
                break;
            case 'Raro':
                let i = random(0, listaDeMods.length - 1);
                switch (this.type) {
                    case 'Armadura':
                        this.atributes = [
                            {
                                name: 'ATQ',
                                value: 0
                            },
                            {
                                name: 'MAG',
                                value: 0
                            },
                            {
                                name: 'DEF',
                                value: Number((random(50, 300) + (multiplicador / 25)).toFixed(0))
                            },
                            {
                                name: 'SPR',
                                value: Number((random(50, 300) + (multiplicador / 25)).toFixed(0))
                            },
                            {
                                name: 'HP',
                                value: Number((random(150, 450) + (multiplicador / 25)).toFixed(0))
                            },
                            {
                                name: 'MP',
                                value: Number((random(75, 180) + (multiplicador / 25)).toFixed(0))
                            },

                        ]
                        break;
                    case 'Accesorio':
                        this.atributes = [
                            {
                                name: 'ATQ',
                                value: Number((random(75, 250) + (multiplicador / 25)).toFixed(0))
                            },
                            {
                                name: 'MAG',
                                value: Number((random(75, 250) + (multiplicador / 25)).toFixed(0))
                            },
                            {
                                name: 'DEF',
                                value: 0
                            },
                            {
                                name: 'SPR',
                                value: 0
                            },
                            {
                                name: 'HP',
                                value: 0
                            },
                            {
                                name: 'MP',
                                value: Number((random(0, 90) + (multiplicador / 25)).toFixed(0))
                            },

                        ]
                        // Agregado de mods
                        if (listaDeMods[i].value == 0) {
                            listaDeMods[i].value = Number(random(5, 15));
                        }
                        this.mods = listaDeMods;
                        break;
                    case 'Arma':
                        this.atributes = [
                            {
                                name: 'ATQ',
                                value: Number((random(200, 400) + (multiplicador / 25)).toFixed(0))
                            },
                            {
                                name: 'MAG',
                                value: Number((random(200, 400) + (multiplicador / 25)).toFixed(0))
                            },
                            {
                                name: 'DEF',
                                value: 0
                            },
                            {
                                name: 'SPR',
                                value: 0
                            },
                            {
                                name: 'HP',
                                value: 0
                            },
                            {
                                name: 'MP',
                                value: 0
                            },

                        ]
                        // Agregado de mods
                        if (listaDeMods[i].value == 0) {
                            listaDeMods[i].value = Number(random(5, 15));
                        }
                        this.mods = listaDeMods;
                        break;
                    case 'Casco':
                        this.atributes = [
                            {
                                name: 'ATQ',
                                value: 0
                            },
                            {
                                name: 'MAG',
                                value: 0
                            },
                            {
                                name: 'DEF',
                                value: Number((random(100, 250) + (multiplicador / 25)).toFixed(0))
                            },
                            {
                                name: 'SPR',
                                value: Number((random(100, 250) + (multiplicador / 25)).toFixed(0))
                            },
                            {
                                name: 'HP',
                                value: Number((random(125, 350) + (multiplicador / 25)).toFixed(0))
                            },
                            {
                                name: 'MP',
                                value: 0
                            },

                        ]
                        break;
                    default:
                        this.atributes = [
                            {
                                name: 'ATQ',
                                value: 0
                            },
                            {
                                name: 'MAG',
                                value: 0
                            },
                            {
                                name: 'DEF',
                                value: Number((random(100, 250) + (multiplicador / 25)).toFixed(0))
                            },
                            {
                                name: 'SPR',
                                value: Number((random(100, 250) + (multiplicador / 25)).toFixed(0))
                            },
                            {
                                name: 'HP',
                                value: Number((random(125, 350) + (multiplicador / 25)).toFixed(0))
                            },
                            {
                                name: 'MP',
                                value: 0
                            },

                        ]
                        break;
                }
                break;
            default:
                // Normal
                switch (this.type) {
                    case 'Armadura':
                        this.atributes = [
                            {
                                name: 'ATQ',
                                value: 0
                            },
                            {
                                name: 'MAG',
                                value: 0
                            },
                            {
                                name: 'DEF',
                                value: Number((random(20, 100) + (multiplicador / 25)).toFixed(0))
                            },
                            {
                                name: 'SPR',
                                value: Number((random(20, 100) + (multiplicador / 25)).toFixed(0))
                            },
                            {
                                name: 'HP',
                                value: Number((random(0, 50) + (multiplicador / 25)).toFixed(0))
                            },
                            {
                                name: 'MP',
                                value: Number((random(0, 30) + (multiplicador / 25)).toFixed(0))
                            },

                        ]
                        break;
                    case 'Accesorio':
                        this.atributes = [
                            {
                                name: 'ATQ',
                                value: Number((random(25, 100) + (multiplicador / 25)).toFixed(0))
                            },
                            {
                                name: 'MAG',
                                value: Number((random(25, 100) + (multiplicador / 25)).toFixed(0))
                            },
                            {
                                name: 'DEF',
                                value: 0
                            },
                            {
                                name: 'SPR',
                                value: 0
                            },
                            {
                                name: 'HP',
                                value: 0
                            },
                            {
                                name: 'MP',
                                value: 0
                            },

                        ]
                        break;
                    case 'Arma':
                        this.atributes = [
                            {
                                name: 'ATQ',
                                value: Number((random(25,100) + (multiplicador / 25)).toFixed(0))
                            },
                            {
                                name: 'MAG',
                                value: Number((random(25,100) + (multiplicador / 25)).toFixed(0))
                            },
                            {
                                name: 'DEF',
                                value: 0
                            },
                            {
                                name: 'SPR',
                                value: 0
                            },
                            {
                                name: 'HP',
                                value: 0
                            },
                            {
                                name: 'MP',
                                value: 0
                            },

                        ]
                        break;
                    case 'Casco':
                        this.atributes = [
                            {
                                name: 'ATQ',
                                value: 0
                            },
                            {
                                name: 'MAG',
                                value: 0
                            },
                            {
                                name: 'DEF',
                                value: Number((random(20, 80) + (multiplicador / 25)).toFixed(0))
                            },
                            {
                                name: 'SPR',
                                value: Number((random(20, 80) + (multiplicador / 25)).toFixed(0))
                            },
                            {
                                name: 'HP',
                                value: Number((random(0, 50) + (multiplicador / 25)).toFixed(0))
                            },
                            {
                                name: 'MP',
                                value: 0
                            },

                        ]
                        break;
                    default:
                        this.atributes = [
                            {
                                name: 'ATQ',
                                value: 0
                            },
                            {
                                name: 'MAG',
                                value: 0
                            },
                            {
                                name: 'DEF',
                                value: Number((random(20, 80) + (multiplicador / 25)).toFixed(0))
                            },
                            {
                                name: 'SPR',
                                value: Number((random(20, 80) + (multiplicador / 25)).toFixed(0))
                            },
                            {
                                name: 'HP',
                                value: Number((random(0, 50) + (multiplicador / 25)).toFixed(0))
                            },
                            {
                                name: 'MP',
                                value: 0
                            },

                        ]
                        break;
                }
                break;
        }
    }

}
// materiales y consumibles
class Consumables {//revisar
    constructor(type,name,img,description){
        this.type = type
        this.name = name
        this.img = `./data/Armor/${img}`
        this.description = description
        this.category = 'Consumible'
        this.id = consumableID;
        consumableID = this.id + 1
    }

    UseItem(){}
    // revisar
}

class Material {
    constructor(name,img){
        this.name = name;
        this.img = `../../../backend/images/materials/${img}.webp`;
        this.value = random(20,70);
        this.category = 'Material';
        this.id = materialID;
        materialID = this.id + 1
    }
}
// armaduras
class Armor extends equipableItem{
    constructor(name,quality,img){
        super(name,quality,img)
        this.type = 'Armadura'
        this.SetAtributes();
    }

    Equip(){
        Player.atq = Player.atq + this.atributes.atq
        Player.mag = Player.spr + this.atributes.mag
        Player.def = Player.def + this.atributes.def
        Player.spr = Player.spr + this.atributes.spr
        Player.crit = Player.crit + this.atributes.crit
        Player.hpTotal = Player.hpTotal + this.atributes.hp
        Player.hpActual = Player.hpActual + this.atributes.hp
        Player.mpTotal = Player.mpTotal + this.atributes.mp
        Player.mpActual = Player.mpActual + this.atributes.mp

        Player.EquipItem(this)
    }
    UnEquip(){
        Player.atq = Player.atq - this.atributes.atq
        Player.mag = Player.spr - this.atributes.mag
        Player.def = Player.def - this.atributes.def
        Player.spr = Player.spr - this.atributes.spr
        Player.crit = Player.crit - this.atributes.crit
        Player.hpTotal = Player.hpTotal - this.atributes.hp
        Player.hpActual = Player.hpActual - this.atributes.hp
        Player.mpTotal = Player.mpTotal - this.atributes.mp
        Player.mpActual = Player.mpActual - this.atributes.mp
    }
/*
    SetAtributes(values){

        if(values.atq == undefined) values.atq = 0
        if(values.mag == undefined) values.mag = 0
        if(values.def == undefined) values.def = 0
        if(values.spr == undefined) values.spr = 0
        if(values.crit == undefined) values.crit = 0
        if(values.hp == undefined) values.hp = 0
        if(values.mp == undefined) values.mp = 0
        
        if(values.description == undefined) values.description = ''
        if(values.effect == undefined) values.effect = ''

        if(values.mods == undefined) values.mods = {}
        if(values.mods.AcuaticKiller == undefined) values.mods.AcuaticKiller = 0
        if(values.mods.BeastKiller == undefined) values.mods.BeastKiller = 0
        if(values.mods.DragonKiller == undefined) values.mods.DragonKiller = 0
        if(values.mods.ElementKiller == undefined) values.mods.ElementKiller = 0
        if(values.mods.FlyingKiller == undefined) values.mods.FlyingKiller = 0
        if(values.mods.InsectKiller == undefined) values.mods.InsectKiller = 0
        if(values.mods.HumanKiller == undefined) values.mods.HumanKiller = 0
        if(values.mods.UndeadKiller == undefined) values.mods.UndeadKiller = 0

        return {
            atq: values.atq,
            mag: values.mag,
            def: values.def,
            spr: values.spr,
            crit: values.crit,
            hp: values.hp,
            mp: values.mp,
            effect: values.effect,
            mods: {
                AcuaticKiller:    values.mods.AcuaticKiller,
                BeastKiller:      values.mods.BeastKiller,
                DragonKiller:     values.mods.DragonKiller,
                ElementKiller:    values.mods.ElementKiller,
                FlyingKiller:     values.mods.FlyingKiller,
                InsectKiller:     values.mods.InsectKiller,
                HumanKiller:      values.mods.HumanKiller,
                UndeadKiller:     values.mods.UndeadKiller, 
            }
        }
    }
*/
    Take(){
        Player.inventory.push(this)
    }

}

class Helm extends equipableItem {
    constructor(name,quality,img){
        super(name,quality,img)
        this.type = 'Casco'
        this.SetAtributes();
    }
}

class Accesory extends equipableItem{
    constructor(name,quality,img){
        super(name,quality,img)
        this.type = 'Accesorio'
        this.SetAtributes();
    }
}
//Armas
class Weapons extends equipableItem{
    constructor(name,quality,img){
        super(name,quality,img)
        this.type = 'Arma';
        this.SetAtributes();
    }
}
// Tipos de armas
class Axe extends Weapons {
    constructor(name,quality,img){
        super(name,quality,img)
        this.subType = 'Hacha';
        this.SetAtributes();
    }
}

class Lance extends equipableItem {
    constructor(name,quality,img){
        super(name,quality,img)
        this.subType = 'Lanza';
        this.type = 'Arma'
        this.SetAtributes();
    }
}

class Dagger extends equipableItem {
    constructor(name,quality,img){
        super(name,quality,img)
        this.subType = 'Daga';
        this.SetAtributes();
    }
}

class Hammer extends equipableItem {
    constructor(name,quality,img){
        super(name,quality,img)
        this.subType = 'Martillo';
        this.SetAtributes();
    }
}

class Sword extends equipableItem {
    constructor(name,quality,img){
        super(name,quality,img)
        this.subType = 'Espada';
        this.SetAtributes();
    }
}

class Skill {
    constructor({name,dmg,type=0,range=0}){
        this.name = name;
        this.dmg = Number((dmg).toFixed(0));
        
        if(type == 0){
            if(range == 0){
                this.use = this.MinorOffensive;
            } else {
                this.use = this.MajorOffensive;
            }
        } else {
            this.use = this.Healing ;
        }
    }

    MinorOffensive (target){
        console.log('daño menor')
        //target.hp = target.hp - ((this.dmg + (this.atributes[0].values.actual*0.2) - (target.def)))
    }

    MajorOffensive (target) {
        console.log('daño mayor')
        //target.hp = target.hp - ((this.dmg + (this.atributes[0].values.actual*0.5) - (target.def)))
    }

    Healing (target){
        console.log('sanación')
        //target.hp = target.hp + dmg
    }
}
// NPC 
class Npc {
    constructor(name,type,img,
        range=Dictionary.ranges.normal){
        this.name = name
        this.type = type
        this.image = img;
        this.rarity = range
        this.skills = []
        this.drops = []
        this.id = npcID;

        npcID = this.id+1
        this.SetStats();
        this.SetSkills();
    }

    /*
    
        habilidades básicas
        1. daño normal
        2. sanación / defensivo
        3. daño fuerte

        class skill {
            constructor({name,dmg,type:0,range:0}){
                this.name = name;
                this.dmg = dmg;

                if(type == 0){
                    if(range == 0){
                        this.use = this.MinorOffensive;
                    } else {
                        this.use = this.MajorOffensive;
                    }
                } else {
                    this.use = this.Healing ;
                }
            }

            MinorOffensive (target)=>{
                target.hp = target.hp - ((this.dmg + (this.atributes[0].values.actual*0.2) - (target.def)))
            },

            MajorOffensive () =>{
                target.hp = target.hp - ((this.dmg + (this.atributes[0].values.actual*0.5) - (target.def)))
            },

            Healing (target)=>{
                target.hp = target.hp + dmg
            }
        }
        
        new skill = {
            name: '',
            dmg : 0,
            use: (target)=>{
                target.hp = target.hp - ((this.dmg + (this.atributes[0].values.actual*0.2) - (target.def)))
                }
        }

        new skill = {
            name: '',
            dmg : 0,
            use: (target)=>{
                target.hp = target.hp + dmg
                }
        }

        new skill = {
            name: '',
            dmg : 10,
            use : (target)=>{
                target.hp = target.hp - ((this.dmg + (this.atributes[0].values.actual*0.5) - (target.def)))
                }
        }
    
    */

    SetStats(){
        switch (this.range) {
            case Dictionary.ranges.elite:
                this.atributes = [
                    {
                        name: 'ATQ',
                        values: {
                            actual: '',
                            total : Player.atributes[0].values.base +random(35,75),
                        }
                    },
                    {
                        name: 'MAG',
                        values:{
                            actual : '',
                            total : Player.atributes[1].values.actual+random(30,50)
                        }
                    },
                    {
                        name: 'DEF',
                        values:{
                            actual : '',
                            total : Player.atributes[2].values.actual+random(30,70)
                        }
                    },
                    {
                        name: 'SPR',
                        values:{
                            actual: '',
                            total : Player.atributes[3].values.actual+random(30,70)
                        }
                    },
                    {
                        name: 'HP',
                        values:{
                            actual : '',
                            total  :Player.atributes[4].values.total + random(70,150)
                        }
                    },
                    {
                        name: 'MP',
                        values:{
                            actual: '',
                            total : Player.atributes[5].values.total +random(40,80)
                        }
                    }  
                ]

                this.lvl      = Player.lvl+3
                this.dropGold = 40 * (this.lvl*3.5);
                this.dropExp  = 60 * (this.lvl*3.5);
                break;
            case Dictionary.ranges.rare:
                this.atributes = [
                    {
                        name: 'ATQ',
                        values:{
                            actual : '',
                            total  : Player.atributes[0].values.base  +random(50,150)
                        }
                    },
                    {
                        name: 'MAG',
                        values:{
                            actual: '',
                            total : Player.atributes[1].values.actual+random(50,150)
                        }
                    },
                    {
                        name: 'DEF',
                        values: {
                            actual : '',
                            total  : Player.atributes[2].values.actual+random(30,150)
                        }
                    },
                    {
                        name: 'SPR',
                        values: {
                            actual: '',
                            total : Player.atributes[3].values.actual+random(30,200)
                        }
                    },
                    {
                        name: 'HP',
                        values: {
                            actual: '',
                            total : Player.atributes[4].values.total +random(140,250) 
                        } 
                    },
                    {
                        name: 'MP',
                        values: {
                            actual: '',
                            total: Player.atributes[5].values.total +random(100,150)
                        }
                    }
                ]

                this.lvl      = Player.lvl+2;
                this.dropGold = 70 * (this.lvl*3.5);
                this.dropExp  = 90 * (this.lvl*3.5);
                break;
            default:
                this.atributes = [
                    {
                        name: 'ATQ',
                        values: {
                            actual: '',
                            total : Player.atributes[0].values.base  +random(5,35)
                        }
                    },
                    {
                        name: 'MAG',
                        values: {
                            actual: '',
                            total : Player.atributes[1].values.actual+random(10,30)
                        }
                    },
                    {
                        name: 'DEF',
                        values: {
                            actual: '',
                            total : Player.atributes[2].values.actual+random(10,20)
                        }
                    },
                    {
                        name: 'SPR',
                        values: {
                            actual: '',
                            total : Player.atributes[3].values.actual+random(10,20)
                        }
                    },
                    {
                        name: 'HP',
                        values:{
                            actual:  '',
                            total : Player.atributes[4].values.total +random(0,30)
                        } 
                    },
                    {
                        name: 'MP',
                        values: {
                            actual: '',
                            total : Player.atributes[5].values.total +random(0,10)
                        }
                    }
                ]

                this.lvl      = Player.lvl;
                this.dropGold = 15 * (this.lvl*3.5);
                this.dropExp  = 10 * (this.lvl*3.5);
                break;
        }

        this.atributes[0].values.actual = this.atributes[0].values.total
        this.atributes[1].values.actual = this.atributes[1].values.total
        this.atributes[2].values.actual = this.atributes[2].values.total
        this.atributes[3].values.actual = this.atributes[3].values.total
        this.atributes[4].values.actual = this.atributes[4].values.total
        this.atributes[5].values.actual = this.atributes[5].values.total

        this.dropGold = Number(this.dropGold.toFixed(0));
        this.dropExp = Number(this.dropExp.toFixed(0));

    }

    SetSkills(){
        // verificar la rareza del npc
        // verificar el tipo de npc
        // agregar las habilidades a este

        const GetNormalSkill = ()=>{
            let box = []
            switch (this.type) {
                case Dictionary.types.Acuatic:
                    box = [
                        // daño normal
                        new Skill({ name: 'Rayo aureo', dmg: this.atributes[0].values.total * 1.2 }),
                        // sanación
                        new Skill({ name: 'Regeneración', dmg: this.atributes[0].values.total * 2, type: 1 }),
                        // daño fuerte
                        new Skill({ name: 'Corte azur', dmg: this.atributes[0].values.total * 1.5, range: 1 })
                    ]
                    break;
                case Dictionary.types.Beast:
                    box = [
                        // daño normal
                        new Skill({ name: 'Mordedura', dmg: this.atributes[0].values.total * 1.2 }),
                        // sanación
                        new Skill({ name: 'Lamer heridas', dmg: this.atributes[0].values.total * 2, type: 1 }),
                        // daño fuerte
                        new Skill({ name: 'Cortar y trocear', dmg: this.atributes[0].values.total * 1.5, range: 1 })
                    ]
                    break;
                case Dictionary.types.Dragon:
                    box = [
                        // daño normal
                        new Skill({ name: 'Aliento', dmg: this.atributes[0].values.total * 1.2 }),
                        // sanación
                        new Skill({ name: 'Furía de dragón', dmg: this.atributes[0].values.total * 2, type: 1 }),
                        // daño fuerte
                        new Skill({ name: 'Coletazo', dmg: this.atributes[0].values.total * 1.5, range: 1 })
                    ]
                    break;
                case Dictionary.types.Element:
                    box = [
                        // daño normal
                        new Skill({ name: 'Rayo elemental', dmg: this.atributes[0].values.total * 1.2 }),
                        // sanación
                        new Skill({ name: 'Don de la naturaleza', dmg: this.atributes[0].values.total * 2, type: 1 }),
                        // daño fuerte
                        new Skill({ name: 'Dominio de los elementos', dmg: this.atributes[0].values.total * 1.5, range: 1 })
                    ]
                    break;
                case Dictionary.types.Flying:
                    box = [

                        // daño normal
                        new Skill({ name: 'Alas de acero', dmg: this.atributes[0].values.total * 1.2 }),
                        // sanación
                        new Skill({ name: 'Ultimo aliento', dmg: this.atributes[0].values.total * 2, type: 1 }),
                        // daño fuerte
                        new Skill({ name: 'Vendaval', dmg: this.atributes[0].values.total * 1.5, range: 1 })
                    ]
                    break;
                case Dictionary.types.Humanoid:
                    box = [
                        // daño normal
                        new Skill({ name: 'Eviscerar', dmg: this.atributes[0].values.total * 1.2 }),
                        // sanación
                        new Skill({ name: 'Primeros auxilios', dmg: this.atributes[0].values.total * 2, type: 1 }),
                        // daño fuerte
                        new Skill({ name: 'Mutilar', dmg: this.atributes[0].values.total * 2, range: 1 })
                    ]
                    break;
                case Dictionary.types.Insect:
                    box = [
                        // daño normal
                        new Skill({ name: 'Corte agil', dmg: this.atributes[0].values.total * 1.2 }),
                        // sanación
                        new Skill({ name: 'Evolución', dmg: this.atributes[0].values.total * 2, type: 1 }),
                        // daño fuerte
                        new Skill({ name: 'Picadura', dmg: this.atributes[0].values.total * 1.5, range: 1 })
                    ]
                    break;
                case Dictionary.types.Undead:
                    box = [
                        // daño normal
                        new Skill({ name: 'Golpe purulento', dmg: this.atributes[0].values.total * 1.2 }),
                        // sanación
                        new Skill({ name: 'Extraer vida', dmg: this.atributes[0].values.total * 2, type: 1 }),
                        // daño fuerte
                        new Skill({ name: 'Toque de muerte', dmg: this.atributes[0].values.total * 1.5, range: 1 })
                    ]
                    break;
                default:
                    break;
            }
            this.skills = box;
        }

        const GetRareSkills = ()=>{

            let box = []
            switch (this.type) {
                case Dictionary.types.Acuatic:
                    box = [
                        // daño normal
                        new Skill({ name: 'Bala acuatica', dmg: this.atributes[0].values.total * 1.5 }),
                        // sanación
                        new Skill({ name: 'Regeneración', dmg: this.atributes[0].values.total * 2.5, type: 1 }),
                        // daño fuerte
                        new Skill({ name: 'Corte helado', dmg: this.atributes[0].values.total * 2, range: 1 })
                    ]
                    break;
                case Dictionary.types.Beast:
                    box = [
                        // daño normal
                        new Skill({ name: 'Rugido', dmg: this.atributes[0].values.total * 1.5 }),
                        // sanación
                        new Skill({ name: 'Lider de la manada', dmg: this.atributes[0].values.total * 2.5, type: 1 }),
                        // daño fuerte
                        new Skill({ name: 'Destrozar', dmg: this.atributes[0].values.total * 2, range: 1 })
                    ]
                    break;
                case Dictionary.types.Dragon:
                    box = [
                        // daño normal
                        new Skill({ name: 'Cuchillada Garra', dmg: this.atributes[0].values.total * 1.5 }),
                        // sanación
                        new Skill({ name: 'Rugido de dragón', dmg: this.atributes[0].values.total * 2.5, type: 1 }),
                        // daño fuerte
                        new Skill({ name: 'Gigallamarada', dmg: this.atributes[0].values.total * 2, range: 1 })
                    ]
                    break;
                case Dictionary.types.Element:
                    box = [
                        // daño normal
                        new Skill({ name: 'Rayo Psíquico', dmg: this.atributes[0].values.total * 1.5 }),
                        // sanación
                        new Skill({ name: 'Calma mental', dmg: this.atributes[0].values.total * 2.5, type: 1 }),
                        // daño fuerte
                        new Skill({ name: 'HiperRayo', dmg: this.atributes[0].values.total * 2, range: 1 })
                    ]
                    break;
                case Dictionary.types.Flying:
                    box = [

                        // daño normal
                        new Skill({ name: 'Corte alado', dmg: this.atributes[0].values.total * 1.5 }),
                        // sanación
                        new Skill({ name: 'Vientos sanadores', dmg: this.atributes[0].values.total * 2.5, type: 1 }),
                        // daño fuerte
                        new Skill({ name: 'Huracán', dmg: this.atributes[0].values.total * 2, range: 1 })
                    ]
                    break;
                case Dictionary.types.Humanoid:
                    box = [
                        // daño normal
                        new Skill({ name: 'Tajo sombrío', dmg: this.atributes[0].values.total * 1.5 }),
                        // sanación
                        new Skill({ name: 'Fuerza imparable', dmg: this.atributes[0].values.total * 2.5, type: 1 }),
                        // daño fuerte
                        new Skill({ name: 'Asesinar', dmg: this.atributes[0].values.total * 2, range: 1 })
                    ]
                    break;
                case Dictionary.types.Insect:
                    box = [
                        // daño normal
                        new Skill({ name: 'Corte X', dmg: this.atributes[0].values.total * 1.5 }),
                        // sanación
                        new Skill({ name: 'Sanguijuela', dmg: this.atributes[0].values.total * 2.5, type: 1 }),
                        // daño fuerte
                        new Skill({ name: 'Aguijón caído', dmg: this.atributes[0].values.total * 2, range: 1 })
                    ]
                    break;
                case Dictionary.types.Undead:
                    box = [
                        // daño normal
                        new Skill({ name: 'Torrente del vacío', dmg: this.atributes[0].values.total * 1.5 }),
                        // sanación
                        new Skill({ name: 'Rendirse a la locura', dmg: this.atributes[0].values.total * 2.5, type: 1 }),
                        // daño fuerte
                        new Skill({ name: 'Muerte y Locura', dmg: this.atributes[0].values.total * 2, range: 1 })
                    ]
                    break;
                default:
                    break;
            }
            this.skills = box;
        }

        const GetBossSkills =()=>{
            // Agregar algoritmo para
            // las habilidades de 
            // Jefes
        }

        switch (this.rarity) {
            case Dictionary.ranges.boss:
                // Habilidades para Elites
                return GetBossSkills();
                break;
            case Dictionary.ranges.rare:
                // Habilidades para Rares
                return GetRareSkills();
                break;
            default:
                // Habilidades básicas
                return GetNormalSkill();
                break;
        }
    }

    SetDrops(materials){
        switch (this.type) {
            case Dictionary.types.Acuatic:
                materials.Acuatic.forEach(element => {
                    this.drops.push(element);
                });
                break;
            case Dictionary.types.Beast:
                materials.Beast.forEach(element => {
                    this.drops.push(element)
                });
                break;
            case Dictionary.types.Dragon:
                materials.Dragon.forEach(element =>{
                    this.drops.push(element)
                })
                break;
            case Dictionary.types.Element:
                materials.Element.forEach(element =>{
                    this.drops.push(element)
                })
                break;
            case Dictionary.types.Flying:
                materials.Flying.forEach(element =>{
                    this.drops.push(element)
                })
                break;
            case Dictionary.types.Humanoid:
                materials.Humanoid.forEach(element =>{
                    this.drops.push(element)
                })
                break;
            case Dictionary.types.Insect:
                materials.Insect.forEach(element =>{
                    this.drops.push(element)
                })
                break;
            case Dictionary.types.Undead:
                materials.Undead.forEach(element =>{
                    this.drops.push(element)
                })
                break;
            default:
                materials.Element.forEach(element =>{
                    this.drops.push(element)
                })
                break;
        }
    }

    GetItem(){
    /*
        enviar elementos del npc al inventario del jugador
        
    */        
    }
}

const crear = {
    Armor   : ({ name, quality = 'normal', image }) => {
        return new Armor(name, quality, image)
    },
    Helm    : ({ name, quality = 'normal', image }) => {
        return new Helm(name, quality, image)
    },
    Accesory: ({ name, quality = 'normal', image }) => {
        return new Accesory(name, quality, image)
    },
    Axe     : ({ name, image ,quality = 'normal'}) => {
        return new Axe(name, quality, image)
    },
    Lance   : ({ name, quality = 'normal', image }) => {
        return new Lance(name, quality, image)
    },
    Dagger  : ({ name, quality = 'normal', image }) => {
        return new Dagger(name, quality, image)
    },
    Hammer  : ({ name, quality = 'normal', image }) => {
        return new Hammer(name, quality, image)
    },
    Sword   : ({ name, quality = 'normal', image }) => {
        return new Sword(name, quality, image)
    },
    Skill    : ({name,descriptions,cost,
        dmg, image, type = 'daño' }) => {
        return new Skill({
            name: name,
            descriptions: descriptions,
            cost: cost,
            dmg: dmg,
            image: image,
            type: type
        })
    },
    NpcNormal: ({name,type,image}) => {
        return new Npc(name,type,image);
    },
    NpcRare  : ({name,type,image}) => {
        return new Npc(name,type,image,Dictionary.ranges.rare)
    },
    NpcBoss  : ({name,type,image}) => {
        return new Npc(name,type,image,Dictionary.ranges.boss)
    },
    // revisar si es necesario
    Material: (name,image) => {
        return new Material(name,image)
    },
    Consumable: ({}) => {
        // en construcción
    },

    LSDataBase: (data)=>{
        // agregar arreglo de base de datos
        localStorage.setItem('Forest_Items-Data',JSON.stringify(data));
    },
    LoadItemsDataBase: ()=>{
        return JSON.parse(localStorage.getItem('Forest_Items-Data'));
    }
}


export default crear;