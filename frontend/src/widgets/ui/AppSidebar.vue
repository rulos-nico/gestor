<script setup lang="ts">
import { FileText, FlaskConical, HardHat, LayoutDashboard, Settings } from 'lucide-vue-next'

import { RouterLink, useRoute } from 'vue-router'

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
    to: '/Dashboard',
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
      <span
        class=""
        :class="state === 'collapsed' ? 'text-base' : 'text-lg'"
      >
        {{ state === 'collapsed' ? 'N' : 'N/A' }}
      </span>
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
