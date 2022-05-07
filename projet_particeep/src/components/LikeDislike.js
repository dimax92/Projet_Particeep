import React from "react";
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LikeDislike = () => {
    const[like, setLike] = useState(faThumbsUp);
    const[classLike, setClassLike] = useState("like");

    return(
        <FontAwesomeIcon className={classLike} icon={like} onClick={event => {
            if(like === faThumbsUp){
                setLike(faThumbsDown);
                setClassLike("dislike");
            }else if(like === faThumbsDown){
                setLike(faThumbsUp);
                setClassLike("like");
            }
        }}/>
    )
}

export default LikeDislike