import { useCallback } from "react";
import { ITooltip } from "../interfaces/Tooltip.interface"
import { useAppDispatch, useAppSelector } from "../store/store";
import { onShowTooltip } from "../store/tootipSlice";
import { onAddLog } from "../store/logSlice";

export const useTooltip = (): ITooltip => {

    const id = useAppSelector((state) => state['AOD-Tooltip'].id);
    const title = useAppSelector((state) => state['AOD-Skill-Tree'].skillTree[id]?.name) || "";
    const message = useAppSelector((state) => state['AOD-Skill-Tree'].skillTree[id]?.description) || "";
    const dispatch = useAppDispatch();

    const showTooltip = useCallback(
        (id: string) => {
            dispatch(onShowTooltip({id}));
        },
    [dispatch]);

    const addLog  = useCallback(
        () => {
          dispatch(onAddLog("tooltip-icon"));
        },
      [dispatch]);

    return {
        id,
        title,
        message,
        showTooltip,
        addLog
    }
}
