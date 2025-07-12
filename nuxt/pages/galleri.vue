<template>
  <div class="min-h-screen">
    <!-- Header -->
    <div class="bg-gray-50 py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-center mb-4">{{ page?.title }}</h1>
        <p class="text-xl text-gray-600 text-center max-w-3xl mx-auto">{{ page?.description }}</p>
      </div>
    </div>

    <!-- Category Filter -->
    <div v-if="page?.categories" class="sticky top-0 bg-white shadow-sm z-10 py-4">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap gap-2 justify-center">
          <button
            v-for="category in page.categories"
            :key="category.slug"
            @click="activeCategory = category.slug"
            :class="[
              'px-4 py-2 rounded-full font-medium transition-colors',
              activeCategory === category.slug
                ? 'bg-primary-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
    </div>

    <!-- Gallery Grid -->
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="image in filteredImages"
          :key="image.title"
          class="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
          @click="openLightbox(image)"
        >
          <NuxtImg
            :src="image.image"
            :alt="image.title"
            class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 class="font-semibold text-lg">{{ image.title }}</h3>
              <p class="text-sm opacity-90">{{ image.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Load More -->
      <div v-if="hasMoreImages" class="text-center mt-8">
        <button
          @click="loadMore"
          class="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
        >
          {{ page?.loadMoreText || 'Vis flere' }}
        </button>
      </div>
    </div>

    <!-- CTA Section -->
    <section v-if="page?.callToAction" class="py-16 bg-gray-50">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">{{ page.callToAction.title }}</h2>
        <p class="text-xl text-gray-600 mb-8">{{ page.callToAction.description }}</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/kontakt" class="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
            {{ page.callToAction.primaryButtonText }}
          </NuxtLink>
          <a :href="`tel:${page.callToAction.phoneNumber}`" class="px-6 py-3 bg-white text-primary-500 border-2 border-primary-500 rounded-lg hover:bg-primary-50 transition-colors">
            {{ page.callToAction.secondaryButtonText }}
          </a>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <div v-if="lightboxImage" @click="closeLightbox" class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div class="relative max-w-4xl w-full">
        <button @click="closeLightbox" class="absolute -top-12 right-0 text-white hover:text-gray-300">
          <Icon name="heroicons:x-mark" class="w-8 h-8" />
        </button>
        <NuxtImg
          :src="lightboxImage.image"
          :alt="lightboxImage.title"
          class="w-full h-auto rounded-lg"
        />
        <div class="mt-4 text-white">
          <h3 class="text-xl font-semibold">{{ lightboxImage.title }}</h3>
          <p class="mt-2 text-gray-300">{{ lightboxImage.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { page } = useContent()

const activeCategory = ref('alle')
const displayCount = ref(6)
const lightboxImage = ref(null)

const filteredImages = computed(() => {
  if (!page.value?.images) return []
  
  const filtered = activeCategory.value === 'alle'
    ? page.value.images
    : page.value.images.filter(img => img.category === activeCategory.value)
  
  return filtered.slice(0, displayCount.value)
})

const hasMoreImages = computed(() => {
  if (!page.value?.images) return false
  const totalImages = activeCategory.value === 'alle'
    ? page.value.images.length
    : page.value.images.filter(img => img.category === activeCategory.value).length
  return displayCount.value < totalImages
})

const loadMore = () => {
  displayCount.value += 6
}

const openLightbox = (image) => {
  lightboxImage.value = image
}

const closeLightbox = () => {
  lightboxImage.value = null
}

// Reset display count when category changes
watch(activeCategory, () => {
  displayCount.value = 6
})
</script>