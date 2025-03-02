import { useCallback } from "react";
import { onShowTooltip, onUpdateSkill, useAppDispatch, useAppSelector } from "../store";
import { onAddLog } from "../store/logSlice";


export const useNode = (id: string) => {
    
    const dispatch = useAppDispatch();
    
    const skill = useAppSelector((state) => state['AOD-Skill-Tree'].skillTree[id]);
    
    const addLog  = useCallback(
      () => {
        dispatch(onAddLog(`${skill.image}`));
      },
    [dispatch, skill.image]);
    
    const showTooltip = useCallback(
      () => {
        dispatch(onShowTooltip({ id: skill.id }))
      },
    [dispatch, skill.id]);
  
    const updateSkill = useCallback(
      () => {
        dispatch(onUpdateSkill(skill.id))
      },
    [dispatch, skill.id]);
    
    return {
        skill,
        addLog,
        showTooltip,
        updateSkill
  }

}
