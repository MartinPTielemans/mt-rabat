<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navigation -->
    <header class="bg-white shadow-sm sticky top-0 z-40">
      <nav class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center space-x-2">
            <span class="text-2xl font-bold text-primary-600">MT Rabat</span>
          </NuxtLink>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <NuxtLink 
              v-for="item in navigation" 
              :key="item._path"
              :to="item._path"
              class="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              :class="{ 'text-primary-600': $route.path === item._path }"
            >
              {{ item.title }}
            </NuxtLink>
          </div>

          <!-- Mobile menu button -->
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden">
            <Icon name="heroicons:bars-3" class="w-6 h-6" />
          </button>
        </div>

        <!-- Mobile Navigation -->
        <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item._path"
            :to="item._path"
            @click="mobileMenuOpen = false"
            class="block py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors"
            :class="{ 'text-primary-600': $route.path === item._path }"
          >
            {{ item.title }}
          </NuxtLink>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white">
      <div class="container mx-auto px-4 py-12">
        <div class="grid md:grid-cols-4 gap-8">
          <!-- Company Info -->
          <div>
            <h3 class="text-xl font-bold mb-4">MT Rabat</h3>
            <p class="text-gray-400">
              Professionel vedligeholdelse af vejrabatter i hele Danmark
            </p>
          </div>

          <!-- Services -->
          <div>
            <h4 class="font-semibold mb-4">Vores ydelser</h4>
            <ul class="space-y-2 text-gray-400">
              <li>Rabatfræsning</li>
              <li>Kantforstærkning</li>
              <li>Afvanding</li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h4 class="font-semibold mb-4">Kontakt</h4>
            <ul class="space-y-2 text-gray-400">
              <li>
                <a href="tel:+4522186262" class="hover:text-white transition-colors">
                  +45 22 18 62 62
                </a>
              </li>
              <li>
                <a href="mailto:info@mt-rabat.dk" class="hover:text-white transition-colors">
                  info@mt-rabat.dk
                </a>
              </li>
            </ul>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="font-semibold mb-4">Links</h4>
            <ul class="space-y-2 text-gray-400">
              <li v-for="item in navigation" :key="item._path">
                <NuxtLink :to="item._path" class="hover:text-white transition-colors">
                  {{ item.title }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 MT Rabat. Alle rettigheder forbeholdes.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const mobileMenuOpen = ref(false)

// Get navigation from content
const { data: navigation } = await useAsyncData('navigation', () =>
  queryContent().where({ navigation: { $exists: true } }).find()
)
</script>