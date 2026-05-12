import { ref } from 'vue'

/**
 * Simple contact-form state: validation + fake-submit handler.
 * Returns reactive refs for `submitted` flag and the `handleSubmit` fn.
 */
export function useContactForm() {
  const submitted = ref(false)

  function handleSubmit(event) {
    const form = event.target
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }
    submitted.value = true
  }

  return { submitted, handleSubmit }
}
