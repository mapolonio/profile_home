import { ref } from 'vue'
import { defineStore } from 'pinia'

const fetchAndIncreaseVisits = async (): Promise<number> => {
  const response = await fetch('/.netlify/functions/increase-visit-number')

  if (!response.ok) {
    return Promise.reject(new Error('Response not OK'))
  }

  const { visitNumber } = await response.json()

  return visitNumber
}

export const useVisitsStore = defineStore('visits', () => {
  const visits = ref<number>(0)
  const isLoading = ref(false)
  const hasError = ref(false)

  const updateVisitsCount = async () => {
    isLoading.value = true

    fetchAndIncreaseVisits()
      .then((loadedVisits) => {
        visits.value = loadedVisits
      })
      .catch(() => {
        hasError.value = true
      })
      .finally(() => {
        isLoading.value = false
      })
  }

  return { visits, isLoading, hasError, updateVisitsCount }
})
