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
import events from '@/data/events';
import { useToast } from '@/components/ui/use-toast';

const formSchema = z.object({
  title: z.string().min(1, {
    message: 'Title is required',
  }),
  body: z.string().min(1, {
    message: 'Body is required',
  }),
  author: z.string().min(1, {
    message: 'Author is required',
  }),
  date: z.string().min(1, {
    message: 'Date is required',
  }),
});

interface EventEditPageProps {
  params: {
    id: string;
  };
}

const EventEditPage = ({ params }: EventEditPageProps) => {
  const { toast } = useToast();

  const event = events.find((event) => event.id === params.id);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: event?.title || '',
      body: event?.body || '',
      author: event?.author || '',
      date: event?.date || '',
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    toast({
      title: 'Event has been updated successfully',
      description: `Updated by ${event?.author} on ${event?.date}`,
    });
  };

  return (
    <>
      <BackButton text='Back To Event' link='/events' />
      <h3 className='text-2xl mb-4'>Edit Events</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>
                  Title
                </FormLabel>
                <FormControl>
                  <Input
                    className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0'
                    placeholder='Enter Title'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='body'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>
                  Body
                </FormLabel>
                <FormControl>
                  <Textarea
                    className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0'
                    placeholder='Enter Body'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='author'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>
                  Author
                </FormLabel>
                <FormControl>
                  <Input
                    className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0'
                    placeholder='Enter Author'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='date'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>
                  Date
                </FormLabel>
                <FormControl>
                  <Input
                    className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0'
                    placeholder='Enter Date'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className='w-full dark:bg-slate-800 dark:text-white'>
            Update Event
          </Button>
        </form>
      </Form>
    </>
  );
};

export default EventEditPage;
