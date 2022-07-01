import React from 'react'
import styles from './AppItem.module.css'

const AppItem = (props) => {
    return (
        <div onClick={props.onclick} className={styles.AppItem}>
            {props.children}
        </div>
    )
}

export default AppItem