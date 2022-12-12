import { useMutation } from '@tanstack/react-query';
import React from 'react';

export type SpecialButtonProps = {

    thingyId: string;
};

async function likeTheThing(id: string) {

    return new Promise((res) => {
        setTimeout(() => res({ success: true }), 1000);
    });
}



export const SpecialLikeButton = (props: SpecialButtonProps) => {
    const { thingyId } = props;


    const mutation = useMutation(likeTheThing);

    const { isLoading, isSuccess, isIdle, isError, mutate } = mutation;



    return (
        <button onClick={() => mutate(thingyId)}>

            {isLoading && "loading..."}
            {isSuccess && "Liked"}
            {isIdle && "Like thingy"}
            {isError && "sorry something went wrong"}

        </button>
    );
};
