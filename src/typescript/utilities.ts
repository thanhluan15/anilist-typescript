import "../index.css";

//Utility Types

interface WaifuInfo {
  id: number;
  name: string;
  hairColor: string;
  hairStyle: string;
  type?: string;
  secret: string;
}

//Patial
const setUser = (waifu: Partial<WaifuInfo>): Partial<WaifuInfo> => {
  return waifu;
};

console.log(setUser({ name: "Nino", hairColor: "black" }));

const updateUser = (
  waifu: WaifuInfo,
  propsToUpdate: Partial<WaifuInfo>
): WaifuInfo => {
  return { ...waifu, ...propsToUpdate };
};

const waifu: WaifuInfo = {
  id: 20,
  name: "Nino",
  hairColor: "pink",
  hairStyle: "long hair",
  secret: "love Futaro",
};

console.log(updateUser(waifu, { hairStyle: "short hair" }));

//Require and Readonly

const recordWaifu = (waifu: Required<WaifuInfo>): WaifuInfo => {
  return waifu;
};

console.log(recordWaifu({ ...waifu, type: "tsundere" }));

const readWaifu: Readonly<WaifuInfo> = { ...waifu };

// readWaifu.hairStyle = "red"

// waifu.hairColor = "red"

console.log(readWaifu);

// Record (used to map the properties of a type to another type)

type WaifuName = "Ichika" | "Nino" | "Miku" | "Yotsuba" | "Itsuki";

// type WaifuName = {
//     Nino: string,
//     Itsuki: string,
//     Yotsuba: string
// }

type WaifuProps = Omit<Partial<WaifuInfo>, "name">;

const waifuColor: Record<WaifuName, WaifuProps> = {
  Ichika: { hairColor: "pink" },
  Nino: { hairColor: "pink" },
  Miku: { hairColor: "brown" },
  Yotsuba: { hairColor: "orange" },
  Itsuki: { hairColor: "red" },
};

console.log(waifuColor);

// Pick and Omit

//Pick

type WaifuHair = Partial<Pick<WaifuInfo, "hairColor" | "hairStyle">>;

const ninoHair: Partial<Record<WaifuName, WaifuHair>> = {
  Nino: {
    hairColor: "pink",
    hairStyle: "short hair",
  },
  Itsuki: {
    hairColor: "red",
    hairStyle: "long hair",
  },
  Miku: {
    hairColor: "brown",
  },
  Yotsuba: {
    hairStyle: "short hair",
  },
};
console.log(ninoHair);

//Omit

type HideSecret = Omit<WaifuInfo, "secret">;

const info: HideSecret = {
  id: 6,
  name: "Yelan",
  hairColor: "red",
  hairStyle: "short hair",
  type: "yandere",
};

console.log(info);

// Exclude (Constructs a type by excluding from UnionType all union member that are assignable to ExcludedMembers)

type HideWaifu = Exclude<WaifuName, "Ichika">;

const waifuRest: HideWaifu = "Itsuki";

console.log(waifuRest);

//Extract

type GetWaifu = Extract<WaifuName, "Nino" | "Yelan">;

const waifuPicked: GetWaifu = "Nino";

console.log(waifuPicked);

//Non nullable

type T0 = NonNullable<string | undefined | null>;
//type T0 = string 



