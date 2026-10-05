<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { Check } from 'lucide-vue-next'
import { CheckboxIndicator, CheckboxRoot } from 'reka-ui'

import type { HTMLAttributes } from 'vue'

import { cn } from '@/shared/lib/utils'

const props = withDefaults(
  defineProps<{
    defaultValue?: boolean
    modelValue?: boolean
    class?: HTMLAttributes['class']
  }>(),
  {
    defaultValue: false,
    modelValue: false,
  },
)

const emits = defineEmits<{
  (e: 'update:modelValue', payload: boolean): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
</script>

<template>
  <CheckboxRoot
    v-model="modelValue"
    :class="
      cn(
        'peer h-4 w-4 shrink-0 rounded border border-white/30 bg-transparent',
        'ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'data-[state=checked]:border-red-600 data-[state=checked]:bg-red-600 data-[state=checked]:text-white',
        props.class,
      )
    "
  >
    <CheckboxIndicator class="flex items-center justify-center text-current">
      <Check class="size-3.5" />
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
