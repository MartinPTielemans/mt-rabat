<template>
  <div class="min-h-screen">
    <!-- Header -->
    <div class="bg-gray-50 py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-center mb-4">{{ page?.title }}</h1>
        <p class="text-xl text-gray-600 text-center max-w-3xl mx-auto">{{ page?.description }}</p>
      </div>
    </div>

    <div class="container mx-auto px-4 py-12">
      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div>
          <h2 class="text-2xl font-bold mb-6">Kontakt information</h2>
          
          <div class="space-y-6">
            <!-- Phone -->
            <div v-if="page?.contactInfo?.phone" class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="heroicons:phone" class="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 class="font-semibold text-lg">Telefon</h3>
                <a :href="`tel:${page.contactInfo.phone}`" class="text-primary-600 hover:text-primary-700 text-lg">
                  {{ page.contactInfo.phone }}
                </a>
                <p class="text-gray-600 text-sm">{{ page.contactInfo.phoneHours }}</p>
              </div>
            </div>

            <!-- Email -->
            <div v-if="page?.contactInfo?.email" class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="heroicons:envelope" class="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 class="font-semibold text-lg">Email</h3>
                <a :href="`mailto:${page.contactInfo.email}`" class="text-primary-600 hover:text-primary-700 text-lg">
                  {{ page.contactInfo.email }}
                </a>
                <p class="text-gray-600 text-sm">{{ page.contactInfo.emailResponse }}</p>
              </div>
            </div>

            <!-- Address -->
            <div v-if="page?.contactInfo?.address" class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="heroicons:map-pin" class="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 class="font-semibold text-lg">Adresse</h3>
                <p class="text-gray-700">{{ page.contactInfo.address }}</p>
              </div>
            </div>

            <!-- Emergency -->
            <div v-if="page?.contactInfo?.emergencyPhone" class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="heroicons:exclamation-triangle" class="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 class="font-semibold text-lg">Akut service</h3>
                <a :href="`tel:${page.contactInfo.emergencyPhone}`" class="text-red-600 hover:text-red-700 text-lg">
                  {{ page.contactInfo.emergencyPhone }}
                </a>
                <p class="text-gray-600 text-sm">{{ page.contactInfo.emergencyHours }}</p>
              </div>
            </div>
          </div>

          <!-- Service Areas -->
          <div v-if="page?.serviceAreas" class="mt-12">
            <h2 class="text-2xl font-bold mb-6">{{ page.serviceAreas.title }}</h2>
            <p class="text-gray-600 mb-6">{{ page.serviceAreas.description }}</p>
            <div class="grid grid-cols-2 gap-4">
              <div v-for="area in page.serviceAreas.areas" :key="area" class="flex items-center space-x-2">
                <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-500" />
                <span>{{ area }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-gray-50 p-8 rounded-lg">
          <h2 class="text-2xl font-bold mb-6">{{ page?.contactForm?.title || 'Send os en besked' }}</h2>
          
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Navn *</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Telefon *</label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div v-if="page?.contactForm?.serviceOptions">
              <label for="service" class="block text-sm font-medium text-gray-700 mb-2">Type ydelse</label>
              <select
                id="service"
                v-model="form.service"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">Vælg ydelse</option>
                <option v-for="option in page.contactForm.serviceOptions" :key="option.value" :value="option.value">
                  {{ option.label }}
                </option>
              </select>
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Besked *</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Fortæl os om dit projekt..."
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-primary-500 text-white py-3 px-6 rounded-lg hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {{ isSubmitting ? 'Sender...' : (page?.contactForm?.submitButtonText || 'Send besked') }}
              </button>
            </div>

            <p v-if="page?.contactForm?.privacyNotice" class="text-sm text-gray-600">
              {{ page.contactForm.privacyNotice }}
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { page } = useContent()

const form = ref({
  name: '',
  phone: '',
  email: '',
  service: '',
  message: ''
})

const isSubmitting = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // In a real app, you'd send this to your backend
  console.log('Form submitted:', form.value)
  
  // Reset form
  form.value = {
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  }
  
  isSubmitting.value = false
  
  // Show success message (you could use a toast library)
  alert('Tak for din besked! Vi vender tilbage hurtigst muligt.')
}
</script>