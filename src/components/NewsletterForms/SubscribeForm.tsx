import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Flex,
  Stack,
  Heading,
  Text,
  Input,
  Button,
  Icon,
  useColorModeValue,
  FormControl,
  FormErrorMessage,
  useToast,
  Box,
  VStack,
} from "@chakra-ui/react";
import { NotificationIcon } from "@/svg/NotificationIcon"; 

type FormData = {
  firstName: string;
  email: string;
};

export default function SubscribeForm() {
  const [isSubscribe, setIsSubscribe] = useState(true); // Estado para alternar entre inscrever e descadastrar
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const toast = useToast();

  const onSubmit = async (data: FormData) => {
    const apiEndpoint = isSubscribe ? "/api/subscribe" : "/api/unsubscribe";
    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const message = isSubscribe
          ? "Inscrição efetuada com sucesso."
          : "Descadastro efetuado com sucesso.";
        toast({
          title: message,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: "O email já esta cadastrado.",
          description:  "Não foi possível enviar o formulário, pois o email já esta cadastrado.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Falha na conexão.",
        description: "Não foi possível enviar o formulário, verifique sua conexão.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      reset();
    }
  };

  const toggleSubscriptionMode = () => {
    setIsSubscribe(!isSubscribe);
  };

  return (
    <>
      <Flex as="main" align="center" justify="center" w="full" tabIndex={-1}>
        <VStack
          as="article"
          boxShadow={"2xl"}
          bg={useColorModeValue("white", "gray.800")} // Mais escuro para o modo escuro
          rounded={"xl"}
          p={10}
          spacing={8}
          align={"center"}
          w={{ base: "90%", md: "500px" }}
        >
          <Icon as={NotificationIcon} w={24} h={24} />
          <Box as="header" textAlign='center' marginBottom='2px'>
            <Heading
              as="h1"
              textTransform={"uppercase"}
              fontSize={"2xl"}
              color={useColorModeValue("gray.800", "white")} 
            >
              {isSubscribe ? "Inscrever-se" : "Descadastrar-se"}
            </Heading>
            <Text fontSize={"md"} color="rgba(0, 0, 0, 0.87)"> 
              {isSubscribe
                ? "Assine nossa newsletter e fique atualizado!"
                : "Digite seu e-mail para descadastrar-se da nossa newsletter."}
            </Text>
          </Box>
          <FormControl as="section" isInvalid={!!errors.email} role="form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={4} direction={{ base: "column", md: "row" }} w={"full"}>
                <Input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email é obrigatório",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Email inválido",
                    },
                  })}
                  placeholder="Digite seu email"
                  color={useColorModeValue("gray.800", "white")} // Contraste aprimorado para texto do input
                  bg={useColorModeValue("white", "gray.700")} // Mais escuro para o modo escuro
                  rounded={"full"}
                  border={0}
                  _focus={{
                    bg: useColorModeValue("gray.200", "gray.800"), // Ajuste no foco para manter o contraste
                    outline: "none",
                  }}
                />

                <Button
                   colorScheme={isSubscribe === true ? '#2e7d32"' : 'rgb(211, 47, 47)'}
                   flex={'1 0 auto'}
                   rounded={'full'}
                  type='submit'
                  color="rgb(255, 255, 255)"
                >
                  {isSubscribe ? "Inscrever" : "Descadastrar"}
                </Button>
              </Stack>
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </form>
          </FormControl>
          <Button as="footer"  colorScheme={isSubscribe === true ? '#2e7d32"' : 'rgb(211, 47, 47)'} cursor="pointer" variant="link" onClick={toggleSubscriptionMode} aria-label={isSubscribe ? "Mudar para descadastro" : "Mudar para inscrição"}>
            {isSubscribe ? "Ou descadastrar-se" : "Ou inscrever-se"}
          </Button>
        </VStack>
      </Flex>
    </>
  );
}
