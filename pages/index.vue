<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-[600px] flex items-center justify-center text-white">
      <NuxtImg 
        v-if="page?.hero?.backgroundImage"
        :src="page.hero.backgroundImage" 
        alt="Hero background"
        class="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div class="absolute inset-0 bg-black/50"></div>
      <div class="relative z-10 container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">{{ page?.hero?.title }}</h1>
        <p class="text-lg md:text-xl mb-8 max-w-3xl mx-auto">{{ page?.hero?.subtitle }}</p>
        <NuxtLink to="/kontakt" class="inline-block bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
          {{ page?.hero?.primaryButtonText }}
        </NuxtLink>
      </div>
    </section>

    <!-- Features Section -->
    <section v-if="page?.features" class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="feature in page.features" :key="feature.title" class="bg-white p-6 rounded-lg shadow-md">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <Icon :name="getIconName(feature.icon)" class="w-6 h-6 text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
            <p class="text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Competencies Section -->
    <section v-if="page?.competencies" class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">{{ page.competencies.title }}</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="column in page.competencies.columns" :key="column.title" class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-4 text-primary-600">{{ column.title }}</h3>
            <ul class="space-y-2">
              <li v-for="item in column.items" :key="item" class="flex items-start">
                <span class="text-primary-500 mr-2">•</span>
                <span class="text-gray-700">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA Section -->
    <section v-if="page?.contactSection" class="py-16 bg-primary-500 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">{{ page.contactSection.title }}</h2>
        <p class="text-xl mb-8">{{ page.contactSection.description }}</p>
        <a href="tel:+4522186262" class="inline-block bg-white text-primary-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          {{ page.contactSection.buttonText }}
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
const { page } = useContent()

// Map icon names to actual icon components
const getIconName = (icon) => {
  const iconMap = {
    'settings': 'heroicons:cog-6-tooth',
    'truck': 'heroicons:truck',
    'clock': 'heroicons:clock'
  }
  return iconMap[icon] || 'heroicons:square-3-stack-3d'
}
</script>