import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { SearchValidation } from "@/lib/_backend/validations/ZodValidation";
import { Input } from "../ui/input";
import FetchApi from "@/lib/Engine/RapidApi";
import { useMemo, useState } from "react";
// import { useHelper } from "@/context/ContextHelper";
// import { IamUrl } from "@/types/Type";

const SearchFrom = () => {


  const [searchUrl, setUrl] = useState("https://en.wikipedia.org/wiki/Noida");

  const data = useMemo(() => searchUrl, [searchUrl]);
  FetchApi(data);
  const form = useForm<z.infer<typeof SearchValidation>>({
    resolver: zodResolver(SearchValidation),
    defaultValues: {
      searchUrl: "",
    },
  });

  async function onSubmit(values: z.infer<typeof SearchValidation>) {
    setUrl(values.searchUrl);
  }

  return (
    <div className="relative col-span-5  py-1 ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="searchUrl"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="paste your url here "
                    className="h-12  relative  border-none placeholder:text-light-4 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 "
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

export default SearchFrom;
