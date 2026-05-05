// Mapas predefinidos - Cada número representa un tipo de estructura (0-5) o -1 para agujero
// Los valores corresponden a los casos en generateStructure()

const PREDEFINED_MAPS = {
    // MAPA 1: Difícil - con muchos agujeros y estructuras variadas
    map1: [
        // Inicio seguro (sin agujeros)
        0, 0, 1, 2, 3, 4, -1, -1, 5, 0,
        // Sección con agujeros
        1, -1, -1, 2, 3, -1, 4, 0, -1, 5,
        // Sección media
        0, 1, 2, -1, -1, 3, 4, 5, 0, 1,
        // Sección desafiante
        -1, 2, -1, 3, 4, -1, 5, 0, 1, -1,
        // Más estructuras
        2, 3, -1, 4, 5, 0, -1, 1, 2, 3,
        // Sección final (más fácil cerca del castillo)
        4, 5, 0, 1, 2, 3, 4, 5, 0, 1,
        // Extra para llenar
        2, 3, 4, 5, 0, 1, 2, 3, 4, 5,
        // Más extra
        0, 1, 2, 3, 4, 5, 0, 1, 2, 3,
        // Penúltima sección
        4, 5, 0, 1, 2, 3, 4, 5, 0, 1,
        // Última sección (segura antes del castillo)
        2, 3, 4, 5, 0, 1, 2, 3, 4, 5
    ],

    // MAPA 2: Moderado - más balanceado
    map2: [
        // Inicio seguro
        0, 1, 2, 3, -1, 4, 5, 0, 1, 2,
        // Sección con pocos agujeros
        3, 4, -1, 5, 0, 1, 2, 3, -1, 4,
        // Sección intermedia
        5, 0, 1, 2, 3, -1, 4, 5, 0, 1,
        // Variación de estructuras
        2, -1, 3, 4, 5, 0, 1, -1, 2, 3,
        // Sección normal
        4, 5, 0, 1, 2, 3, 4, 5, 0, -1,
        // Más variedad
        1, 2, 3, 4, -1, 5, 0, 1, 2, 3,
        // Aumentar dificultad
        4, -1, 5, 0, 1, 2, 3, 4, 5, -1,
        // Normalizar
        0, 1, 2, 3, 4, 5, 0, 1, 2, 3,
        // Penúltima
        4, 5, 0, -1, 1, 2, 3, 4, 5, 0,
        // Final (segura)
        1, 2, 3, 4, 5, 0, 1, 2, 3, 4
    ]
};

// Variable para seleccionar el mapa actual
let currentMapIndex = 1; // 1 o 2

function setCurrentMap(mapNumber) {
    if (mapNumber === 1 || mapNumber === 2) {
        currentMapIndex = mapNumber;
    }
}

function getCurrentMapData() {
    return currentMapIndex === 1 ? PREDEFINED_MAPS.map1 : PREDEFINED_MAPS.map2;
}
