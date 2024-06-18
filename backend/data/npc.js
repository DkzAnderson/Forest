import crear from "./class";
import materialsBox from "./materials";



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
  type:Dictionary.types.Beast,image:'ancientMamut'}),

  crear.NpcNormal({name:"Atroce", 
  type:Dictionary.types.Beast,image:"Atroce"}),

  crear.NpcNormal({name:"Bebe lobo de hielo", 
  type:Dictionary.types.Beast,image:"babyIceWolf"}),

  crear.NpcNormal({name:"Oso", 
  type:Dictionary.types.Beast,image:"bear"}),

  crear.NpcNormal({name:"Angel oscuro",
  type:Dictionary.types.Undead,image:"darkAngel"}),

  crear.NpcNormal({name:"Arcangel oscuro",
  type:Dictionary.types.Humanoid,image:"darkAngelMale"}),

  crear.NpcNormal({name:"Caballero oscuro",
  type:Dictionary.types.Undead,image:"Darkknight"}),

  crear.NpcNormal({name:"Dragon oscuro",
  type:Dictionary.types.Dragon,image:"dragonDark"}),

  crear.NpcNormal({name:"Dragon rojo",
  type:Dictionary.types.Dragon, image:"dragonRed"}),

  crear.NpcNormal({name:"Ave fénix", 
  type:Dictionary.types.Flying,image:"fireBird"}),

  crear.NpcNormal({name:"Pez muerto",
  type:Dictionary.types.Undead, image:"fish"}),

  crear.NpcNormal ({name:"Gnoll con martillo",
  type:Dictionary.types.Humanoid,image:"Gnoll"}),

  crear.NpcNormal ({name:"Gnoll con hacha",
  type:Dictionary.types.Humanoid,image:"gnollAxe"}),

  crear.NpcNormal({name:"Golem de piedra",
  type:Dictionary.types.Element, image:"golemCrystal"}),

  crear.NpcNormal ({name:"Grifo",
  type:Dictionary.types.Flying,image: "gryphon"}),

  crear.NpcNormal ({name:"Gran león blanco",
  type:Dictionary.types.Beast, image:"Hillsion"}),

  crear.NpcNormal ({name:"Salamandra de hielo",
  type:Dictionary.types.Beast,image:'iceSalamander'}),

  crear.NpcNormal({name:"Lobo de hielo",
  type:Dictionary.types.Beast,image:"iceWolf"}),

  crear.NpcNormal({name:"Cronos",
  type:Dictionary.types.Humanoid,image:"mageChrono"}),

  crear.NpcNormal({name:"Mago oscuro", 
  type:Dictionary.types.Undead,image:"mageDark"}),

  crear.NpcNormal({name:"Mantis religiosa",
  type:Dictionary.types.Insect,image:"mantis"}),

  crear.NpcNormal({name:"Minotauro",
  type:Dictionary.types.Humanoid,image:"minotaur"}),

  crear.NpcNormal({name:"Guerrero naga",
  type:Dictionary.types.Acuatic,image: "naga"}),

  crear.NpcNormal({name:"Pesadilla",
  type:Dictionary.types.Undead, image:"nightmare"}),

  crear.NpcNormal({name:"Caballero esqueleto",
  type:Dictionary.types.Undead, image:"skeletonKnight"}),

  crear.NpcNormal ({name:"Araña verde",
  type:Dictionary.types.Beast,image:"spiderGreen"}),

  crear.NpcNormal ({name:"Araña roja",
  type:Dictionary.types.Beast, image:"spiderRed"}),

  crear.NpcNormal({name:"Dulce chica",
  type:Dictionary.types.Humanoid,image:"sweetyGirl"}),

  crear.NpcNormal({name:'El "Cracken"',
  type:Dictionary.types.Acuatic,image:"tentacruel"}),

  crear.NpcNormal({name:"Tortuga",
  type:Dictionary.types.Acuatic,image:"turtle"}),

  crear.NpcNormal ({name:"Señor de las Valkyrs",
  type:Dictionary.types.Humanoid, image:"valkyr"}),

  crear.NpcNormal ({name:"Lobo salvaje",
  type:Dictionary.types.Beast,image: "wolf"}),

  // Raros
  crear.NpcRare ({name:"Caballero Sangriento", type:Dictionary.types.Humanoid,
  image:"bloodKnight"}),

  crear.NpcRare({name:"Anima",type:Dictionary.types.Element,
  image:"anima"}),

  crear.NpcRare({name:"Detaler",type:Dictionary.types.Dragon,
  image:"dragon1"}),

  crear.NpcRare ({name:"Experimento-0", type:Dictionary.types.Element,
  image:"experiment-0"}),

  crear.NpcRare ({name:"Experimento-22", type:Dictionary.types.Beast,
  image:"experiment-22"}),

  crear.NpcRare ({name:"Experimento-47", type:Dictionary.types.Undead,
  image:"experiment-47"}),

  crear.NpcRare ({name:"Señor de la muerte", type:Dictionary.types.Undead,
  image:"LordOfDeath"}),

  crear.NpcRare({name:"Maya", type:Dictionary.types.Insect,
  image:"maya"}),

  crear.NpcRare({name:"Reyna de las Valkyrs", type:Dictionary.types.Humanoid,
  image:"valkyrFemale"}),

  crear.NpcRare({name:"Maestro guerrero",type: Dictionary.types.Humanoid,
  image:"warriorMaster"}),
  // Jefes 
  crear.NpcBoss({name:"Rey Dragon", type: Dictionary.types.Dragon,
  image:"dragonKing"}),

  crear.NpcBoss({name:"Wukong",type: Dictionary.types.Beast,
  image:"fihgtKing"}),

  crear.NpcBoss({name:"Experimento-12",type: Dictionary.types.Undead,
  image:"ghost"}),

  crear.NpcBoss({name:"Ifrit",type: Dictionary.types.Element,
  image:"ifrit"}),

  crear.NpcBoss ({name:"Reyna de los insectos",type: Dictionary.types.Insect,
  image:"insectQueen"}),

  crear.NpcBoss({name:"Araña de cristal",type: Dictionary.types.Beast,
  image:"spiderCrystal"}),

  crear.NpcBoss ({name:"Lambda", type: Dictionary.types.Acuatic,
  image:"vper"}),

]

Enemies.forEach(element => {
    element.SetDrops(materialsBox);
});


export default Enemies;