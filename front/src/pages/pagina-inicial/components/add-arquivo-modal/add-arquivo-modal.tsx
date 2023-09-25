import { FaPlus } from 'react-icons/fa';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { Button, MessageList, Modal, ModalProps } from '../../../../components';
import { ValidationError, useErrors } from '../../../../core';
import { fileValidationSchema } from '../../../../domain-types';
import { FileFormInput } from 'src/domain-types';
import { FileForm } from '..';
import { useAddArquivo } from '../../hooks';

type Props = Pick<ModalProps, 'isOpen' | 'onHide'>;

const AddArquivoModal: React.FC<Props> = ({ isOpen, onHide }) => {
  const form = useForm<FileFormInput>({
    resolver: yupResolver(fileValidationSchema),
    mode: 'onChange',
  });
  const { errors, setErrors, addError, clearErrors } = useErrors();
  const { mutate, isLoading, isSuccess } = useAddArquivo();

  useEffect(() => {
    if (isSuccess) {
      onSuccess();
    }
  }, [isSuccess]);

  const submitButton = (
    <Button
      type="submit"
      disabled={!form.formState.isValid}
      isLoading={isLoading}
    >
      Salvar
    </Button>
  );

  const onSubmit: SubmitHandler<FileFormInput> = (data) => {
    mutate(data, { onSuccess, onError });
  };

  const onSuccess = () => {
    form.reset();
    clearErrors();
    onClose();
  };

  const onClose = () => {
    form.reset();
    clearErrors();
    onHide();
  };

  const onError = (error: unknown) => {
    if (error instanceof ValidationError) {
      setErrors(error.errors);
    } else {
      addError((error as Error).message);
    }
  };

  const modalConfigs: ModalProps = {
    isOpen,
    title: 'Cadastro de Arquivo',
    icon: FaPlus,
    actions: [submitButton],
    onHide: onClose,
    size: 'md',
  };

  return (
    <Modal {...modalConfigs}>
      <FormProvider {...form}>
        {errors.length > 0 && (
          <MessageList variant="danger" items={errors} onClose={clearErrors} />
        )}
        <FileForm onSubmit={onSubmit} />
      </FormProvider>
    </Modal>
  );
};

export default AddArquivoModal;
