'use client';

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
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from '@/components/ui/select';

const formSchema = z.object({
  gameName: z.string().min(1, { message: 'Tên game là bắt buộc' }),
  genre: z.string().min(1, { message: 'Thể loại game là bắt buộc' }),
  image: z
    .any()
    .refine((file) => file?.size <= 5 * 1024 * 1024, { message: 'Kích thước ảnh không được vượt quá 5MB' })
    .refine((file) => ['image/jpeg', 'image/png', 'image/gif'].includes(file?.type), {
      message: 'Chỉ chấp nhận các định dạng JPEG, PNG, GIF',
    }),
});

const AddGamePage = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gameName: '',
      genre: '',
      image: undefined,
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      console.log('Game Data:', {
        ...data,
        imagePreview: reader.result, // Xem trước ảnh
      });
      toast({
        title: 'Game đã được thêm thành công',
        description: `Tên game: ${data.gameName}, Thể loại: ${data.genre}`,
      });
    };
    reader.readAsDataURL(data.image);
  };

  return (
    <>
      <h3 className='text-2xl mb-4'>Thêm game mới</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-8'>
          {/* Tên game */}
          <FormField
            control={form.control}
            name='gameName'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>
                  Tên game
                </FormLabel>
                <FormControl>
                  <Input
                    className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0'
                    placeholder='Nhập tên game'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Thể loại game */}
          <FormField
            control={form.control}
            name='genre'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>
                  Thể loại
                </FormLabel>
                <FormControl>
                  <Select
                    onValueChange={(value) => field.onChange(value)}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder='Chọn thể loại' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='RPG'>RPG</SelectItem>
                      <SelectItem value='FPS'>FPS</SelectItem>
                      <SelectItem value='Sports'>Sports</SelectItem>
                      <SelectItem value='Strategy'>Strategy</SelectItem>
                      <SelectItem value='Adventure'>Adventure</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Tải ảnh */}
          <FormField
            control={form.control}
            name='image'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>
                  Tải ảnh
                </FormLabel>
                <FormControl>
                  <Input
                    type='file'
                    accept='image/jpeg,image/png,image/gif'
                    className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0'
                    onChange={(e) => field.onChange(e.target.files?.[0])}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Nút thêm game */}
          <Button className='w-full dark:bg-slate-800 dark:text-white'>
            Thêm game
          </Button>
        </form>
      </Form>
    </>
  );
};

export default AddGamePage;
