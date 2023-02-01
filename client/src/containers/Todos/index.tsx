import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import { GET_TODOS } from './gql';
import { useQuery } from 'react-apollo';
import CreateTodos from './CreateTodos';
import ListsTodos from './ListsTodos';
import Divider from 'components/Divider/Divider';
import { useHistory } from 'react-router-dom';
import ActiveTaskNumber from './ActiveTaskNumber';
import { useContext } from 'react';
import { AuthContext } from 'context/authContex';
const TodosContainer = styled.div`
  color: #fafafa;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 650px;
  height: 750px;
  transform: translate(-50%, -50%);
  background-color: #393f49;
  border-radius: 5px;
  padding: 4rem;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.3);
  overflow-y: auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
`;

const DateContent = styled.div`
  font-size: 18px;
`;

const LogOut = styled.button`
  display: flex;
  position: relative;
  width: 100px;
  hight: 200px;
  background: ${p => p.theme.colors.primary};
`;

const Todos: React.FC = () => {
  const history = useHistory();
  const { logout } = useContext(AuthContext);
  const { loading, error, data } = useQuery(GET_TODOS, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
  });

  let taskActiveCount;
  if (data) taskActiveCount = data.getTodos.filter((el: any) => !el.checked).length;

  return (
    <TodosContainer>
      <Header>
        <div>
          <LogOut onClick={logout}>LogOut</LogOut>
          <DateContent>{format(new Date(), 'iiii, LLL d')}</DateContent>
          <ActiveTaskNumber />
        </div>
      </Header>
      <CreateTodos />
      <Divider />
      <ListsTodos />
    </TodosContainer>
  );
};

export default Todos;
