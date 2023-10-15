import {
  Box,
  chakra,
  Container,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import logoweb from "../assets/logosemfundo.png";
import Image from "next/image";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <footer>
      <Box
        bg={useColorModeValue("gray.700", "gray.200")}
        color={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          spacing={4}
          justify={"center"}
          align={"center"}
        >
          <section>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              gap="90px"
              minW={20}
            >
              <Image
                src={logoweb}
                height={32}
                width={32}
                alt="Logo de Mauricio Dall Onder"
              />
              <Heading
                textAlign="center"
                fontSize={{ base: "1xl", md: "1xl" }}
                lineHeight="1.2"
                fontWeight="bold"
                ml="-80px"
              >
                Mauricio Dall Onder - Web Developer
              </Heading>
            </Box>
          </section>

          <nav>
            <Stack direction={"row"} spacing={6}>
              <Link
                href="/info/PrivacyPolicy"
                role="link"
                aria-label="Política de Privacidade"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/info/CookiesPolicy"
                role="link"
                aria-label="Política de Cookies"
              >
                Política de Cookies
              </Link>
              <Link
                href="/info/TermsOfUse"
                role="link"
                aria-label="Termos de Uso"
              >
                Termos de uso
              </Link>
              <Link
                href="/info/About"
                role="link"
                aria-label="Sobre Mauricio Dall Onder"
              >
                Sobre
              </Link>
            </Stack>
          </nav>
        </Container>

        <Box
          borderTopWidth={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
        >
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ base: "center", md: "space-between" }}
            align={{ base: "center", md: "center" }}
          >
            <Text fontSize="lg" fontWeight="bold">
              © 2023 Mauricio Dall Onder. All rights reserved
            </Text>

            <Stack direction={"row"} spacing={6}>
              <SocialButton
                label={"Facebook"}
                href={"https://www.facebook.com/mauricio.dallonder"}
              >
                <FontAwesomeIcon icon={faFacebook} size="2xl" />
              </SocialButton>
              <SocialButton
                label={"Linkedin"}
                href={
                  "https://www.linkedin.com/in/mauricio-dall-onder-40876a25b/"
                }
              >
                <FontAwesomeIcon icon={faLinkedin} size="2xl" />
              </SocialButton>
              <SocialButton
                label={"GitHub"}
                href={"https://github.com/mauricioDallOnder"}
              >
                <FontAwesomeIcon icon={faGithub} size="2xl" />
              </SocialButton>
            </Stack>
          </Container>

          <Stack
            direction={"row"}
            justifyContent="center"
            
            spacing={6}
          >
            <Text color="white" textAlign='justify'>
              Importante: O conteúdo presente neste blog tem um caráter
              estritamente informativo, não substituindo de forma alguma a
              orientação médica ou de especialistas. Em caso de dúvida, é essencial que você busque
              a orientação médica de confiança.{" "}
            </Text>
          </Stack>
        </Box>
      </Box>
    </footer>
  );
}
