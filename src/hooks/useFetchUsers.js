import { useState } from 'react';
import data from '../data.json'

export const useFetchUsers = () => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const onClickFetchUser = () => {
    setIsLoading(true);
    setIsError(false);

    const users = data.map((user) => (
      {
        id: user.id,
        name: `${user.lastname} ${user.firstname}`,
        age: user.age
      }
    ));

    setUserList(users);
    setIsLoading(false);
  };

  return { userList, isLoading, isError, onClickFetchUser };
};


  // const onClickFetchUser = () => {
  //   setIsLoading(true);
  //   setIsError(false);

  //   const users = data.map((user) => (
  //     {
  //       id: user.id,
  //       name: `${user.lastname} ${user.firstname}`,
  //       age: user.age
  //     }
  //   ));
  //   setUserList(users);
  //   setIsLoading(false);
  // };