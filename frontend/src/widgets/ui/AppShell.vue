<script setup lang="ts">
import { Sidebar, SidebarInset, SidebarProvider, SidebarTrigger } from '@/shared/ui'
import { Separator } from '@/shared/ui'

import AppSidebar from './AppSidebar.vue'
import AppTopbar from './AppTopbar.vue'
</script>

<template>
  <SidebarProvider>
    <Sidebar collapsible="icon">
      <AppSidebar />
    </Sidebar>
    <SidebarInset>
      <header class="flex h-14 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger class="-ml-1" />
        <div class="mx-2 flex h-4 items-center">
          <Separator orientation="vertical" />
        </div>
        <AppTopbar />
      </header>
      <div class="flex flex-1 flex-col gap-4 p-4">
        <RouterView />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>

