import React from 'react';
import { MenuItem, Select, SelectProps } from '@mui/material';

/**
 * ユーザー選択用の Select
 */


interface UserInfo {
  id: number,
  fullName: string,
}

interface Props extends SelectProps {
  users: UserInfo[];
}


const UserSelect = React.forwardRef(function X(props: Props, ref: any) {
  const { users: data, ..._props } = props;

  return (<>
    <Select
      {..._props}
      ref={ref}
    >
      {data.map((user: any) => (
        <MenuItem key={user.id} value={user.id}>{user.fullName}</MenuItem>
      ))}
    </Select>
  </>);
});

export default UserSelect;
