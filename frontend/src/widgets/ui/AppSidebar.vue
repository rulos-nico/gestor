<script setup lang="ts">
import { FileText, FlaskConical, HardHat, LayoutDashboard, Settings } from 'lucide-vue-next'

import { RouterLink, useRoute } from 'vue-router'

// import logoFull from '@/shared/assets/Logos/LOGO_INGETEC_P_AZUL.png'
// import logoSymbol from '@/shared/assets/Logos/SIMBOLO_INGETEC_P_AZUL.png'
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/shared/ui'
import { useSidebar } from '@/shared/ui/utils'

const route = useRoute()
const { state } = useSidebar()

const items = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    to: '/home',
  },
  {
    title: 'Facturación',
    icon: FileText,
    to: '/facturacion',
  },
  {
    title: 'Laboratorio',
    icon: FlaskConical,
    to: '/laboratorio',
  },
  {
    title: 'Campo',
    icon: HardHat,
    to: '/campo',
  },
  {
    title: 'Configuración',
    icon: Settings,
    to: '/configuracion',
  },
]

function isActive(path: string) {
  return route.path === path
}
</script>

<template>
  <SidebarHeader class="border-b border-sidebar-border px-3 py-4">
    <div class="flex items-center justify-center px-2">
      <img v-if="state === 'collapsed'" :src="logoSymbol" alt="Ingetec" class="h-9 w-auto" />
      <img v-else :src="logoFull" alt="Ingetec" class="h-9 w-auto" />
    </div>
  </SidebarHeader>
  <SidebarContent>
    <SidebarGroup>
      <SidebarGroupLabel> Navegación </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem v-for="item in items" :key="item.title">
            <SidebarMenuButton
              :is-active="isActive(item.to)"
              :as-child="true"
              :tooltip="item.title"
            >
              <RouterLink :to="item.to" class="flex items-center gap-2">
                <component :is="item.icon" class="size-4" />
                <span>{{ item.title }}</span>
              </RouterLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  </SidebarContent>
</template>

