export type actionFunction = (
    prevState: any,
    formData: FormData
  ) => Promise<{ message: string }>;
  
  export type PropertyCardProps = {
    name: string;
    email:string;
    password:string;
    id: string;
  

  };