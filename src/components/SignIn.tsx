import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
import InputMask from "react-input-mask";

// Defina o esquema de validação do Zod
const FormSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  telefone: z.string().min(14, "Telefone é obrigatório"), // Considera a máscara
  cpf: z.string().min(14, "CPF é obrigatório"), // Considera a máscara
  idade: z.number().min(0, "Idade inválida"),
  endereco: z.string().min(1, "Endereço é obrigatório"),
});

export function SignInForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      cpf: "",
      idade: undefined,
      endereco: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("Formulário enviado com sucesso!", data);
  }

  return (
    <Card className="mx-auto max-w-md">
      <CardHeader>
        <CardTitle className="text-xl">Cadastro</CardTitle>
        <CardDescription>Preencha os dados abaixo</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 flex flex-col justify-center items-center"
          >
            {/* Campo Telefone com máscara */}
            <FormField
              control={form.control}
              name="telefone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <InputMask
                      mask="(99) 99999-9999" // Máscara de telefone no padrão brasileiro
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="(XX) XXXXX-XXXX"
                    >
                      {/* {(inputProps) => <Input {...inputProps} />} */}
                    </InputMask>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Campo CPF com máscara */}
            <FormField
              control={form.control}
              name="cpf"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CPF</FormLabel>
                  <FormControl>
                    <InputMask
                      mask="999.999.999-99" // Máscara de CPF no padrão brasileiro
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="XXX.XXX.XXX-XX"
                    >
                      {/* {(inputProps) => <Input {...inputProps} />} */}
                    </InputMask>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Botão de Enviar */}
            <Button type="submit" className="w-full">
              Enviar
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
