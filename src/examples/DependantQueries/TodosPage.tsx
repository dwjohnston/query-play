
import React from 'react';
import { Link } from 'react-router-dom';
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
                    <Link to ={`/todos/${v.id}`}>{v.title}</Link>
                </div>
            })}


        </div>
    );
};
