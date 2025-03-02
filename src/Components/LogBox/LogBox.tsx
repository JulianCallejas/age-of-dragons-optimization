import { useMemo } from "react";
import { useAppSelector } from "../../store";
import styles from "./LogBox.module.css";
import { URL } from "../../config/config";

const LogBox = () => {

    const { logs } = useAppSelector((state) => state.Logs);
    const ids = useMemo(() => Object.keys(logs), [logs]);

    return (
        <section className={styles.logContainer} >
            <h3 className={styles.logTitle} >Component render history</h3>
            <div className={styles.logBox} >
                <table className={styles.logTable} >
                    <thead>
                        <tr>
                            <th align="center">Node</th>
                            <th align="center"># Reders</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ids.map((id) => (
                            <tr key={id}>
                                <td align="center">
                                    <img src={`${URL}/img/${id}.webp`} alt="node" width="25px" height="25px" />
                                </td>
                                <td align="center" >{logs[id]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

        </section>
    )
}

export default LogBox