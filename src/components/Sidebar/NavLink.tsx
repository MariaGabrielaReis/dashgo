import { ElementType } from "react";
import {
  Icon,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Text,
} from "@chakra-ui/react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  label: string;
  href: string;
}

export function NavLink({ icon, label, href, ...props }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display={"flex"} alignItems={"center"} {...props}>
        <Icon as={icon} fontSize={"24"} />
        <Text ml={"4"} fontWeight={"medium"}>
          {label}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
