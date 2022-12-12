
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { fetchUserPreferences } from '../_services/services';

export type UserPreferencesProps = {
};



export const UserPreferences = (props: UserPreferencesProps) => {
  const {  } = props;

  const query = useQuery({queryKey: ['userPreferences2b'], queryFn: fetchUserPreferences});

  return (
    <div>
      {JSON.stringify(query.data)}
    </div>
  );
};
