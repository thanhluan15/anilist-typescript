import "../index.css";

//Utility Types

interface WaifuInfo {
  id: number;
  name: string;
  hairColor: string;
  hairStyle: string;
  type?: string;
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
};

console.log(updateUser(waifu, { hairStyle: "short hair" }));

const recordWaifu = (waifu: Required<WaifuInfo>): WaifuInfo => {
  return waifu;
};

console.log(recordWaifu({ ...waifu, type: "tsundere" }));

const readWaifu: Readonly<WaifuInfo> = { ...waifu };

// readWaifu.hairStyle = "red"

// waifu.hairColor = "red"

console.log(readWaifu);


// Record (used to map the properties of a type to another type)

type WaifuName = "Nino" | "Itsuki" | "Yotsuba";

// type WaifuName = {
//     Nino: string,
//     Itsuki: string,
//     Yotsuba: string
// }

type WaifuProps = Omit<Partial<WaifuInfo>, "name">;


const waifuColor: Record<WaifuName, WaifuProps> = {
  Nino: { hairColor: "pink" },
  Itsuki: { hairColor: "red" },
  Yotsuba: { hairColor: "orange" },
};

console.log(waifuColor);
