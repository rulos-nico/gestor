import { useColorMode } from '@vueuse/core'

import { computed } from 'vue'

export function useTheme() {
  const colorMode = useColorMode({
    selector: 'html',
    attribute: 'class',
    initialValue: 'auto',
    modes: {
      dark: 'dark',
      light: '',
      auto: '',
    },
  })

  const theme = computed(() => (colorMode.value === 'dark' ? 'dark' : 'light'))

  function toggle() {
    colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
  }

  return { theme, toggle }
}

