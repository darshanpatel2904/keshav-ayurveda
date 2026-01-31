import fs from "fs";
import path from "path";

const dataDir = path.join(process.cwd(), "data");
const dataFile = path.join(dataDir, "analytics.json");

type Analytics = {
  visits: number;
  buyClicks: number;
  contacts: {
    name: string;
    email: string;
    message: string;
    createdAt: string;
  }[];
};

const defaultData: Analytics = {
  visits: 0,
  buyClicks: 0,
  contacts: [],
};

export function readData(): Analytics {
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);
  if (!fs.existsSync(dataFile)) {
    fs.writeFileSync(dataFile, JSON.stringify(defaultData, null, 2));
    return defaultData;
  }
  return JSON.parse(fs.readFileSync(dataFile, "utf-8"));
}

export function writeData(data: Analytics) {
  fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
}
