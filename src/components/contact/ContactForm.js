import styled from 'styled-components';
import { FormButton } from '../styledElements/Buttons.styled';
import { textStyles, flexAlign } from '../../abstracts/Mixins';
import { AiFillExclamationCircle } from 'react-icons/ai';
import Responsive from '../../abstracts/Responsive';
import { useGlobalContext } from '../../context/context';

const StyledForm = styled.form`
  padding: 0 5rem;

  ${Responsive.sm`
    padding: 0 2rem;
  `}

  .form-control {
    margin: 1rem 0;
    border-bottom: 0.1rem solid var(--white);
  }

  .input,
  .textarea {
    ${textStyles}
    background-color: transparent;
    border: 0;
    outline: 0;
    font-size: 1.5rem;
    padding: 1.5rem 0;
    width: 100%;
    resize: none;
    color: var(--white);
  }

  .icon {
    font-size: var(--xxs);
  }

  .textarea {
    height: 15vh;
  }

  .checkbox-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: var(--gap);
    margin: 2rem 0;
  }

  .message {
    ${textStyles}
    ${flexAlign}
    gap: 1rem;
    color: var(--white);
    font-size: 1.2rem;
  }
`;

export default function ContactForm() {
  const { handleSubmit, register, errors, onSubmit } = useGlobalContext();

  const emailValidation = {
    required: 'Email is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Invalid email address',
    },
  };

  const phoneValidation = {
    required: 'Phone Number is required',
    pattern: {
      value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
      message: 'Invalid phone number',
    },
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <div className={`form-control ${errors.name && 'input-error'}`}>
        <input
          type='text'
          className='input'
          placeholder='Name'
          autoComplete='off'
          {...register('name', { required: true })}
        />
      </div>
      {errors.name && (
        <small className='message'>
          Name is required.
          <AiFillExclamationCircle className='icon' />
        </small>
      )}
      <div className={`form-control ${errors?.email && 'input-error'}`}>
        <input
          type='text'
          className='input'
          placeholder='Email'
          autoComplete='off'
          {...register('email', emailValidation)}
        />
      </div>
      {errors?.email && (
        <small className='message'>
          {errors.email.message}
          <AiFillExclamationCircle className='icon' />
        </small>
      )}
      <div className={`form-control ${errors.phone && 'input-error'}`}>
        <input
          type='text'
          className='input'
          placeholder='Phone'
          autoComplete='off'
          {...register('phone', phoneValidation)}
        />
      </div>
      {errors?.phone && (
        <small className='message'>
          {errors.phone.message}
          <AiFillExclamationCircle className='icon' />
        </small>
      )}
      <div className={`form-control ${errors.message && 'input-error'}`}>
        <textarea
          className='textarea'
          placeholder='Message'
          {...register('message', { required: true })}
        ></textarea>
      </div>
      {errors.message && (
        <small className='message'>
          Subject message is required.
          <AiFillExclamationCircle className='icon' />
        </small>
      )}
      <div>
        <FormButton type='submit' value='Submit' />
      </div>
    </StyledForm>
  );
}
