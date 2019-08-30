import React from 'react';
import {  Button } from 'reactstrap';

const  PostTile = ({page, prevPage, nextPage, EOC}) => {
    return (
        (page < 2) 
        ? <div><Button outline color="primary" className="mr-4" disabled>&#60;&#60; Prev</Button>
                <Button outline color="primary" className="ml-4" onClick={nextPage}>Next >></Button></div>
          
          : (EOC == false) 
                ? <div><Button outline color="primary" className="mr-4" onClick={prevPage}>&#60;&#60; Prev</Button>
                    <Button outline color="primary" className="ml-4" onClick={nextPage}>Next >></Button></div>
                        : <div><Button outline color="primary" className="mr-4" onClick={prevPage}>&#60;&#60; Prev</Button>
                            <Button outline color="primary" className="ml-4" disabled>Next >></Button></div>
    );
}

export default PostTile;
