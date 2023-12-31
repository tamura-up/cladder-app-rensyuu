'use client';

import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';
import { useSnackbar } from 'notistack';
import { messageAtom } from '@/lib/jotaiAtom';

const CommonSnackbar = () => {
  /*
   * Snackbar のメッセージ表示を管理する
   *
   * document: https://iamhosseindhv.com/notistack/
   */
  const [message] = useAtom(messageAtom);
  const resetMessage = useResetAtom(messageAtom);

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (!!message) {
      resetMessage();
      const option = { autoHideDuration: 3000 };
      let txt: string;
      if (typeof message === 'string') {
        txt = message;
      } else {
        txt = message.text;
        // @ts-ignore
        option['variant'] = message.variant;
        option['autoHideDuration'] = message.autoHideDuration ?? option['autoHideDuration'];
      }
      if (txt.length > 0) enqueueSnackbar(txt, option);
    }
  }, [message]);

  return (<></>);
};

export default CommonSnackbar;
