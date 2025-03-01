import { Tooltip as ReactTooltip } from "react-tooltip"
import styles from "./Tooltip.module.css";
import { useTooltip } from "../../hooks/useTooltip";

const Tooltip = () => {
    const { title, message } = useTooltip();

    return (
        <ReactTooltip
            className={styles.container}
            id="minecraft-tooltip"
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