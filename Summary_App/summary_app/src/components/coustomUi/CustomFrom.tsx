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
import { SignUpValidation } from "@/lib/_backend/validations/ZodValidation";
import { CreateNewUser } from "@/lib/Query/Mutation";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Loder from "./Loder";
import { useNavigate } from "react-router-dom";

const CustomFrom = () => {

   const {mutateAsync:createUser, isPending} = CreateNewUser();
    
   const navigate = useNavigate();

  const form = useForm<z.infer<typeof SignUpValidation>>({
    resolver: zodResolver(SignUpValidation),
    defaultValues: {
      name: "",
      email: "",
      username: "",
      password: "",
    },
  });

  // console.clear();
  // console.log(form)

  async function onSubmit(values: z.infer<typeof SignUpValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const newUser = await createUser(values);

    if (newUser) {
      navigate("/sign-in")
    }
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="relative flex flex-col mt-4 gap-5 w-full "
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
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
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="create a unique username"
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your email"
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
    </>
  );
};

export default CustomFrom;
