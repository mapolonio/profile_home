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

export type Status = 'loading' | 'error' | 'ready'

export const useVisitsStore = defineStore('visits', () => {
  const visits = ref<number>(0)
  const status = ref<Status>('loading')

  const updateVisitsCount = async () => {
    status.value = 'loading'

    fetchAndIncreaseVisits()
      .then((loadedVisits) => {
        visits.value = loadedVisits
        status.value = 'ready'
      })
      .catch(() => {
        status.value = 'error'
      })
  }

  return { visits, status, updateVisitsCount }
})
