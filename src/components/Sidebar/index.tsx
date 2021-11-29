import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useBreakpointValue,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { useSidebarDrawer } from "../../Context/SidebarDrawerContext";

import { SidebarNav } from "./SidebarNav";

export function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer()

  const isDrawerSiderbar = useBreakpointValue({
    base: true,
    lg: false,
  })

  if (isDrawerSiderbar) {
    return (
      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg='gray.800' p='4'>
            <DrawerCloseButton at='6' />
            <DrawerHeader>Navegação</DrawerHeader>

            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return (
    <Box as='aside' w='64' mr='8'>
      <SidebarNav />
    </Box>
  )
}