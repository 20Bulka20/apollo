import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import FullPageLoader from 'components/Loaders/FullPageLoader';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from 'containers/Auth/gql';
import styled from 'styled-components';

import { BodyContainer, BodyMain, UsersContainer, UserBlock } from './styled';

const EmptyContainer = styled.div`
  display: flex;
`;

const MainPage: React.FC = () => {
  const { loading, error, data } = useQuery(GET_USERS, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <FullPageLoader />;
  if (error) return <div style={{ color: 'red' }}>{error.message}</div>;

  return (
    <>
      <Header />
      <BodyContainer>
        <Sidebar />
        <BodyMain>
          {data.getUsers && data.getUsers.length ? (
            data.getUsers.map((user: { email: string; password: string }, index: number) => {
              return (
                <React.Fragment key={index}>
                  <UsersContainer>
                    <UserBlock>Login : {user.email}</UserBlock>
                    <UserBlock>Password: {user.password}</UserBlock>
                  </UsersContainer>
                </React.Fragment>
              );
            })
          ) : (
            <EmptyContainer data-testid="empty-container">
              You currrently have 0 users! Add some more . . .
            </EmptyContainer>
          )}
        </BodyMain>
      </BodyContainer>
    </>
  );
};

export default MainPage;
