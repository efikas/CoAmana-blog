import React from 'react';

const  Button = (props) => {
    
    const styles = {
        btn: {
            backgroundColor: "#17a2b8", 
            height: 60, 
            width: 200,
            marginRight: 20,
            marginLeft: 20,
            borderRadius: 50,
            display: "inline-flex", 
            alignItems: "center", 
            flexDirection: "row", 
            justifyContent: "center", 
            fontSize: 20, 
            color: "white", 
            fontWeight: "bold",
            cursor: "pointer",
        }
    }
    
    return (
        <div style={styles.btn} onClick={props.onClick}>{props.children}</div>
    );
}

export default Button;
