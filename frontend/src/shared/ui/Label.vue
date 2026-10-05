<script setup lang="ts">
import type { LabelProps } from 'reka-ui'
import { Label } from 'reka-ui'

import type { HTMLAttributes } from 'vue'

import { cn } from '@/shared/lib/utils'

const props = defineProps<LabelProps & { class?: HTMLAttributes['class'] }>()
</script>

<template>
  <Label
    v-bind="props"
    :class="
      cn(
        'text-sm font-medium leading-none text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        props.class,
      )
    "
  />
</template>
