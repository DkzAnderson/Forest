import crear from "./class";
import materialsBox from "./materials";
import images from './imagesData'


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
      elite: "Elite",
      rare:  "Raro"
  } 
}

let Enemies = [
  // Normales
  crear.NpcNormal({name:"Mamut milenario",
  type:Dictionary.types.Beast,image:images.npc[7]}),

  crear.NpcNormal({name:"Atroce", 
  type:Dictionary.types.Beast,image:images.npc[2]}),

  crear.NpcNormal({name:"Bebe lobo de hielo", 
  type:Dictionary.types.Beast,image:images.npc[9]}),

  crear.NpcNormal({name:"Oso", 
  type:Dictionary.types.Beast,image:images.npc[10]}),

  crear.NpcNormal({name:"Angel oscuro",
  type:Dictionary.types.Undead,image:images.npc[14]}),

  crear.NpcNormal({name:"Arcangel oscuro",
  type:Dictionary.types.Humanoid,image:images.npc[15]}),

  crear.NpcNormal({name:"Caballero oscuro",
  type:Dictionary.types.Undead,image:images.npc[3]}),

  crear.NpcNormal({name:"Dragon oscuro",
  type:Dictionary.types.Dragon,image:images.npc[17]}),

  crear.NpcNormal({name:"Dragon rojo",
  type:Dictionary.types.Dragon, image:images.npc[19]}),

  crear.NpcNormal({name:"Ave fénix", 
  type:Dictionary.types.Flying,image:images.npc[24]}),

  crear.NpcNormal({name:"Pez muerto",
  type:Dictionary.types.Undead, image:images.npc[25]}),

  crear.NpcNormal ({name:"Gnoll con hacha",
  type:Dictionary.types.Humanoid,image:images.npc[27]}),

  crear.NpcNormal({name:"Golem de piedra",
  type:Dictionary.types.Element, image:images.npc[28]}),

  crear.NpcNormal ({name:"Grifo",
  type:Dictionary.types.Flying,image: images.npc[30]}),

  crear.NpcNormal ({name:"Gran león blanco",
  type:Dictionary.types.Beast, image:images.npc[5]}),

  crear.NpcNormal ({name:"Salamandra de hielo",
  type:Dictionary.types.Beast,image:images.npc[31]}),

  crear.NpcNormal({name:"Lobo de hielo",
  type:Dictionary.types.Beast,image:images.npc[32]}),

  crear.NpcNormal({name:"Cronos",
  type:Dictionary.types.Humanoid,image:images.npc[35]}),

  crear.NpcNormal({name:"Mago oscuro", 
  type:Dictionary.types.Undead,image:images.npc[36]}),

  crear.NpcNormal({name:"Mantis religiosa",
  type:Dictionary.types.Insect,image:images.npc[37]}),

  crear.NpcNormal({name:"Minotauro",
  type:Dictionary.types.Humanoid,image:images.npc[39]}),

  crear.NpcNormal({name:"Guerrero naga",
  type:Dictionary.types.Acuatic,image: images.npc[40]}),

  crear.NpcNormal({name:"Pesadilla",
  type:Dictionary.types.Undead, image:images.npc[41]}),

  crear.NpcNormal({name:"Caballero esqueleto",
  type:Dictionary.types.Undead, image:images.npc[45]}),

  crear.NpcNormal ({name:"Araña verde",
  type:Dictionary.types.Beast,image:images.npc[47]}),

  crear.NpcNormal ({name:"Araña roja",
  type:Dictionary.types.Beast, image:images.npc[48]}),

  crear.NpcNormal({name:"Dulce chica",
  type:Dictionary.types.Humanoid,image:images.npc[50]}),

  crear.NpcNormal({name:'El "Cracken"',
  type:Dictionary.types.Acuatic,image:images.npc[51]}),

  crear.NpcNormal({name:"Tortuga",
  type:Dictionary.types.Acuatic,image:images.npc[52]}),

  crear.NpcNormal ({name:"Señor de las Valkyrs",
  type:Dictionary.types.Humanoid, image:images.npc[54]}),

  crear.NpcNormal ({name:"Lobo salvaje",
  type:Dictionary.types.Beast,image: images.npc[58]}),

  // Raros
  crear.NpcRare ({name:"Caballero Sangriento", type:Dictionary.types.Humanoid,
  image:images.npc[11]}),

  crear.NpcRare({name:"Anima",type:Dictionary.types.Element,
  image:images.npc[8]}),

  crear.NpcRare({name:"Detaler",type:Dictionary.types.Dragon,
  image:images.npc[16]}),

  crear.NpcRare ({name:"Experimento-0", type:Dictionary.types.Element,
  image:images.npc[20]}),

  crear.NpcRare ({name:"Experimento-22", type:Dictionary.types.Beast,
  image:images.npc[21]}),

  crear.NpcRare ({name:"Experimento-47", type:Dictionary.types.Undead,
  image:images.npc[22]}),

  crear.NpcRare ({name:"Señor de la muerte", type:Dictionary.types.Undead,
  image:images.npc[6]}),

  crear.NpcRare({name:"Maya", type:Dictionary.types.Insect,
  image:images.npc[38]}),

  crear.NpcRare({name:"Reyna de las Valkyrs", type:Dictionary.types.Humanoid,
  image:images.npc[55]}),

  crear.NpcRare({name:"Maestro guerrero",type: Dictionary.types.Humanoid,
  image:images.npc[57]}),
  // Jefes 
  crear.NpcBoss({name:"Rey Dragon", type: Dictionary.types.Dragon,
  image:images.npc[18]}),

  crear.NpcBoss({name:"Wukong",type: Dictionary.types.Beast,
  image:images.npc[23]}),

  crear.NpcBoss({name:"Experimento-12",type: Dictionary.types.Undead,
  image:images.npc[26]}),

  crear.NpcBoss({name:"Ifrit",type: Dictionary.types.Element,
  image:images.npc[33]}),

  crear.NpcBoss ({name:"Reyna de los insectos",type: Dictionary.types.Insect,
  image:images.npc[34]}),

  crear.NpcBoss({name:"Araña de cristal",type: Dictionary.types.Beast,
  image:images.npc[46]}),

  crear.NpcBoss ({name:"Lambda", type: Dictionary.types.Acuatic,
  image:images.npc[56]}),

]

Enemies.forEach(element => {
    element.SetDrops(materialsBox);
});


export default Enemies;