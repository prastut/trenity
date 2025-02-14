import React from "react";
import axios from "axios";
import { toPairs, sort } from "ramda";
import moment from "moment";

export const textToEmoji = emotion => {
  switch (emotion) {
    case "joy":
      return "😁";
    case "sadness":
      return "😢";
    case "disgust":
      return "🤬";
    case "fear":
      return "🤯";
    case "anger":
      return "😡";
    default:
      return "😊";
  }
};

export const positiveSentimentToEmoji = value => {
  if (value <= 100 && value > 80) {
    return "🤩";
  } else if (value <= 80 && value > 60) {
    return "😁";
  } else if (value <= 60 && value > 40) {
    return "😀";
  } else if (value <= 40 && value > 20) {
    return "☹️";
  } else {
    return "😡";
  }
};

export const eventsToGif = event => {
  switch (event) {
    case "GOAL":
      return (
        <img
          src="https://media1.tenor.com/images/99a34b7db0d2872967b1058018dc3c03/tenor.gif?itemid=4932210"
          style={{ width: "100%", borderRadius: "100%" }}
          alt=""
        />
      );
    case "YELLOW CARD":
      return (
        <img
          src="https://media1.tenor.com/images/46be2621151dd22f314d7aa01994d379/tenor.gif?itemid=10681726"
          style={{ width: "100%", borderRadius: "100%" }}
          alt=""
        />
      );
    case "RED CARD":
      return (
        <img
          src="https://media1.tenor.com/images/980c4915a1436d7c13cafc9845dfd20e/tenor.gif?itemid=12053171"
          style={{ width: "100%", borderRadius: "100%" }}
          alt=""
        />
      );
    case "CHANCE":
      return (
        <img
          src="https://media1.tenor.com/images/90076d94c9d4da212b7bc5836b3d3665/tenor.gif?itemid=5609465"
          style={{ width: "100%", borderRadius: "100%" }}
          alt=""
        />
      );
    case "FOUL":
      return (
        <img
          src="https://media.tenor.com/images/e60445406301561fbbeb62e7c4959ad4/tenor.gif"
          style={{ width: "100%", borderRadius: "100%" }}
          alt=""
        />
      );
    case "START HALF":
      return (
        <img
          src="https://media1.tenor.com/images/24e696d7b7c8fdd0ba39a0cc8e4b3526/tenor.gif?itemid=8904323"
          style={{ width: "100%", borderRadius: "100%" }}
          alt=""
        />
      );
    default:
      return "";
  }
};

export const eventsToEmoji = event => {
  switch (event) {
    case "GOAL":
      return "⚽";
    case "YELLOW":
      return "📒";
    case "RED":
      return (
        <img
          src="https://media1.tenor.com/images/980c4915a1436d7c13cafc9845dfd20e/tenor.gif?itemid=12053171"
          style={{ width: "100%", borderRadius: "100%" }}
          alt=""
        />
      );
    case "CHANCE":
      return "🤯";
    case "CROSS":
      return "🤯";
    case "CORNER":
      return "🤯";
    case "SAVE":
      return "🤯";
    case "CLOSE":
      return "🤯";
    case "WIDE":
      return "🤯";
    case "PENALTY-MISSED":
      return "🤯";
    case "FOUL":
      return "🤬";
    case "OUCH":
      return "🤬";
    case "KICK-OFF":
      return "🏁";
    case "START HALF":
      return "🏁";
    case "START-SECOND-HALF":
      return "🏁";
    case "HALF-TIME":
      return "🏁";
    case "FULL-TIME":
      return "🏁";
    case "INJURY":
      return "🤕";
    case "SUBSTITUTION":
      return "🏃🏻‍♂️";
    default:
      return "";
  }
};

//Technical Debt
export const entitiesDictToSortedEntitiesArray = (
  entitiesDict,
  allEntities
) => {
  const sortedEntitiesArray = sort(
    (a, b) => b[1].difference - a[1].difference,
    toPairs(entitiesDict)
  ).map(i => {
    const key = i[0];

    const refinedSentiment = {
      positive: i[1].sentiment,
      negative: 100 - i[1].sentiment
    };

    const { imageURL } = allEntities.find(e => e.key === key);

    return {
      key,
      imageURL,
      sentiment: refinedSentiment
    };
  });

  return sortedEntitiesArray;
};

//Technical Debt
export const checkImageExists = async imageUrl => {
  return await axios
    .get(imageUrl)
    .then(() => true)
    .catch(() => false);
};

export const timeInsideMatchBasedOnMatchState = matchState => {
  if (matchState === "live") {
    return moment.utc();
  } else if (matchState === "past") {
    // timeInsideMatch = moment.utc(this.match.startTime);
    return moment.utc("2018-07-15T15:17:55.000Z");
  } else {
    return "";
  }
};
