import React from 'react';

type FormContainerProps = {
  children: React.ReactNode;
  action: (formData: FormData) => Promise<{ message: string; token?: string; user?: any }>;
  apiRoute: string;  // Accept the API endpoint as a prop
};

function FormContainer({ children, action, apiRoute }: FormContainerProps) {
  return (
    <form action={apiRoute} method="post">
      {children}
    </form>
  );
}

export default FormContainer;