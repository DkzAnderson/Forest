import crear from "./class";

let player = {
  name: 'blodyMary',
  image: '../../backend/images/npc/LordOfDeath.gif',
  atributes: [
    {
      name: 'ATQ', values: {
        /*
          usar el valor base para setear valores fijos 
          y el actual para sumar porcentajes en equipo
          se mostrara en pantalla el actual y el total
          al desequipar objetos que contengan estadisticas % 
          usar el valor base
        */
        actual: 35,
        base: 35
      }
    },
    {
      name: 'MAG', values: {
        actual: 15,
        base: 15
      }
    },
    {
      name: 'DEF', values: {
        actual: 30,
        base: 30
      }
    },
    {
      name: 'SPR', values: {
        actual: 20,
        base: 20
      }
    },
    {
      name: 'HP', values: {
        /*
          usar el valor base para setear valores fijos 
          y el total para sumar porcentajes en equipo
          se mostrara en pantalla el actual y el total
        */
        actual: 1000,
        total: 1000,
        base: 1000
      }
    },
    {
      name: 'MP', values: {
        actual: 250,
        total: 250,
        base: 250
      }
    }
  ],
  mods: [
    { name: 'AcuaticKiller' , value: 0 },
    { name: 'BeastKiller'   , value: 0 },
    { name: 'DragonKiller'  , value: 0 },
    { name: 'ElementKiller' , value: 0 },
    { name: 'FlyingKiller'  , value: 0 },
    { name: 'InsectKiller'  , value: 0 },
    { name: 'HumanKiller'   , value: 0 },
    { name: 'UndeadKiller'  , value: 0 },
  ],
  skills: [/*
      crear.Skill({
        name        : 'Golpe Mortal',
        descriptions : {
          long : 'Golpe de arma que inflinje daño fisico de 50 + 80% de ATQ',
          short: 'Daño fisico al enemigo.'
        },
        image       : '',
        cost        : 15,
        dmg         : 35,
      }),

      crear.Skill({
        name       : 'Primeros auxilios',
        description: 'Sana al jugador un 10% de su hp total',
        image      : '',
        descriptions: {
          long : 'Sana al jugador un 10% de salud maxima.',
          short: 'Sanación pequeña.'
        },
        cost  : 20,
        dmg: 10, 
        type: 'sanación'
      })*/
  ],
  inventory: [
  ],
  lvl: 1,
  experience: {
    actual: 0,
    nextLvl: 200,
  },
  equipment: [
    {
      name: 'Arma',
      value: undefined
    },
    {
      name: 'Casco',
      value: undefined
    },
    {
      name: 'Armadura',
      value: undefined
    },
    {
      name: 'Accesorio 1',
      value: undefined
    },
    {
      name: 'Accesorio 2',
      value: undefined
    }

  ],
  // crear nuevo perfil
  NewUser(name) {
    this.name = name;
  },
  // guardar datos de perfil
  SaveData() {
    let infoLS = JSON.parse(localStorage.getItem('Forest_Saved-Games'));
    let succesfull = true;
    /*
        - LS : Local Storage
        1. Buscamos la información guardada en la LS.

        2. Confirmamos si existe o no información guardada
        en la LS.

        3. Si hay información obtener el arreglo con las partidas
        guardadas.

        3.1 Modificar y guardar el nuevo arreglo en la LS.

        4. Si no hay información crear un nuevo arreglo.

        4.1 Agregar los datos actuales a un nuevo arreglo.
        
    */

    if (infoLS == undefined) {
      // Paso 4
      const data = []
      data.push(this);
      localStorage.setItem('Forest_Saved-Games', JSON.stringify(data))
      //console.log('guardado nuevo arreglo en la LS.');
    } else {
      let x = false;
      // Paso 3
      infoLS.forEach(element => {
        // Revisar si hay algún perfil con el mismo nombre.
        if (element.name == this.name) {
          //console.log('Ya existe un perfil con este nombre.')
          succesfull = false;
        } 
      });

      if (succesfull){
      // si no, agregar el perfil al arreglo 
      infoLS.push(this)
      //console.log('Guardado nuevo perfil en LS existente.')
      localStorage.setItem('Forest_Saved-Games', JSON.stringify(infoLS));
      }


    }

    return succesfull;
  },

  SaveDataOverWrite(name){
    // se traen los perfiles guardados
    let infoLS = JSON.parse(localStorage.getItem('Forest_Saved-Games'))
    // se busca el perfil existente que coincida con el nombre
    const overWrite = infoLS.findIndex(element => element.name === name)
    // se sobrescribe.
    infoLS[overWrite] = this;
    // y se guarda el nuevo arreglo
    localStorage.setItem('Forest_Saved-Games',JSON.stringify(infoLS));
  },

  LoadData(data){
    //this = data;
    this.name = data.name;
    this.image = data.image;
    this.atributes = data.atributes;
    this.mods = data.mods;
    this.skills = data.skills;
    this.inventory = data.inventory;
    this.lvl = data.lvl;
    this.experience = data.experience;
    this.equipment = data.equipment;
  },

  LoadAllData() {
    /*
        LS: Local Storage
        1. Cargar información de la LS.
        2. Si no hay información no hacer nada.
        3. Si hay información devolver una variable
        con los datos cargados.
        4. renderizar según los datos cargados.
    
    */

    const infoLS = JSON.parse(localStorage.getItem('Forest_Saved-Games'))

    if (infoLS != undefined) {
      return infoLS
    } else {
      return 'Empty'
    }
  },

  UnEquipItem(item) {
    // evalua si es un item raro o legendario
    if (item.quality === 'Legendario' || item.quality === 'Raro') {
      // y si es un arma o accesorio
      if (item.type === 'Arma' || item.type === 'Accesorio') {
        // ya que solo estos tienen modificadores
        player.mods[0].value -= item.mods[0].value;
        player.mods[1].value -= item.mods[1].value;
        player.mods[2].value -= item.mods[2].value;
        player.mods[3].value -= item.mods[3].value;
        player.mods[4].value -= item.mods[4].value;
        player.mods[5].value -= item.mods[5].value;
        player.mods[6].value -= item.mods[6].value;
        player.mods[7].value -= item.mods[7].value;
      }
    }

    player.atributes[0].values.actual -= item.atributes[0].value;
    player.atributes[1].values.actual -= item.atributes[1].value;
    player.atributes[2].values.actual -= item.atributes[2].value;
    player.atributes[3].values.actual -= item.atributes[3].value;
    player.atributes[4].values.actual -= item.atributes[4].value;
    player.atributes[4].values.total -= item.atributes[4].value;
    player.atributes[5].values.actual -= item.atributes[5].value;
    player.atributes[5].values.total -= item.atributes[5].value;

  },

  EquipItem(item, slot) {
    const addAtributes = () => {
      // ATQ
      this.atributes[0].values.actual += item.atributes[0].value;
      // MAG 
      this.atributes[1].values.actual += item.atributes[1].value;
      // DEF
      this.atributes[2].values.actual += item.atributes[2].value;
      // SPR
      this.atributes[3].values.actual += item.atributes[3].value;
      // HP
      this.atributes[4].values.actual += item.atributes[4].value;
      this.atributes[4].values.total += item.atributes[4].value;
      // MP
      this.atributes[5].values.actual += item.atributes[5].value;
      this.atributes[5].values.total += item.atributes[5].value;
      // Mods
      if (item.quality === 'Raro' || item.quality === 'Legendario') {
        if (item.type === 'Accesorio' || item.type === 'Arma') {
          this.mods[0].value += item.mods[0].value;
          this.mods[1].value += item.mods[1].value;
          this.mods[2].value += item.mods[2].value;
          this.mods[3].value += item.mods[3].value;
          this.mods[4].value += item.mods[4].value;
          this.mods[5].value += item.mods[5].value;
          this.mods[6].value += item.mods[6].value;
          this.mods[7].value += item.mods[7].value;
        }
      }

    }
    // agrega el equipo al slot 
    // correspondiente según su tipo
    switch (item.type) {
      case 'Arma':

        /*
          Para cada Caso primero se evalua si 
          hay un item equipado en el slot y se 
          desequipa antes de ser el caso, 
          luego se procede a equipar el item
          seleccionado.
        */

        if (this.equipment[0].value == undefined) {
          this.equipment[0].value = item
          addAtributes();
        } else {
          this.UnEquipItem(this.equipment[0].value);
          this.equipment[0].value = item
          addAtributes();
        }
        break;
      case 'Armadura':
        if (this.equipment[2].value == undefined) {
          this.equipment[2].value = item
          addAtributes();
        } else {
          this.UnEquipItem(this.equipment[2].value);
          this.equipment[2].value = item
          addAtributes();
        }
        break;
      case 'Casco':
        if (this.equipment[1].value == undefined) {
          this.equipment[1].value = item
          addAtributes();
        } else {
          this.UnEquipItem(this.equipment[1].value);
          this.equipment[1].value = item
          addAtributes();
        }
        break;
      default:
        // Accesorios 
        if (slot == 'Accesorio 1') {
          if (this.equipment[3].value == undefined) {
            this.equipment[3].value = item
            addAtributes();
          } else {
            this.UnEquipItem(this.equipment[3].value);
            this.equipment[3].value = item
            addAtributes();
          }
        } else if (slot == 'Accesorio 2') {
          if (this.equipment[4].value == undefined) {
            this.equipment[4].value = item
            addAtributes();
          } else {
            this.UnEquipItem(this.equipment[4].value);
            this.equipment[4].value = item
            addAtributes();
          }
        }
        break;
    }

  }
}


export default player;