import crear from "./class"
import images from './imagesData'


const materialsBox = {
    Acuatic:  [
        crear.Material('Fragmento azur',images.materials[7]),
        crear.Material('Gema blanca',images.materials[38]),
        crear.Material('Perla aqua', images.materials[6]),
        crear.Material('Orbe de agua real',images.materials[28]),
    ],
    Beast:    [
        crear.Material('Colmillo de Lobo',images.materials[14]),
        crear.Material('Colmillo de pantera',images.materials[20]),
        crear.Material('Escama dura',images.materials[33]),
        crear.Material('Cola blanca',images.materials[39])
    ],
    Dragon:   [   
        crear.Material('Huevo de poder',images.materials[11]),
        crear.Material('Huevo arcoiris',images.materials[22]),
        crear.Material('Escama de dragon',images.materials[15]),
        crear.Material('Huevo rojo',images.materials[24]),
        crear.Material('Orbe de viento real',images.materials[29]),
    ],
    Element:  [
        crear.Material('Perla del abismo',images.materials[1]),
        crear.Material('Alcryst',images.materials[3]),
        crear.Material('Orbe oscuro real',images.materials[25]),
        crear.Material('Orbe de tierra real',images.materials[26]),
        crear.Material('Orbe de fuego real',images.materials[27]),
    ],
    Flying:   [
        crear.Material('Ala abominable',images.materials[0]),
        crear.Material('Ala carmesí',images.materials[10]),
        crear.Material('Alas amenazantes',images.materials[18]),
        crear.Material('Pluma de rapaz',images.materials[23]),
        crear.Material('Pluma crepuscular',images.materials[34]),
        crear.Material('Pluma de draco blanca',images.materials[37]),
    ],
    Insect:   [
        crear.Material('Flor acromática',images.materials[2]),
        crear.Material('Cadaver de mosca',images.materials[9]),
        crear.Material('Flor de rocío',images.materials[13]),
        crear.Material('Floración del arco iris',images.materials[21]),
        crear.Material('Raiz de grito',images.materials[30]),
        crear.Material('semilla de vida',images.materials[31]),
        crear.Material('Error de gloria',images.materials[16]),
    ],
    Humanoid: [
        crear.Material('Hoja alterna',images.materials[4]),
        crear.Material('Hoja rota',images.materials[8]),
        crear.Material('Madera violeta',images.materials[35]),
        crear.Material('Madera desgastada',images.materials[36]),
        crear.Material('Madera',images.materials[17]),
    ],
    Undead:   [
        crear.Material('Hueso antiguo',images.materials[5]),
        crear.Material('Hueso de otro mundo',images.materials[19]),
        crear.Material('Hueso de acero',images.materials[32]),
        crear.Material('Materia oscura',images.materials[12]),
    ],
}

export default materialsBox