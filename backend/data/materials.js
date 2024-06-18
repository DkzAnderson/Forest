import crear from "./class"

const materialsBox = {
    Acuatic:  [
        crear.Material('Fragmento azur','AzureFragment'),
        crear.Material('Gema blanca','WhiteGem'),
        crear.Material('Perla aqua', 'AquaPearl'),
        crear.Material('Orbe de agua real','RoyalWaterOrb'),
    ],
    Beast:    [
        crear.Material('Colmillo de Lobo','DragonFang'),
        crear.Material('Colmillo de pantera','PantherFang'),
        crear.Material('Escama dura','ToughScale'),
        crear.Material('Cola blanca','WhiteTail')
    ],
    Dragon:   [   
        crear.Material('Huevo de poder','CrystalEggOfPower'),
        crear.Material('Huevo arcoiris','RainbowEgg'),
        crear.Material('Escama de dragon','DragonScale'),
        crear.Material('Huevo rojo','RedEgg'),
        crear.Material('Orbe de viento real','RoyalWindOrb'),
    ],
    Element:  [
        crear.Material('Perla del abismo','AbyssPearl'),
        crear.Material('Alcryst','Alcryst'),
        crear.Material('Orbe oscuro real','RoyalDarkOrb'),
        crear.Material('Orbe de tierra real','RoyalEarthOrb'),
        crear.Material('Orbe de fuego real','RoyalFireOrb'),
    ],
    Flying:   [
        crear.Material('Ala abominable','AbominableWing'),
        crear.Material('Ala carmesí','CreimsonWing'),
        crear.Material('Alas amenazantes','MenacingWings'),
        crear.Material('Pluma de rapaz'),
        crear.Material('Pluma crepuscular','TwilightFeather'),
        crear.Material('Pluma de draco blanca','WhiteDrakeFeather'),
    ],
    Insect:   [
        crear.Material('Flor acromática','AchromaticBlossom'),
        crear.Material('Cadaver de mosca','CorpseFly'),
        crear.Material('Flor de rocío','DewBlossom'),
        crear.Material('Floración del arco iris','RainbowBloom'),
        crear.Material('Raiz de grito','Screamroot'),
        crear.Material('semilla de vida','SeedOfLife'),
        crear.Material('Error de gloria','GloryBug'),
    ],
    Humanoid: [
        crear.Material('Hoja alterna','AlterBlade'),
        crear.Material('Hoja rota','BrokenBlade'),
        crear.Material('Madera violeta','VioletLumber'),
        crear.Material('Madera desgastada','WeatheredWood'),
        crear.Material('Madera','Lumber'),
    ],
    Undead:   [
        crear.Material('Hueso antiguo','AntiqueBone'),
        crear.Material('Hueso de otro mundo','OtherworldyBone'),
        crear.Material('Hueso de acero','SteelBone'),
        crear.Material('Materia oscura','DarkMatter'),
    ],
}

export default materialsBox