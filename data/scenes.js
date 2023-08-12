const Scenes = {
  stairScene: {
    title: "Escaleras",
    image: "../media/v-tours/1.jpg",
    pitch: -11,
    yaw: -3,
    hotSpot: {
      // Elements
      lights: {
        type: "info",
        pitch: 36,
        yaw: -85,
        text: "Luces de Neón de Bajo Consumo",
        cssClass: "hotSpotElement",
      },

      drawers: {
        type: "info",
        pitch: -39,
        yaw: -72,
        text: "Cómoda Espaciosa para Guardar lo que Necesites",
        cssClass: "hotSpotElement",
      },

      table: {
        type: "info",
        pitch: 7,
        yaw: 14,
        text: "Mesa Plegable de Algarrobo",
        cssClass: "hotSpotElement",
      },

      // Scenes
      nextScene1: {
        type: "custom",
        pitch: -14,
        yaw: 174,
        cssClass: "moveScene",
        text: "Habitación Principal",
        scene: "bedroomScene",
      },

      nextScene2: {
        type: "custom",
        pitch: -9,
        yaw: 3,
        cssClass: "moveScene",
        text: "Sala de Estar",
        scene: "livingroomScene",
      },
    },
  },

  bedroomScene: {
    title: "Habitación Principal",
    image: "/media/v-tours/2.jpg",
    pitch: 10,
    yaw: 180,
    hotSpot: {
      nextScene1: {
        type: "custom",
        pitch: -23,
        yaw: -60,
        text: "Escaleras",
        cssClass: "moveScene",
        scene: "stairScene",
      },

      nextScene2: {
        type: "custom",
        pitch: -65,
        yaw: -122,
        text: "Baño Principal",
        cssClass: "moveScene",
        scene: "bathroomScene",
      },
    },
  },

  bathroomScene: {
    title: "Baño Principal",
    image: "/media/v-tours/3.jpg",
    pitch: 10,
    yaw: 180,
    hotSpot: {
      nextScene: {
        type: "custom",
        text: "Habitación Principal",
        pitch: -51,
        yaw: 119,
        cssClass: "moveScene",
        scene: "bedroomScene",
      },
    },
  },

  livingroomScene: {
    title: "Sala de Estar",
    image: "/media/v-tours/25.jpg",
    pitch: 10,
    yaw: 180,
    hotSpot: {
      table: {
        type: "info",
        pitch: -32,
        yaw: 57,
        text: "Mesa Plegable de Algarrobo",
        cssClass: "hotSpotElement",
      },

      sofa1: {
        type: "info",
        pitch: -46,
        yaw: 144,
        text: "Sillón de 2 Cuerpos con Detalles Artesanales",
        cssClass: "hotSpotElement",
      },

      sofa2: {
        type: "info",
        pitch: -25,
        yaw: 37,
        text: "Sillón de 6 Cuerpos con Detalles Artesanales",
        cssClass: "hotSpotElement",
      },

      sofa3: {
        type: "info",
        pitch: -4,
        yaw: 108,
        text: "Sillón de Conductor",
        cssClass: "hotSpotElement",
      },

      sofa4: {
        type: "info",
        pitch: -5,
        yaw: 124,
        text: "Sillón de Copiloto",
        cssClass: "hotSpotElement",
      },

      kitchen: {
        type: "info",
        pitch: -15,
        yaw: -38,
        text: "Cocina Completamente Equipada",
        cssClass: "hotSpotElement",
      },

      nextScene1: {
        type: "custom",
        text: "Escaleras",
        pitch: -28,
        yaw: 88,
        cssClass: "moveScene",
        scene: "stairScene",
      },

      nextScene2: {
        type: "custom",
        text: "Frente",
        pitch: -22,
        yaw: -87,
        cssClass: "moveScene",
        scene: "frontScene",
      },
    },
  },

  frontScene: {
    title: "Frente",
    image: "/media/v-tours/19.jpg",
    pitch: 10,
    yaw: 180,
    hotSpot: {
      nextScene: {
        type: "custom",
        text: "Sala de Estar",
        pitch: -10,
        yaw: 4,
        cssClass: "moveScene",
        scene: "livingroomScene",
      },
    },
  },
};

export default Scenes;
