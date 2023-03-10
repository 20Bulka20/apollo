import React from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import FullPageLoader from 'components/Loaders/FullPageLoader';
import Divider from 'components/Divider/Divider';
import DeleteTodo from './DeleteTodo';
import UpdateTodo from './UpdateTodo';
import { AuthContext } from 'context/authContex';
import { GET_TODOS } from './gql';
import { useHistory } from 'react-router';

const EmptyContainer = styled.div`
  display: flex;
`;

const EmptyNumber = styled.div`
  color: ${p => p.theme.colors.primary};
  text-decoration: underline;
  padding: 0 0.4rem;
`;

const ListsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ListsLeftAppendix = styled.div`
  display: flex;
`;

const ListsRightAppendix = styled.div`
  cursor: pointer;

  svg {
    &:hover {
      fill: #ff4161;
    }
  }
`;

const ListsContent = styled.div<IListsContent>`
  padding-left: 1rem;
  text-decoration: ${p => p.checked && 'line-through'};
`;

const ListsTodos = () => {
  const { logout } = useContext(AuthContext);
  const { loading, error, data } = useQuery(GET_TODOS, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
  });
  const history = useHistory();
  if (loading) return <FullPageLoader />;
  if (error) {
    logout();
  }
  return (
    <>
      {data && data.getTodos && data.getTodos.length ? (
        data.getTodos.map((todo: { id: string; task: string; checked: boolean }, index: number) => {
          return (
            <React.Fragment key={index}>
              <ListsContainer>
                <ListsLeftAppendix>
                  <UpdateTodo todo={todo} />
                  <ListsContent checked={todo.checked}>{todo.task}</ListsContent>
                </ListsLeftAppendix>
                <ListsRightAppendix>
                  <DeleteTodo id={todo.id} />
                </ListsRightAppendix>
              </ListsContainer>
              <Divider />
            </React.Fragment>
          );
        })
      ) : (
        <EmptyContainer data-testid="empty-container">
          You currrently have <EmptyNumber> 0 </EmptyNumber> task ! Add some more . . .
        </EmptyContainer>
      )}
    </>
  );
};

interface IListsContent {
  checked?: boolean;
}

export default ListsTodos;
