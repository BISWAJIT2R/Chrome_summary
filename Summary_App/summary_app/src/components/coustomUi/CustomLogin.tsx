import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { LoginValidation } from "@/lib/_backend/validations/ZodValidation";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { LoggedUser } from "@/lib/Query/Mutation";
import { useNavigate } from "react-router-dom";
import Loder from "./Loder";

const CustomLogin = () => {
  const { mutateAsync: LoginUser, isPending } = LoggedUser();

  const navigate = useNavigate();

  const form = useForm<z.infer<typeof LoginValidation>>({
    resolver: zodResolver(LoginValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof LoginValidation>) {
    const userFound = await LoginUser(values);

    if (userFound) {
      navigate("/auth/home");
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative flex flex-col mt-4 gap-5 w-full "
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Enter your name"
                  className="shad-input"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  className="shad-input"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
       <Button type="submit" className="shad-button_primary" disabled={isPending}>
           {
            isPending? <Loder/>: "Submit"
           }
          </Button>
      </form>
    </Form>
  );
};

export default CustomLogin;
