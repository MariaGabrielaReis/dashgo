import { forwardRef, ForwardRefRenderFunction } from "react";
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

export const InputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = ({ name, label, ...props }, ref) => {
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
        ref={ref}
        {...props}
      />
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
