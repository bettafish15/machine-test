import React, { FC, useRef } from 'react';
import { useClickOutside, useForm } from 'hooks/index';
import { getDateTime, getDifferenceOfTwoDates, shmoment } from 'utils/date';
import { TSubmitHandler } from 'hooks/useForm/types';
import { createEventSchema } from 'validation-schemas/index';
import { IModalValues } from './types';
import { TPartialEvent } from 'types/event';
import { TextField } from 'components/common/form-elements';
import cn from 'classnames';

import styles from './modal-form-event.module.scss';
import { DateTime } from 'luxon';

interface IModalFormEventProps {
  textSendButton: string;
  textSendingBtn: string;
  defaultEventValues: IModalValues;
  closeModal: () => void;
  handlerSubmit: (eventData: TPartialEvent) => void;
}

const ModalFormEvent: FC<IModalFormEventProps> = ({
  textSendButton,
  textSendingBtn,
  closeModal,
  defaultEventValues,
  handlerSubmit
}) => {
  const modalRef = useRef<HTMLDivElement>();

  const { values, handleChange, handleSubmit, setValue, errors, submitting } = useForm<IModalValues>({
    defaultValues: defaultEventValues,
    rules: createEventSchema
  });

  const isValid = Object.keys(errors).length === 0;

  const onSubmit: TSubmitHandler<IModalValues> = async (data) => {
    const newEvent: TPartialEvent = {
      title: data.title,
      date: data.date.toString()
    };

    await handlerSubmit(newEvent);
    closeModal();
  }

  useClickOutside(modalRef, closeModal);

  return (
    <div className="overlay">
      <div className={styles.modal} ref={modalRef}>
        <div className={styles.modal__content}>
          <button
            className={styles.modal__content__close}
            onClick={closeModal}
          >
            <i className="fas fa-times"></i>
          </button>
          <form
            className={styles.modal__form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              type="text"
              name="title"
              placeholder="Title"
              onChange={handleChange}
              value={values.title}
              error={errors.title}
              className={styles.modal__form__title}
              fullWidth
            />
              <div className={cn(styles.modal__form__date, styles.modal__form__group)}>
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  value={values.date || DateTime.now().toFormat('YYYY-MM-DD')}
                  onChange={(e) => {
                    if(!e.currentTarget.value) {
                      setValue('date', '');
                      return;
                    }
                    const value = DateTime.fromFormat(e.currentTarget.value, 'yyyy-MM-dd');
                    setValue('date', value.toFormat('yyyy-MM-dd'));
                  }}
                />
              </div>
            <button
              type="submit"
              className={styles.modal__form__btn}
              disabled={submitting || !isValid}
            >
              {submitting ? textSendingBtn : textSendButton}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalFormEvent;
