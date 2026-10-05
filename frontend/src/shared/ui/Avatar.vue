<script setup lang="ts">
import type { AvatarVariants } from '@/shared/ui'
import type { HTMLAttributes } from 'vue'
import { AvatarRoot } from 'reka-ui'
import { cn } from '@/shared/lib/utils'
import { avatarVariants } from '@/shared/ui'

const props = defineProps<{
  class?: HTMLAttributes['class']
  size?: AvatarVariants['size']
}>()
</script>

<template>
  <AvatarRoot
    data-slot="avatar"
    :data-size="size ?? 'default'"
    :class="cn(avatarVariants({ size }), props.class)"
  >
    <slot />
  </AvatarRoot>
</template>
