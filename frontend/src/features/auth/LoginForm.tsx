
import { Button, Label, TextInput } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import { login } from '../../api/apiAuth';
import { useNavigate } from 'react-router-dom';

type FormValues = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const navigate = useNavigate();
  const onSubmit = (data: FormValues) => {
    login(data.email, data.password).then((res) => {
      localStorage.setItem('user', res.data.token);
      navigate("/admin");
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex max-w-md mx-auto flex-col gap-4'>

      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="email"
            value="Your email"
          />
        </div>
        <TextInput
          {...register("email")}
          id="email1"
          placeholder="Email"
          required
          type="email"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="password1"
            value="Your password"
          />
        </div>
        <TextInput
          id="password1"
          required
          type="password"
          {...register("password")}
          placeholder='Password'
        />
      </div>

      <Button type="submit">
        Submit
      </Button>
    </form>
  );
};
