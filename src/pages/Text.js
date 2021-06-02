import React from "react";
import styles from "../assets/MainPage.module.css";

const Text = (props) => {
    console.log(props)
    return (
        <div className={styles.text}>
            {props.text} {props.price}
        </div>
    )
}

export default Text;