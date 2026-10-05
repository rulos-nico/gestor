<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { HTMLAttributes } from 'vue'

import Avatar from './Avatar.vue'
import AvatarFallback from './AvatarFallback.vue'

interface Props {
  name: string
  role?: string
  email?: string
  initials?: string
  image?: string
  size?: 'sm' | 'md' | 'lg'
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
})

// Si la carga de la imagen falla, mostramos el fallback de iniciales.
// Se resetea cada vez que cambia la URL para reintentar con la nueva.
const imgFailed = ref(false)
watch(
  () => props.image,
  () => {
    imgFailed.value = false
  },
)

const sizeClasses = computed(() => ({
  sm: 'size-6',
  md: 'size-10',
  lg: 'size-12',
}))

const avatarClass = computed(() => [sizeClasses.value[props.size], props.class])

function getInitials(name: string) {
  if (!name?.trim()) return '?'
  const parts = name.trim().split(/\s+/)
  if (parts.length >= 2) {
    return ((parts[0]?.[0] ?? '') + (parts[parts.length - 1]?.[0] ?? '')).toUpperCase()
  }
  return name.slice(0, 2).toUpperCase()
}
</script>

<template>
  <div class="flex items-center gap-3">
    <div class="flex flex-col items-start">
      <span class="text-sm font-medium leading-tight text-left">{{ name }}</span>
      <span v-if="role" class="text-xs text-muted-foreground leading-tight text-left">
        {{ role }}
      </span>
      <span v-if="email" class="text-xs text-muted-foreground leading-tight text-left">
        {{ email }}
      </span>
    </div>
    <Avatar :class="avatarClass">
      <!-- img nativo (sin el probe de reka-ui que se traba con imágenes cacheadas).
           referrerpolicy declarado ANTES de src para que aplique al request. -->
      <img
        v-if="image && !imgFailed"
        referrerpolicy="no-referrer"
        :src="image"
        :alt="name"
        class="aspect-square size-full rounded-full object-cover"
        @error="imgFailed = true"
      />
      <AvatarFallback v-else>{{ initials || getInitials(name) }}</AvatarFallback>
    </Avatar>
  </div>
</template>
