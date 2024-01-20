import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useVisitsStore = defineStore('visits', () => {
  const visits = ref<number>(0)
  const isLoading = ref(false)
  const hasError = ref(false)

  const getAndUpdateVisits = async () => {
    const loadedVisits = await new Promise<number>((resolve) => {
      isLoading.value = true
      setTimeout(() => {
        isLoading.value = false
        resolve(1234)
      }, 500)
    })

    visits.value = loadedVisits
  }

  return { visits, isLoading, hasError, getAndUpdateVisits }
})
