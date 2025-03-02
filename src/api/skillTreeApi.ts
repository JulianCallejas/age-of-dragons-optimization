import axios from "axios";
import { IAgeOfDragonSkillTreeData } from "../interfaces";
import { URL } from "../config/config";


const PROXY_URL = import.meta.env.VITE_PROXY_URL as string || "";

export const getSkillTreeData = async (): Promise<IAgeOfDragonSkillTreeData> => {
    try {
        if (PROXY_URL) {
            const { data } = await axios.get<IAgeOfDragonSkillTreeData>(`${PROXY_URL}?url=${URL}/data/dragondata.json`);
            return data;
        }
        const { data } = await axios.get<IAgeOfDragonSkillTreeData>(`${URL}/data/dragondata.json`);
        return data;
    }
    catch (error) {
        throw new Error("error");
    }
}