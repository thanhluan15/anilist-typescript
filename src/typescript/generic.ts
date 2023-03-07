import "../index.css";

//Generic Type
const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

console.log(isObj(null));
console.log(isObj({ name: "Luan" }));

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
};

console.log(isTrue(null));
console.log(isTrue([1, 2, 3]));
console.log(isTrue({}));
console.log(isTrue(""));
console.log(isTrue("dark"));
console.log(isTrue(false));
console.log(isTrue(NaN));
console.log(isTrue([]));

interface BoolCheck<T> {
  value: T;
  is: boolean;
}

const checkBooleanValue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false };
  }
  return { value: arg, is: !!arg };
};

console.log(checkBooleanValue(null));

const processUser = <T extends WaifuInfo>(user: T): T => {
  return user;
};

console.log(processUser({ id: 3, name: "aaaaa" }));

interface WaifuInfo {
  id: number;
}

const getWaifuInfo = <T extends WaifuInfo, K extends keyof T>(
  names: T[],
  key: K
): T[K][] => {
  return names.map((name) => name[key]);
};

const waifuInfo = [
  {
    id: 1,
    name: "Nino Nakano",
    hairColor: "pink",
    body: [90, 60, 100],
  },
  {
    id: 2,
    name: "Yui Yuigahama",
    hairColor: "orange",
    body: [90, 60, 90],
  },
  {
    id: 3,
    name: "Siesta",
    hairColor: "white",
    body: [80, 60, 100],
  },
];

console.log(getWaifuInfo(waifuInfo, "body"));

// Class Generic
class StateObject<T> {
  public state: T;

  constructor(value: T) {
    this.state = value;
  }

  get status(): T {
    return this.state;
  }

  set status(value: T) {
    this.state = value;
  }
}
enum status {
  online = "ONLINE",
  offline = "OFFLINE",
}

const store = new StateObject("offline");

const myState = new StateObject<(boolean | string | number)[]>([100, 200,"Luan"]);

const newState = store.status;

store.status = status.online;

console.log(store);
console.log(newState);

console.log(myState);
