
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { useUsers } from './useServices';

export type UsersPageProps = {
};



export const UsersPage = (props: UsersPageProps) => {
    const { } = props;


    const data = useLoaderData();



    return (
        <div>


            <pre>
                {JSON.stringify(data)}
            </pre>


        </div>
    );
};
