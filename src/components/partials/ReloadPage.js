import React from 'react';
import {  Button } from 'reactstrap';

const  ReloadPage = ({reload}) => {
    
    const styles = {
        columnsWrapper: {
            minHeight: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }
    }
    
    return (
        <div style={styles.columnsWrapper}>
            <span>Error reloading data</span>
            <Button outline color="danger" onClick={reload}>Reload</Button>
        </div>
    );
}

export default ReloadPage;
