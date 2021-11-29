import { Stack } from "@chakra-ui/react";
import React from "react";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing='12' align='flex-start'>
      <NavSection title='GERAL'>
        <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
        <NavLink icon={RiContactsLine}>Usuários</NavLink>
      </NavSection>

      <NavSection title='AUTOMAÇÂO'>
        <NavLink icon={RiInputMethodLine}>Formulários</NavLink>
        <NavLink icon={RiGitMergeLine}>Automaçâo</NavLink>
      </NavSection>
    </Stack>
  )
}