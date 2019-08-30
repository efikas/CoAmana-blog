import React from 'react';
import {  Spinner } from 'reactstrap';

const  Loading = ({post}) => {
    
    const styles = {
        columnsWrapper: {
            height: 500,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
        }
    }
    
    return (
        <div style={styles.columnsWrapper} className="text-center">
            <Spinner style={{ width: '3rem', height: '3rem' }} />
        </div>
    );
}

export default Loading;
