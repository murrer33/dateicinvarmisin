'use client';

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

interface Step6ContactProps {
  onSubmit: (contact: string) => void;
}

const formSchema = z.object({
  contact: z.string().min(3, { message: "Lütfen geçerli bir bilgi gir." }),
});

export default function Step6Contact({ onSubmit }: Step6ContactProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contact: "",
    },
  });

  function handleFormSubmit(values: z.infer<typeof formSchema>) {
    onSubmit(values.contact);
  }

  return (
    <Card className="w-full max-w-md text-center shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold font-headline">Sana nasıl ulaşabilirim?</CardTitle>
        <CardDescription>Telefon numaran veya Instagram adresin olabilir.</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleFormSubmit)}>
          <CardContent>
            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">İletişim Bilgisi</FormLabel>
                  <FormControl>
                    <Input placeholder="@instagram veya 555..." {...field} className="text-center" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button type="submit" size="lg" className="font-bold">Gönder</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
