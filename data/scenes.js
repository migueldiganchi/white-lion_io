const Scenes = {
  insideOne: {
    title: "Yate interior 1",
    image: "../media/v-tours/1.jpg",
    pitch: -11,
    yaw: -3,
    hotSpot: {
      flowerVase: {
        type: "custom",
        pitch: -16.28,
        yaw: -1.66,
        nameModel: "flowerVase",
        cssClass: "hotSpotElement",
      },
      author: {
        type: "info",
        pitch: 9,
        yaw: -84,
        url: "https://mike-io.com",
        text: "By Miguel Diganchi - Ingeniero en Computación y Arquitecto de Software",
        cssClass: "hotSpotElement",
      },
      nexScene: {
        type: "custom",
        pitch: -14,
        yaw: 174,
        cssClass: "moveScene",
        scene: "insideTwo",
      },
    },
  },
  insideTwo: {
    title: "Yate interior 2",
    image: "/media/v-tours/2.jpg",
    pitch: 10,
    yaw: 180,
    hotSpot: {
      nexScene: {
        type: "custom",
        pitch: -23,
        yaw: -60,
        cssClass: "moveScene",
        scene: "insideOne",
      },
    },
  },
};

export default Scenes;
