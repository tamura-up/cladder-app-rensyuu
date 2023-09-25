import { Button, FormControl, InputLabel, Stack } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import FieldErrorMessages from '@/components/shared/FieldErrorMessages';
import { useAtom } from 'jotai';
import { messageAtom } from '@/lib/jotaiAtom';
import FormErrorMessages from '@/components/shared/FormErrorMessages';
import { EvaluationApplicationWriteRequest, LadderSheet } from '@/api/@types';
import { preprocessApiError, reformatToHookFormStyle } from '@/lib/apiErrorHandle';
import { useMutation } from 'react-query';
import { apiClient } from '@/lib/apiClient';
import { AxiosError } from 'axios';
import UserSelect from '@/components/shared/UserSelect';
import SheetSelect from '@/components/shared/SheetSelect';
import { useAspidaQuery } from '@aspida/react-query';


const CreateForm = () => {
  const [initDataLoading, setInitDataLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [, addMessage] = useAtom(messageAtom);
  const [nonFieldErrors, setNonFieldErrors] = useState<string[] | null>(null);

  const [sheets, setSheets] = useState<LadderSheet[]>([]);
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm<EvaluationApplicationWriteRequest>();

  // ユーザー情報取得
  const {
    data: userData,
    isLoading: isUsersLoading,
  } = useAspidaQuery(apiClient.accounts.users, {
    query: { limit: 1000 },
    onError: () => {
      addMessage({ text: '予期せぬエラーが発生しました。', 'variant': 'error' });
    },
  });
  // シートデータの取得
  const {
    data: rawSheetData,
    isLoading: isSheetLoading,
  } = useAspidaQuery(apiClient.ladder.sheets, {
    query: { limit: 1000 },
    onError: () => {
      addMessage({ text: '予期せぬエラーが発生しました。', 'variant': 'error' });
    },
  });
  useEffect(() => {
    if (!!rawSheetData) {
      setSheets(rawSheetData.results || []);
    }
  }, [rawSheetData]);
  useEffect(() => {
    setInitDataLoading(isSheetLoading || isUsersLoading);
  }, [isSheetLoading, isUsersLoading]);


  const postRegister = (body: EvaluationApplicationWriteRequest) => {
    return apiClient.ladder.applications.$post({ body });
  };

  const mutation = useMutation(postRegister, {
    onSuccess: (res, variables) => {
      addMessage({ text: 'ラダー評価申請を提出しました', 'variant': 'success' });
      // TODO: 評価画面へ
    },
    onError: (error: AxiosError) => {
      const formMsg = preprocessApiError(error);
      if (!!formMsg) {
        const msgs = reformatToHookFormStyle(formMsg);
        for (const [key, value] of Object.entries(msgs)) {
          // @ts-ignore
          setError(key, value);
        }
        setNonFieldErrors(formMsg.nonFieldErrors);
      } else {
        addMessage({ text: '予期せぬエラーが発生しました。', 'variant': 'error' });
      }
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  const onSubmit = (data: any) => {
    mutation.mutate(data);
    setLoading(true);
    setNonFieldErrors(null);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} sx={{ pt: 3 }}>
          <Controller
            name='user'
            control={control}
            defaultValue={-1}
            rules={{ required: '選択してください' }}
            render={({ field }) =>
              <FormControl fullWidth>
                <InputLabel id='user-select-label'>申請ユーザー</InputLabel>
                <UserSelect
                  {...field}
                  users={userData ? userData!.results! : []}
                  variant='outlined'
                  required
                  labelId='user-select-label'
                  id='user-select'
                  label='申請ユーザー'
                />
              </FormControl>
            }
          />
          <FieldErrorMessages name='user' errors={errors} />

          <Controller
            name='sheet'
            control={control}
            defaultValue={-1}
            rules={{ required: '選択してください' }}
            render={({ field }) =>
              <FormControl
                variant='outlined'
                fullWidth>
                <InputLabel id='sheet-select-label'>評価シート</InputLabel>
                <SheetSelect
                  {...field}
                  sheets={sheets}
                  required
                  labelId='sheet-select-label'
                  id='sheet-select'
                  label='評価シート'
                />
              </FormControl>
            }
          />
          <FieldErrorMessages name='sheet' errors={errors} />

          <FormErrorMessages errors={nonFieldErrors} />
          <Button type='submit' variant='contained' disabled={loading || initDataLoading}>申請を提出</Button>
        </Stack>
      </form>

    </>
  );
};
export default CreateForm;
