import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🙉": " Hear-No-Evil-Monkey",
  "🙊": " Speak-No-Evil-Monkey",
  "🐵": " Monkey-Face",
  "🐒": " Monkey",
  "🦍": " Gorilla",
  "🦧": " Orangutan",
  "🐶": " Dog-Face",
  "🐕": " Dog",
  "🦮": " Guide-Dog",
  "🐕‍🦺": "‍ Service-Dog",
  "🐩": " Poodle",
  "🐺": " Wolf",
  "🦊": " Fox",
  "🦝": " Raccoon",
  "🐱": " Cat Face",
  "🐈": " Cat",
  "🦁": " Lion",
  "🐯": " Tiger Face",
  "🐅": " Tiger",
  "🐆": " Leopard",
  "🐴": " Horse Face",
  "🐎": " Horse",
  "🦄": " Unicorn",
  "🦓": " Zebra",
  "🦌": " Deer",
  "🐮": " Cow Face",
  "🐂": " Ox",
  "🐃": " Water Buffalo",
  "🐄": " Cow",
  "🐷": " Pig Face",
  "🐖": " Pig",
  "🐗": " Boar",
  "🐽": " Pig Nose",
  "🐏": " Ram",
  "🐑": " Ewe",
  "🐐": " Goat",
  "🐪": " Camel",
  "🐫": " Two Hump Camel",
  "🦙": " Llama",
  "🦒": " Giraffe",
  "🐘": " Elephant",
  "🐸": "Frog",
  "🐊": "Crocodile",
  "🐢": "Turtle",
  "🦎": "Lizard",
  "🐍": "Snake",
  "🐲": "Dragon Face",
  "🐉": "Dragon",
  "🦕": "Sauropod",
  "🦖": "T-Rex",
  "🐳": "Spouting Whale",
  "🐋": "Whale",
  "🐬": "Dolphin",
  "🐟": " Fish",
  "🐠": " Tropical Fish",
  "🐡": " Blowfish",
  "🦈": " Shark",
  "🐙": " Octopus",
  "🐚": " Spiral Shell",
  "🐌": " Snail",
  "🦋": " Butterfly",
  "🐛": " Bug",
  "🐜": " Ant",
  "🐝": " Honeybee",
  "🦔": "Hedgehog",
  "🦇": "Bat",
  "🐻": "Bear",
  "🐨": "Koala",
  "🐼": "Panda",
  "🦥": "Sloth",
  "🦦": "Otter",
  "🦨": "Skunk",
  "🦘": "Kangaroo",
  "🦡": "Badger",
  "🐾": "Paw Prints",
  "🦃": "Turkey",
  "🐔": "Chicken",
  "🐓": "Rooster",
  "🐣": "Hatching Chick",
  "🐤": "Baby Chick",
  "🐥": "Front-Facing Baby Chick",
  "🐦": "Bird",
  "🐧": "Penguin",
  "🕊️": " Dove",
  "🦅": "Eagle",
  "🦆": "Duck",
  "🦢": "Swan",
  "🦉": "Owl",
  "💐": "Bouquet",
  "🌸": "Cherry Blossom",
  "💮": "White Flower",
  "🏵️": " Rosette",
  "🌹": "Rose",
  "🥀": "Wilted Flower",
  "🌺": "Hibiscus",
  "🌻": "Sunflower",
  "🌼": "Blossom",
  "🌷": "Tulip",
  "🌱": "Seedling",
  "🌲": "Evergreen Tree",
  "🌳": "Deciduous Tree",
  "🌴": "Palm Tree",
  "🌵": "Cactus",
  "🌾": "Sheaf of Rice",
  "🌿": "Herb",
  "☘️": " Shamrock",
  "🍀": "Four Leaf Clover",
  "🍁": "Maple Leaf",
  "🍂": "Fallen Leaf",
  "🍃": "Leaf Fluttering in Wind",
  "🍄": "Mushroom",
  "🌰": "Chestnut",
  "🦀": "Crab",
  "🦞": "Lobster",
  "🦐": "Shrimp",
  "🦑": "Squid",
  "🐭": "Mouse Face",
  "🐁": "Mouse"
};

