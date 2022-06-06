import { GetServerSideProps } from "next";
import React, { useEffect } from "react";
import apiUser from "../../api/User";
import { IPage, IUser } from "../../types/interface";
import ListUser from "../../components/organisms/main/list-user";
import { useAppDispatch, useAppSelector } from "../../hook";
import { addUsers } from "../../redux/slices/userSlices";
interface IProps {
  users: IUser;
  status: number;
  pages: IPage;
}
const ViewListUser = ({ users, status, pages }: any) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    //const dispatch = useAppDispatch();
    dispatch(addUsers(users))
  }, [users]);
  return (
    <>
      <ListUser pages={pages} status={status} users={users} />
    </>
  );
};
export default ViewListUser;
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const page: string | string[] | number = query.id || 1;
  const data = await (await apiUser.getPagin(page)).data;
  return {
    props: {
      users: data.data,
      pages: {
        page: data.page,
        per_page: data.per_page,
        total: data.total,
        total_pages: data.total_pages,
      },
      status: (data.status = "200"),
    },
  };
};
