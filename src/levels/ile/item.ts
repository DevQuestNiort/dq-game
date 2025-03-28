import { UsableItem } from "../../engine/model/item/UsableItem.ts";
import { Position } from "../../engine/model/Position.ts";
import { movePlayerToPositionAndMap } from "../../engine/PlayerManager.ts";
import { playSound, SoundType } from "../../engine/SoundEngine.ts";
import { ModalTemplate } from "../../engine/model/modalTemplate/ModalTemplate.ts";
import { PickableItem } from "../../engine/model/item/PickableItem.ts";
import { PNJItem } from "../../engine/model/item/PNJItem.ts";

export const items = [
  new UsableItem(
    "moveToAsteria",
    "vers Astenia ",
    new Position(5, 20),
    () => {
      movePlayerToPositionAndMap(46, 21, "astenia");
      playSound(SoundType.VOYAGE);
    },
    "Bateau",
    "appuyer sur T pour voyager vers Astenia",
    "boat01",
  ),
  new UsableItem(
    "moveToAsteria",
    "vers Astenia ",
    new Position(5, 21),
    () => {
      movePlayerToPositionAndMap(46, 21, "astenia");
      playSound(SoundType.VOYAGE);
    },
    "Bateau",
    "appuyer sur T pour voyager vers Astenia",
    "boat02",
  ),
  new UsableItem(
    "moveToAsteria",
    "vers Astenia ",
    new Position(5, 22),
    () => {
      movePlayerToPositionAndMap(46, 21, "astenia");
      playSound(SoundType.VOYAGE);
    },
    "Bateau",
    "appuyer sur T pour voyager vers Astenia",
    "boat03",
  ),

  new PNJItem(
    "chevre01",
    "Chèvre Maigre",
    new Position(13, 14),
    1,
    0,
    0,
    (stateContext) => {
      stateContext.mapStates[stateContext.currentMap].items.addItem(
        new PickableItem(
          "blueStone",
          "Blue Stone",
          new Position(13, 14),
          () => {},
          "Diamant permettant de marcher sur l'eau",
          "appuyer sur T pour prendre",
          "diamantBleu",
        ),
      );
    },
    "une chevre",
    "",
    "chevre01",
    new ModalTemplate(
      "Chèvre Maigre",
      "chevre01",
      " Beeeeh !  Je ne saaiiiiiis pas ce que tu cheeeeeeerche mais c'est paaaaaaas mon problèèèèèème.. ",
    ),
  ),
  new PNJItem(
    "chevre02",
    "Chèvre en bon point",
    new Position(9, 16),
    1,
    0,
    0,
    (stateContext) => {
      stateContext.mapStates[stateContext.currentMap].items.addItem(
        new PickableItem(
          "sac",
          "sac",
          new Position(9, 16),
          () => {},
          "Sac qui ne sert à rien ",
          "appuyer sur T pour prendre",
          "sac-plastique",
        ),
      );
    },
    "une chevre",
    "",
    "chevre02",
    new ModalTemplate(
      "Chèvre en bon point",
      "chevre02",
      "  Beeeeh !  Riennnnn à signaaaaaler iciiiiiii ! ",
    ),
  ),
];
