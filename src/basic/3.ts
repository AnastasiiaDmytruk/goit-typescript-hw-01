let ID: string | number;
ID = "FS534563";
ID = 235657657431;

type status = "enable" | "disable";
let currentStatus: status;
currentStatus = "enable";

type Subscriber = {
  id: number;
  name: string;
  email: string;
};

const user: Subscriber = {
  id: 111,
  name: "NoShit",
  email: "noshit@email.com",
};
