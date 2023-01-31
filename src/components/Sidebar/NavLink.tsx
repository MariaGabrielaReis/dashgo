import { ElementType } from "react";
import {
  Icon,
  Link,
  LinkProps as ChakraLinkProps,
  Text,
} from "@chakra-ui/react";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  label: string;
}

export function NavLink({ icon, label, ...props }: NavLinkProps) {
  return (
    <Link display={"flex"} alignItems={"center"} {...props}>
      <Icon as={icon} fontSize={"24"} />
      <Text ml={"4"} fontWeight={"medium"}>
        {label}
      </Text>
    </Link>
  );
}
