import React from 'react';
import { MenuItem, Select } from '@mui/material';

const UserSelect = React.forwardRef(function X(props: any, ref: any) {
  const { data: data, ..._props } = props;

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
