const Scenes = {
  stairScene: {
    title: "Escaleras",
    image: "../media/v-tours/1.jpg",
    pitch: -11,
    yaw: -3,
    hotSpot: {
      author: {
        type: "info",
        pitch: 9,
        yaw: -84,
        url: "https://mike-io.com",
        text: "By Miguel Diganchi - Ingeniero en Computación y Arquitecto de Software",
        cssClass: "hotSpotElement",
      },

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
    title: "Sala de Estar",
    image: "/media/v-tours/19.jpg",
    pitch: 10,
    yaw: 180,
    hotSpot: {
      nextScene: {
        type: "custom",
        text: "Livingroom",
        pitch: -10,
        yaw: 4,
        cssClass: "moveScene",
        scene: "livingroomScene",
      },
    },
  },
};

export default Scenes;
