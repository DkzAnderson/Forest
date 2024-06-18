
// Utiliza import.meta.glob para cargar imágenes de tipos específicos

const accesories = import.meta.glob('../images/accesories/*.{webp,jpg,png}', { eager: true });
const armors = import.meta.glob('../images/armors/*.{webp,jpg,png}', { eager: true });
const backgrounds = import.meta.glob('../images/backgrounds/*.{webp,jpg,png}', { eager: true });
const consumables = import.meta.glob('../images/consumables/*.{webp,jpg,png}', { eager: true });
const helms = import.meta.glob('../images/helms/*.{webp,jpg,png}', { eager: true });
const materials = import.meta.glob('../images/materials/*.{webp,jpg,png}', { eager: true });
const npc = import.meta.glob('../images/npc/*.{webp,jpg,png,gif}', { eager: true });
const weapons = import.meta.glob('../images/weapons/**/*.{webp,jpg,png}', { eager: true });
// Convierte los módulos de imagen en un array de URLs de imágenes
const images = {
    accesories: Object.values(accesories).map(module => module.default),
    armors: Object.values(armors).map(module => module.default),
    backgrounds: Object.values(backgrounds).map(module => module.default),
    consumables: Object.values(consumables).map(module => module.default),
    helms: Object.values(helms).map(module => module.default),
    materials: Object.values(materials).map(module => module.default),
    npc : Object.values(npc).map(module => module.default),
    weapons: Object.values(weapons).map(module => module.default)
}



export default images ;