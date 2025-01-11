'use client';

import BackButton from '@/components/BackButton';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const formSchema = z.object({
  eventName: z.string().min(1, {
    message: 'Tên sự kiện là bắt buộc',
  }),
  startDate: z.string().min(1, {
    message: 'Ngày bắt đầu là bắt buộc',
  }),
  location: z.string().min(1, {
    message: 'Địa điểm là bắt buộc',
  }),
  description: z.string().optional(),
});

const AddEventPage = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventName: '',
      startDate: '',
      location: '',
      description: '',
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    toast({
      title: 'Sự kiện đã được thêm thành công',
      description: `Sự kiện "${data.eventName}" sẽ diễn ra vào ${data.startDate} tại ${data.location}`,
    });
    console.log('Event Data:', data);
  };

  return (
    <>
      <BackButton text='Back To Event' link='/events' />
      <h3 className='text-2xl mb-4'>Thêm sự kiện</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-8'>
          {/* Tên sự kiện */}
          <FormField
            control={form.control}
            name='eventName'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>
                  Tên sự kiện
                </FormLabel>
                <FormControl>
                  <Input
                    className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0'
                    placeholder='Nhập tên sự kiện'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Ngày bắt đầu */}
          <FormField
            control={form.control}
            name='startDate'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>
                  Ngày bắt đầu
                </FormLabel>
                <FormControl>
                  <Input
                    type='date'
                    className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Địa điểm */}
          <FormField
            control={form.control}
            name='location'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>
                  Địa điểm
                </FormLabel>
                <FormControl>
                  <Input
                    className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0'
                    placeholder='Nhập địa điểm tổ chức'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Mô tả sự kiện */}
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>
                  Mô tả
                </FormLabel>
                <FormControl>
                  <Textarea
                    className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0'
                    placeholder='Nhập mô tả sự kiện (tuỳ chọn)'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Nút thêm sự kiện */}
          <Button className='w-full dark:bg-slate-800 dark:text-white'>
            Thêm sự kiện
          </Button>
        </form>
      </Form>
    </>
  );
};

export default AddEventPage;
