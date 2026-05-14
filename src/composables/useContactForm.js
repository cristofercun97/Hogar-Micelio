import { ref } from 'vue'

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx6HCTovp8TAdRse4O0KMUoMLtU8tncZT7YX2qQajFh6Vcde-krAYMZ87Sdd4tdnQRw/exec'

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

    const data = {
      nombre:  form.nombre.value,
      email:   form.email.value,
      asunto:  form.asunto.value,
      mensaje: form.mensaje.value,
    }

    loading.value = true

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode:   'no-cors',
        body:   JSON.stringify(data),
      })

      alert('Mensaje enviado correctamente.')
      form.reset()
    } catch (err) {
      console.error('Error enviando formulario:', err)
      alert('Hubo un error al enviar el formulario. Inténtalo de nuevo.')
    } finally {
      loading.value = false
    }
  }

  return { submitted, loading, error, handleSubmit }
}
