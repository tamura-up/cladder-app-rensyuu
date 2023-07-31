import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useRouter } from 'next/router';
import { useState } from 'react';
import FieldErrorMessages from '@/components/shared/FieldErrorMessages';
import { useAtom } from 'jotai';
import { messageAtom } from '@/lib/jotaiAtom';
import FormErrorMessages from '@/components/shared/FormErrorMessages';
import { EvaluationApplicationWriteRequest } from '@/api/@types';
import { preprocessApiError, reformatToHookFormStyle } from '@/lib/apiErrorHandle';
import { useMutation } from 'react-query';
import { apiClient } from '@/lib/apiClient';
import { AxiosError } from 'axios';
import { CopyToClipboard } from 'react-copy-to-clipboard';


const CreateForm = () => {
  const [loading, setLoading] = useState(false);
  const [, addMessage] = useAtom(messageAtom);
  const [nonFieldErrors, setNonFieldErrors] = useState<string[] | null>(null);
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm<EvaluationApplicationWriteRequest>();

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
        <Stack spacing={2}>
          <Controller
            name='user'
            control={control}
            defaultValue={0}
            rules={{ required: '選択してください'}}

            render={({ field }) =>
              <TextField {...field}
                         label='ユーザー'
                         required
                         InputLabelProps={{
                           shrink: true,
                         }}
                         error={!!errors.user}
                         helperText={errors.user?.message || ''}
              />}
          />
          <FieldErrorMessages name='user' errors={errors} />
          <Controller
            name='sheet'
            control={control}
            defaultValue={0}
            rules={{ required: '選択してください'}}

            render={({ field }) =>
              <TextField {...field}
                         label='シート'
                         required
                         InputLabelProps={{
                           shrink: true,
                         }}
                         error={!!errors.sheet}
                         helperText={errors.sheet?.message || ''}
              />}
          />
          <FieldErrorMessages name='sheet' errors={errors} />

          <FormErrorMessages errors={nonFieldErrors} />
          <Button type='submit' variant='contained' disabled={loading}>登録</Button>
        </Stack>
      </form>
    </>
  );
};
export default CreateForm;
