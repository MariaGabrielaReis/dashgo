import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...props }: InputProps) {
  return (
    <FormControl>
      {!!label && (
        <FormLabel htmlFor={name} fontWeight={"regular"}>
          {label}
        </FormLabel>
      )}
      <ChakraInput
        id={name}
        name={name}
        focusBorderColor={"teal.500"}
        bg={"gray.800"}
        variant={"filled"}
        _hover={{
          bg: "gray.800",
        }}
        size={"lg"}
        {...props}
      />
    </FormControl>
  );
}
