import { useMutation } from '@tanstack/react-query';
import React from 'react';

export type SpecialButtonProps = {
    thingyStatus: "idle" | "success" | "loading" | "error"; 
    onButtonClick: () => void; 
};

export const SpecialLikeButton = (props: SpecialButtonProps) => {
    const { thingyStatus, onButtonClick } = props;
    return (
        <button onClick={onButtonClick}>

            {thingyStatus === "loading" && "loading..."}
            {thingyStatus === "success" && "Liked"}
            {thingyStatus === "idle" && "Like thingy"}
            {thingyStatus === "error" && "sorry something went wrong"}

        </button>
    );
};
