import { ref } from 'vue'

const SHEETS_URL = import.meta.env.VITE_SHEETS_URL

export function useContactForm() {
  const submitted = ref(false)
  const loading   = ref(false)
  const error     = ref('')

  async function handleSubmit(event) {
    const form = event.target
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    if (!SHEETS_URL) {
      console.error('[useContactForm] VITE_SHEETS_URL not set in .env.local')
      error.value = 'Error de configuración. Inténtalo de nuevo más tarde.'
      return
    }

    const data = {
      nombre:  form.nombre.value.trim(),
      email:   form.email.value.trim(),
      asunto:  form.asunto.value.trim(),
      mensaje: form.mensaje.value.trim(),
    }

    loading.value = true
    error.value   = ''

    try {
      const res = await fetch(SHEETS_URL, {
        method:  'POST',
        // Apps Script requires text/plain to avoid CORS preflight
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body:    JSON.stringify(data),
      })

      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      submitted.value = true
    } catch (e) {
      error.value = 'No se pudo enviar el mensaje. Por favor, inténtalo de nuevo.'
    } finally {
      loading.value = false
    }
  }

  return { submitted, loading, error, handleSubmit }
}
