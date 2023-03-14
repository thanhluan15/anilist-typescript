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

// readWaifu.hairStyle = "red" ==> error

console.log(readWaifu);

// Record (used to map the properties of a type to another type)

type WaifuName = "Ichika" | "Nino" | "Miku" | "Yotsuba" | "Itsuki";

type WaifuDesc = {
  Nino: string;
  Itsuki: string;
  Yotsuba: string;
};

type WaifuProps = Omit<Partial<WaifuInfo>, "name">;

const waifuColor: Record<WaifuName, WaifuProps> = {
  Ichika: { hairColor: "pink" },
  Nino: { hairColor: "pink" },
  Miku: { hairColor: "brown" },
  Yotsuba: { hairColor: "orange" },
  Itsuki: { hairColor: "red" },
};

console.log(waifuColor);

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

//Parameter
type T1 = Parameters<(s: string, a: string) => string>;
// ==> type T1 = [s: string]
type R1 = ReturnType<(s: string) => () => void>;

const rep: R1 = () => {
  console.log("This is a variable of type R1");
};

console.log(rep);

type T2 = Parameters<<T>(arg: T) => T>;
// ==> type T2 = [arg: unknown]

//ReturnType
type R2 = ReturnType<<T>(arg: T) => string>;

const t: T1 = ["Nino", "Miku"];

declare function name(params: { a: string; b: string }): void;

type T3 = Parameters<typeof name>;

type R3 = ReturnType<<U extends string[], T extends U>(a: T) => T>;

console.log(t);


