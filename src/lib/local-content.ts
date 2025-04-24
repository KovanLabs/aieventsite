import fs from "fs";
import path from "path";

// Helper to load local content files
export const loadLocalContent = (filename: string) => {
  try {
    const filePath = path.join(process.cwd(), "src", "Data", filename);
    const content = fs.readFileSync(filePath, "utf8");
    return JSON.parse(content);
  } catch (error) {
    console.error(`Error loading local content for ${filename}:`, error);
    return null;
  }
};
