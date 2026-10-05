<script setup lang="ts">
import { ChevronDown, LogOut, Moon, Sun } from 'lucide-vue-next'

import { computed } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'

import type { EmployeeData, ExternalUserData } from '@/shared/api/auth'

import { useTheme } from '@/shared/lib/use-theme'
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  UserAvatar,
} from '@/shared/ui'

const route = useRoute()
const router = useRouter()
const auth = useAuthStore()
const { theme, toggle } = useTheme()

function isEmployee(u: EmployeeData | ExternalUserData): u is EmployeeData {
  return 'employeeLastName' in u
}

const userName = computed(() => {
  const u = auth.user
  if (!u) return ''
  return isEmployee(u)
    ? `${u.employeeName ?? ''} ${u.employeeLastName ?? ''}`.trim()
    : (u.employeeName ?? '')
})


const userRole = computed(() => {
  const u = auth.user
  if (!u) return ''
  return isEmployee(u) ? u.employeePosition : u.roleName
})

const userImage = computed(() => {
  const u = auth.user
  return u && isEmployee(u) ? u.employeePicture : ''
})

function handleLogout() {
  auth.logout()
  router.push('/login')
}

const breadcrumbs = computed(() => {
  const name = route.name?.toString() || route.path
  return ['DIG', name.charAt(0).toUpperCase() + name.slice(1)]
})
</script>

<template>
  <div class="flex w-full items-center justify-between">
    <!-- Breadcrumbs -->
    <nav class="flex items-center gap-1 text-sm text-muted-foreground">
      <template v-for="(crumb, i) in breadcrumbs" :key="crumb">
        <RouterLink v-if="i < breadcrumbs.length - 1" to="/" class="hover:text-foreground transition-colors">
          {{ crumb }}
        </RouterLink>
        <span v-else class="text-foreground font-medium">{{ crumb }}</span>
        <span v-if="i < breadcrumbs.length - 1" class="mx-1">›</span>
      </template>
    </nav>

    <!-- Right side actions -->
    <div class="flex items-center gap-2">
      <!-- Theme toggle -->
      <Button variant="ghost" size="icon" class="size-8" @click="toggle" :title="`Tema: ${theme}`">
        <Moon v-if="theme === 'dark'" class="size-4" />
        <Sun v-else class="size-4" />
      </Button>

      <!-- Avatar with dropdown -->
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <button type="button"
            class="flex items-center gap-3 rounded-md border border-transparent px-3 py-1.5 hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer">
            <UserAvatar :name="userName" :role="userRole" :image="userImage" />
            <ChevronDown class="size-4 text-muted-foreground" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Mi perfil</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem class="text-destructive focus:text-destructive cursor-pointer" @click="handleLogout">
            <LogOut class="size-4" />
            Cerrar sesión
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </div>
</template>

