
import React from 'react';
import { useTodos, useUsers } from './useServices';

export type UsersPageProps = {
};



export const TodosPage = (props: UsersPageProps) => {
    const { } = props;


    const query = useTodos();


    return (
        <div>


            {query.isLoading && <span>Loading...</span>}

            {query.data?.map((v) => {
                return <div>
                    <a href ={`todos/${v.id}`}>{v.title}</a>
                </div>
            })}


        </div>
    );
};
