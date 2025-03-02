import axios from "axios";
import { IAgeOfDragonSkillTreeData } from "../interfaces";

const URL = import.meta.env.VITE_SKILL_TREE_URL as string || "http://localhost:3000/data/dragondata.json";
const PROXY_URL = import.meta.env.VITE_PROXY_URL as string || "";

export const getSkillTreeData = async (): Promise<IAgeOfDragonSkillTreeData> => {
    try {
        if (PROXY_URL) {
            const { data } = await axios.get<IAgeOfDragonSkillTreeData>(`${PROXY_URL}?url=${URL}`);
            return data;
        }
        const { data } = await axios.get<IAgeOfDragonSkillTreeData>(URL);
        return data;
    }
    catch (error) {
        throw new Error("error");
    }
}