<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next'

import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import { useTheme } from '@/shared/lib/use-theme'
import { Button } from '@/shared/ui'

const route = useRoute()
const { theme, toggle } = useTheme()

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
        <RouterLink
          v-if="i < breadcrumbs.length - 1"
          to="/"
          class="hover:text-foreground transition-colors"
        >
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
    </div>
  </div>
</template>
