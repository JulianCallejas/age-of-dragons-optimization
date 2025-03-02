import { useCallback } from "react";
import { ITooltip } from "../interfaces/Tooltip.interface"
import { useAppDispatch, useAppSelector } from "../store/store";
import { onShowTooltip } from "../store/tootipSlice";

export const useTooltip = (): ITooltip => {

    const { skillTree } = useAppSelector((state) => state['AOD-Skill-Tree']);
    const { id } = useAppSelector((state) => state['AOD-Tooltip']);

    const dispatch = useAppDispatch();

    const showTooltip = useCallback(
        (id: string) => {
            dispatch(onShowTooltip({ id }));
        },
        [dispatch],
    )

    return {
        id,
        title: skillTree[id]?.name,
        message: skillTree[id]?.description,
        showTooltip,
    }
}
