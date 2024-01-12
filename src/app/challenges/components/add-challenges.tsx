"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { labels } from "../data/data";

import { useChallenge } from "@/context/challenge-context";
import { DateTimePicker } from "./date-time-picker";

const FormSchema = z.object({
  title: z.string().min(2, {
    message: "Write task title (ex: SEO update) ",
  }),
  label: z.string().min(2, {
    message: "Select Label (ex: bug)",
  }),
  date: z.date({
    required_error: "Please select a date and time",
    invalid_type_error: "That's not a date!",
  }),
});
const AddChallenges = () => {
  const { addChallenge } = useChallenge();
  const defaultDate = new Date();

  defaultDate.setHours(0, 0, 0, 0);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      label: "",
      date: defaultDate,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    addChallenge(data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="block p-3 md:flex gap-2 md:gap-10 justify-end items-end"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Add Challenge" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <DateTimePicker
                  date={field.value}
                  setDate={(newDate) => form.setValue("date", newDate)}
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="label"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Label" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {labels.map((label: any, index: number) => (
                      <SelectItem key={index} value={label.value}>
                        {label.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Start Challenge</Button>
        </form>
      </Form>
    </div>
  );
};

export default AddChallenges;
