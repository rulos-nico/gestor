<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'

import type { HTMLAttributes } from 'vue'

import { cn } from '@/shared/lib/utils'

const props = defineProps<
  PrimitiveProps & {
    class?: HTMLAttributes['class']
  }
>()
</script>

<template>
  <Primitive
    data-slot="sidebar-group-label"
    data-sidebar="group-label"
    :as="as"
    :as-child="asChild"
    :class="
      cn(
        'text-sidebar-foreground/70 ring-sidebar-ring h-10 rounded-md px-3 text-xs font-medium uppercase tracking-wider transition-[margin,opacity] duration-200 ease-linear group-data-[collapsible=icon]:-mt-10 group-data-[collapsible=icon]:opacity-0 focus-visible:ring-2 [&>svg]:size-5 flex shrink-0 items-center outline-hidden [&>svg]:shrink-0',
        props.class,
      )
    "
  >
    <slot />
  </Primitive>
</template>
