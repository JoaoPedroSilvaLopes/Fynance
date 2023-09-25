import { Col, Form } from 'react-bootstrap';
import { FaFile } from 'react-icons/fa';
import { Controller, SubmitHandler, useFormContext } from 'react-hook-form';
import {
  TextInput,
} from '../../../../components';
import { FileFormInput } from '../../../../domain-types';

import * as S from './file-form.styles';
import { useEffect, useState } from 'react';

type Props = {
  onSubmit: SubmitHandler<FileFormInput>;
};

const FileForm: React.FC<Props> = ({
  onSubmit,
}) => {
  const [filePreview, setFilePreview] = useState<File | undefined>(undefined)
  const { control, formState, handleSubmit, getValues } =
    useFormContext<FileFormInput>();
  const currrentFile = getValues('file')

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement & {
      file: File;
    }
    
    setFilePreview(target.file)
    return
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <S.Card className="mb-3">
        {currrentFile && <model-viewer src={currrentFile}/>}
      </S.Card>
      <Col className="mb-3">
        <Controller
          name="nome"
          control={control}
          render={({ field }) => (
            <TextInput
              placeholder="Nome do Arquivo"
              variant="secondary"
              leftIcon={FaFile}
              error={formState.errors.nome?.message}
              required={true}
              {...field}
            />
          )}
        />
      </Col>
      <Col className="mb-4">
        <Controller
          name="file"
          control={control}
          render={({ field: { onChange, ...rest } }) => (
            <input
              type='file'
              accept='image/glb'
              onChange={handleOnChange}
              {...rest}
            />
          )}
        />
      </Col>
    </Form>
  );
};

export default FileForm;
