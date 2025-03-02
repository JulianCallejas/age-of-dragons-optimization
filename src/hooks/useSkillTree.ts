import { useCallback, useMemo } from "react";
import { onLoadTree, onUpdateSkill, useAppDispatch, useAppSelector } from "../store";
import { normalizeSkillTreeData } from "../helpers/normalizeSkillTreeData";
import { getSkillTreeData } from "../api/skillTreeApi";

export const useSkillTree = () => {

    const {
        skillTree,
        skillTreeRoot,
    } = useAppSelector((state) => state['AOD-Skill-Tree']);

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
                throw new Error("error");
            }
        },
        [dispatch],
    );

    const updateSkill = useCallback(
        (skillId: string) => {
            const parent = skillTree[skillId].parent;
            if (skillId == parent || skillTree[parent].isActive) dispatch(onUpdateSkill(skillId));
        },
        [dispatch, skillTree],
    );

    const getSkillById = useCallback(
        (skillId: string) => {
            return skillTree[skillId];
        },
        [skillTree],
    );

    const canActivate = useCallback(
        (id: string) => {
            const skill = getSkillById(id);
            const parent = getSkillById(skill?.parent);
            return (id === skillTreeRoot || parent?.isActive) && !skill?.isActive;
        },
        [getSkillById, skillTreeRoot],
    )

    const nodes = useMemo(() => {
        const width = 100;
        return Object.values(skillTree).reverse().map((item) => ({
          id: item.id,
          type: 'skillNode',
          data: { 
            id: item.id,
            image: item.image,
            name: item.name,
            width
          },
          position: { x: item.position!.x * width * 1.5, y: item.position!.y * width * 1.2 },
        }));
      }, [skillTree]);
     

      const edges = useMemo(() => {
        return Object.values(skillTree).reduce((acc: {id: string, source: string, target: string, sourceHandle: string, targetHandle: string, type: string}[], item) => {
          if (item.id === skillTreeRoot) return acc;
            if (item.parent && skillTree[item.parent]) {
            acc.push({
              id: `${item.parent}-${item.id}`,
              source: item.parent,
              target: item.id,
              sourceHandle: 'right',
              targetHandle: 'left',
              type: 'default',
            });
          }
          return acc;
        }, []);
      }, [skillTree, skillTreeRoot]);

    
    return {
        nodes,
        edges,
        loadSkillTreeData,
        updateSkill,
        getSkillById,
        canActivate,
    }
}
