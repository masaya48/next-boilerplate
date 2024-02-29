'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  name: z.string(),
});

export const Form: FC = () => {
  const { register } = useForm({
    resolver: zodResolver(schema),
  });
  return (
    <form>
      <input type="text" {...register('name')} />
      <button>submit</button>
    </form>
  );
};
