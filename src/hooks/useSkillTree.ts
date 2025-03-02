import { useCallback } from "react";
import { onLoadTree,  useAppDispatch, useAppSelector } from "../store";
import { normalizeSkillTreeData } from "../helpers/normalizeSkillTreeData";
import { getSkillTreeData } from "../api/skillTreeApi";

export const useSkillTree = () => {

    const nodes = useAppSelector((state) => state['AOD-Skill-Tree'].nodes);
    const edges = useAppSelector((state) => state['AOD-Skill-Tree'].edges);
    
    const dispatch = useAppDispatch();

    const loadSkillTreeData = useCallback(
        async () => {
            try {
                const data = await getSkillTreeData();
                const normalizedData = normalizeSkillTreeData(data);
                dispatch(
                    onLoadTree({ ...normalizedData })
                );
            }
            catch (error) {
                console.log(error);
                throw new Error("error");
            }
        },
        [dispatch],
    );

    return {
        nodes,
        edges,
        loadSkillTreeData,
    }
}
