import React from "react";
// import "../typescript/generic";
// import "../typescript/utilities";

const Type = () => {
  interface Girl {
    [key: string]: string | number | string[] | { eye: string } | undefined;
    Kurumi: { eye: string };
    Tohka: string;
    Sagiri: string;
    Seinen: string[];
    DPS: number;
  }

  const obj: Girl = {
    Kurumi: { eye: "brown" },
    Tohka: "oooo",
    Sagiri: "uuuu",
    Seinen: ["Milf", "Loli", "Ahegao"],
    DPS: 200000,
  };

  obj.Kurumi;
  obj["Seinen"];

  type Tokisaki = Girl["Kurumi"]["eye"];

  // Same map() (map for object)
  Object.keys(obj).map((key) => {
    //   console.log(obj[key]);
  });

  //Keyof
  const getValue = (girl: Girl, key: keyof Girl): void => {
    // console.log(`${key}: ${girl[key]}`);
  };
  getValue(obj, "Seinen");

  //Record
  type Test = Record<string, number>;
  let object: Test = {
    prop1: 1,
    prop2: 2,
    prop3: 3,
  };

  //   interface Anime {
  //     [key: string]: string;
  //   }

  type Waifu = "Kurumi" | "Nino" | "Mirai";

  type Anime = Record<Waifu, string>;

  const anime: Anime = {
    Kurumi: "Date a live",
    Nino: "Gotoubun no hanayome",
    Mirai: "Kyokai no kanata",
  };

  //Keyof

  for (var a in anime) {
    // console.log(anime[a as keyof Anime]);
  }

  //   console.log(anime);

  return (
    <div>

    </div>
  );
};

export default Type;
