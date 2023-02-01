import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import styled from 'styled-components';
import { GET_TODOS } from './gql';

const ActiveNumber = styled.div`
  font-size: 14px;
  color: ${p => p.theme.colors.primary};
`;

const ActiveTaskNumber: React.FC = () => {
  const { data } = useQuery(GET_TODOS, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
  });
  let doneCount;
  if (data) {
    doneCount = data.getTodos.filter((el: any) => !el.checked).length;
  }
  return (
    <ActiveNumber>{`${doneCount} active ${doneCount === 1 ? 'task' : 'tasks'} `}</ActiveNumber>
  );
};

export default ActiveTaskNumber;
