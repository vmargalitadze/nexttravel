'use client'
 
import { useForm } from 'react-hook-form';
import { ReloadIcon } from '@radix-ui/react-icons';

type SubmitButtonProps = {
  className?: string;
  text?: string;
};

export function SubmitButton({
  text = 'submit',
}: SubmitButtonProps) {
  const { handleSubmit, formState: { isSubmitting } } = useForm();

  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`capitalize join-btn`}
    >
      {isSubmitting ? (
        <>
          <ReloadIcon className="join-btn w d-inline-flex align-items-center" />
          დაელოდე
        </>
      ) : (
        text
      )}
    </button>
  );
}
