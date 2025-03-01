import axios from "axios";
import { IMinecraftSkillTreeData } from "../interfaces";

const URL = import.meta.env.VITE_SKILL_TREE_URL as string || "https://minecraft.capta.co/BaseSkillTree.json";
const PROXY_URL = import.meta.env.VITE_PROXY_URL as string || "";

export const getSkillTreeData = async (): Promise<IMinecraftSkillTreeData> => {
    try {
        if (PROXY_URL) {
            const { data } = await axios.get<IMinecraftSkillTreeData>(`${PROXY_URL}?url=${URL}`);
            return data;
        }
        const { data } = await axios.get<IMinecraftSkillTreeData>(URL);
        return data;
    }
    catch (error) {
        throw new Error("error");
    }
}