const emojiDictionary2 = {
  " Hear-No-Evil-Monkey": "🙉",
  " Speak-No-Evil-Monkey": "🙊",
  " Monkey-Face": "🐵",
  " Monkey": "🐒",
  " Gorilla": "🦍",
  " Orangutan": "🦧",
  " Dog-Face": "🐶",
  " Dog": "🐕",
  " Guide-Dog": "🦮",
  "‍ Service-Dog": "🐕‍🦺",
  " Poodle": "🐩",
  " Wolf": "🐺",
  " Fox": "🦊",
  " Raccoon": "🦝",
  " Cat Face": "🐱",
  " Cat": "🐈",
  " Lion": "🦁",
  " Tiger Face": "🐯",
  " Tiger": "🐅",
  " Leopard": "🐆",
  " Horse Face": "🐴",
  " Horse": "🐎",
  " Unicorn": "🦄",
  " Zebra": "🦓",
  " Deer": "🦌",
  " Cow Face": "🐮",
  " Ox": "🐂",
  " Water Buffalo": "🐃",
  " Cow": "🐄",
  " Pig Face": "🐷",
  " Pig": "🐖",
  " Boar": "🐗",
  " Pig Nose": "🐽",
  " Ram": "🐏",
  " Ewe": "🐑",
  " Goat": "🐐",
  " Camel": "🐪",
  " Two Hump Camel": "🐫",
  " Llama": "🦙",
  " Giraffe": "🦒",
  " Elephant": "🐘",
  Frog: "🐸",
  Crocodile: "🐊",
  Turtle: "🐢",
  Lizard: "🦎",
  Snake: "🐍",
  "Dragon Face": "🐲",
  Dragon: "🐉",
  Sauropod: "🦕",
  "T-Rex": "🦖",
  "Spouting Whale": "🐳",
  Whale: "🐋",
  Dolphin: "🐬",
  " Fish": "🐟",
  " Tropical Fish": "🐠",
  " Blowfish": "🐡",
  " Shark": "🦈",
  " Octopus": "🐙",
  " Spiral Shell": "🐚",
  " Snail": "🐌",
  " Butterfly": "🦋",
  " Bug": "🐛",
  " Ant": "🐜",
  " Honeybee": "🐝",
  Hedgehog: "🦔",
  Bat: "🦇",
  Bear: "🐻",
  Koala: "🐨",
  Panda: "🐼",
  Sloth: "🦥",
  Otter: "🦦",
  Skunk: "🦨",
  Kangaroo: "🦘",
  Badger: "🦡",
  "Paw Prints": "🐾",
  Turkey: "🦃",
  Chicken: "🐔",
  Rooster: "🐓",
  "Hatching Chick": "🐣",
  "Baby Chick": "🐤",
  "Front-Facing Baby Chick": "🐥",
  Bird: "🐦",
  Penguin: "🐧",
  " Dove": "🕊️",
  Eagle: "🦅",
  Duck: "🦆",
  Swan: "🦢",
  Owl: "🦉",
  Bouquet: "💐",
  "Cherry Blossom": "🌸",
  "White Flower": "💮",
  " Rosette": "🏵️",
  Rose: "🌹",
  "Wilted Flower": "🥀",
  Hibiscus: "🌺",
  Sunflower: "🌻",
  Blossom: "🌼",
  Tulip: "🌷",
  Seedling: "🌱",
  "Evergreen Tree": "🌲",
  "Deciduous Tree": "🌳",
  "Palm Tree": "🌴",
  Cactus: "🌵",
  "Sheaf of Rice": "🌾",
  Herb: "🌿",
  " Shamrock": "☘️",
  "Four Leaf Clover": "🍀",
  "Maple Leaf": "🍁",
  "Fallen Leaf": "🍂",
  "Leaf Fluttering in Wind": "🍃",
  Mushroom: "🍄",
  Chestnut: "🌰",
  Crab: "🦀",
  Lobster: "🦞",
  Shrimp: "🦐",
  Squid: "🦑",
  "Mouse Face": "🐭",
  Mouse: "🐁"
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("translation will appear here..");

  function inputchangeHandler(event) {
    const inputTxt = event.target.value;
    setMeaning(inputTxt);

    if (inputTxt in emojiDictionary2) {
      setEmoji(emojiDictionary2[inputTxt]);
    } else {
      setEmoji("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary2[inputEmoji]);
    setEmoji(inputEmoji);
  }

  return (
    <div className="App">
      <header id="logo">
        <h1>Find your Emoji</h1>
      </header>

      <section id="hero">
        <div id="heading">🐻 Animals & Nature 🌻</div>
        <input
          className="search"
          onChange={inputchangeHandler}
          value={emoji}
          placeholder={
            "search your emoji  (or copy + paste emoji to find its meaning) "
          }
          style={{
            padding: "1em",
            minWidth: "80%"
          }}
        />
        <h2> {emoji} </h2>
        <h3> {meaning} </h3>
        <div id="icon">.Click on the emoji to find out its meaning.</div>
        <div id="list">
          {emojis.map((emoji) => (
            <span
              key={emoji}
              onClick={() => emojiClickHandler(emoji)}
              style={{ fontSize: "4rem", padding: "1rem", cursor: "pointer" }}
            >
              {" "}
              {emoji}{" "}
            </span>
          ))}
        </div>
      </section>

      <footer className="end">
        <h1>
          Made by{" "}
          <a href="https://utsav-kumar.netlify.app/" target="_blank">
            Utsav kumar
          </a>
        </h1>
      </footer>
    </div>
  );
}
