
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { fetchLabels } from '../_services/services';

export type LabelsListProps = {
};



export const LabelsList = (props: LabelsListProps) => {
  const {  } = props;

  const query = useQuery({queryKey: ['labels2b'], queryFn: fetchLabels});

  return (
    <div>

      <h3>Labels</h3>
        <ul>
          {query.data?.map((v) => <li>{v.name}</li>)}
        </ul>
    </div>
  );
};
