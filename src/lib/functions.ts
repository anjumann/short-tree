import { v4 as uuidv4 } from "uuid";

export const generateShortUUID = () => {
  const uniqueId = uuidv4();

  const shorterString = uniqueId.substring(0, 8);
  return shorterString;
};
