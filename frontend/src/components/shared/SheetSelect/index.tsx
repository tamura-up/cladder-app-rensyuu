import React from 'react';
import { MenuItem, Select, SelectProps } from '@mui/material';

/**
 * シート選択用の Select
 */


interface SheetInfo {
  id: number,
  name: string,
  level: number,
}

interface Props extends SelectProps {
  sheets: SheetInfo[];
}

const RomeNumbers = ['0', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

const romeNum = (x: number) => {
  if (x >= RomeNumbers.length) return x.toString();
  return RomeNumbers[x];
};

const SheetSelect = React.forwardRef(function X(props: Props, ref: any) {
  const { sheets: data, ..._props } = props;

  return (<>
    <Select
      {..._props}
      ref={ref}
    >
      {data.map((sheet: any) => (
        <MenuItem key={sheet.id} value={sheet.id}>【レベル {romeNum(sheet.level)}】{sheet.name}</MenuItem>
      ))}
    </Select>
  </>);
});

export default SheetSelect;
