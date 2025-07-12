<template>
  <div class="min-h-screen">
    <!-- Header -->
    <div class="bg-gray-50 py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-center mb-4">{{ page?.title }}</h1>
        <p class="text-xl text-gray-600 text-center max-w-3xl mx-auto">{{ page?.description }}</p>
      </div>
    </div>

    <!-- Services Grid -->
    <div class="container mx-auto px-4 py-16">
      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="service in page?.services"
          :key="service.title"
          class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <div class="p-6">
            <div class="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <Icon :name="getServiceIcon(service.icon)" class="w-8 h-8 text-primary-600" />
            </div>
            <h3 class="text-2xl font-bold mb-4">{{ service.title }}</h3>
            <p class="text-gray-600 mb-6">{{ service.description }}</p>
            
            <h4 class="font-semibold mb-3">Inkluderer:</h4>
            <ul class="space-y-2">
              <li v-for="feature in service.features" :key="feature" class="flex items-start">
                <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span class="text-gray-700">{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <section v-if="page?.callToAction" class="py-16 bg-primary-500 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">{{ page.callToAction.title }}</h2>
        <p class="text-xl mb-8 opacity-90">{{ page.callToAction.description }}</p>
        <NuxtLink
          :to="page.callToAction.buttonLink"
          class="inline-block bg-white text-primary-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          {{ page.callToAction.buttonText }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
const { page } = useContent()

const getServiceIcon = (icon) => {
  const iconMap = {
    'excavator': 'heroicons:wrench-screwdriver',
    'shield': 'heroicons:shield-check',
    'water': 'heroicons:beaker'
  }
  return iconMap[icon] || 'heroicons:cog-6-tooth'
}
</script>