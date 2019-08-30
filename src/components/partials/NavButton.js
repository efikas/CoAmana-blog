import React from 'react';
import Button from './Button';

const  PostTile = ({page, prevPage, nextPage, EOC}) => {
    return (
        (page < 2) 
        ? <div><Button  className="ml-4" onClick={nextPage}>Next >></Button></div>
          
          : (EOC == false) 
                ? <div><Button  className="mr-4" onClick={prevPage}>&#60;&#60; Prev</Button>
                    <Button className="ml-4" onClick={nextPage}>Next >></Button></div>
                        : <div><Button className="mr-4" onClick={prevPage}>&#60;&#60; Prev</Button></div>
    );
}

export default PostTile;
