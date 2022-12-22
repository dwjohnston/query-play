
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Todo, useTodos, useUsers } from './useServices';

export type UsersPageProps = {
};



export const TodosPage = (props: UsersPageProps) => {
    const { } = props;


    // const query = useTodos();

    const data = useLoaderData() as Array<Todo>;


    return (
        <div>


            {data?.map((v) => {
                return <div>
                    <Link to ={`/todos/${v.id}`}>{v.title}</Link>
                </div>
            })} 


        </div>
    );
};
