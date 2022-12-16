
import React from 'react';
import { useUsers } from './useServices';

export type UsersPageProps = {
};



export const UsersPage = (props: UsersPageProps) => {
    const { } = props;


    const query = useUsers();


    return (
        <div>


            {query.isLoading && <span>Loading...</span>}

            {query.data?.map((v) => {
                return <div>
                    <dl>
                        <dt>Name</dt><dd>{v.name}</dd>
                    </dl>
                </div>
            })}


        </div>
    );
};
