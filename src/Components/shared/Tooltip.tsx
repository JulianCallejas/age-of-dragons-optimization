import { Tooltip as ReactTooltip } from "react-tooltip"
import styles from "./Tooltip.module.css";
import { useTooltip } from "../../hooks/useTooltip";
import { useAppDispatch } from "../../store";
import { onAddLog } from "../../store/logSlice";
import { useEffect } from "react";

const Tooltip = () => {
    const { title, message } = useTooltip();

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(onAddLog("tooltip-icon"));
    });    

    return (
        <ReactTooltip
            className={styles.container}
            id="AOD-tooltip"
            disableStyleInjection={true}
            place={"bottom"}
            noArrow
            opacity={95}
            positionStrategy={"fixed"}
        >
            <div className={styles.header} >
                <h4 className={styles.title} >{title}</h4>
            </div>
            <p className={styles.message} >{message}</p>
        </ReactTooltip>
    )
}

export default Tooltip