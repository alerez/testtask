<script setup>
import { nextTick, ref } from 'vue'

import { getPackages } from '@/services/usePackages'

import PackageItem from '@/components/PackageItem.vue'
import PackageItemModal from '@/components/PackageItemModal.vue'

const search = ref('')
const packages = ref([])
const packagesList = ref()
const isLoading = ref(false)
const page = ref(1)
const pagesLength = ref(1)

const getSearchingPackages = async (packageName, page = 1) => {
  isLoading.value = true
  pagesLength.value = 0
  
  const response = await getPackages(packageName, page)

  const { objects, total } = response.data

  packages.value = objects
  pagesLength.value = Math.round(total / 10)

  isLoading.value = false
}

const searchPackages = () => {
  getSearchingPackages(search.value, (page.value - 1) * 10)
}

const changePage = () => {
  nextTick(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })
  getSearchingPackages(search.value, (page.value - 1) * 10)
}

const isModalOpen = ref(false)
const packageItemDetails = ref()

const openPackageModal = (packageItem) => {
  packageItemDetails.value = packageItem
  isModalOpen.value = true
}

const closePackageModal = () => {
  isModalOpen.value = false
}
</script>

<template>
  <v-container class="h-100">
    <v-text-field
      v-model="search"
      label="Search package"
      variant="outlined"
      prepend-inner-icon="mdi-magnify"
      clearable
      :loading="isLoading"
      @click:append="searchPackages"
      @keydown.enter.prevent="searchPackages"
    />


    <div class="d-flex justify-center align-center mt-16" v-if="isLoading">
      <v-progress-circular
        indeterminate
        color="primary"
        :size="50"
      />
    </div>
   
    <div v-if="!isLoading" ref="packagesList">
      <package-item
        v-for="(item, index) in packages"
        class="mb-3"
        :key="index"
        :package="item.package"
        @open-modal="openPackageModal"
      />
    </div>

    <v-pagination
      v-if="pagesLength > 1 && !isLoading"
      v-model="page"
      size="small"
      :length="pagesLength"
      :total-visible="4"
      @update:modelValue="changePage"
    />

    <package-item-modal :is-open="isModalOpen" :package="packageItemDetails" @close="closePackageModal" />
  </v-container>
</template>
