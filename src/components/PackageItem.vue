<script setup>
import { toRefs } from 'vue'
import dayjs from '@/plugins/dayjs'

const emit = defineEmits(['openModal'])

const props = defineProps({
  package: Object
})

const { package: packageItem } = toRefs(props)
</script>

<template>
	<v-card
		class="package-item"
		variant="outlined"
		@click="emit('openModal', packageItem)"
	>
		<template v-slot:title>
			{{ packageItem.name }}
		</template>

		<template v-slot:subtitle v-if="packageItem.description">
			{{ packageItem.description }}
		</template>

		<template v-slot:text>
			<div v-if="packageItem.keywords" class="mt-1">
				<v-chip
					v-for="(keyword, index) in packageItem.keywords"
					:key="index"
					class="mr-2 mb-2"
					label
					size="small"
				>
					{{ keyword }}
				</v-chip>
			</div>
			<div class="mt-1">
				<span v-if="packageItem.author" class="package-item__author">
					{{ packageItem.author.name }}
				</span>
				<span v-if="packageItem.version" class="package-item__version">
					published {{ packageItem.version }}
				</span>
				<span class="ml-1 mr-1">•</span>
				<span v-if="packageItem.date" class="package-item__date">
					{{ dayjs.utc(packageItem.date).local().fromNow() }}
				</span>
			</div>
		</template>
	</v-card>
</template>

<style scoped lang="scss">
	.package-item {
		cursor: pointer;
		
		&__author {
			font-weight: 800;
			font-size: 14px;
		}

		&__version,
		&__date {
			font-weight: 500;
			font-size: 12px;
			color: #666;
		}

		&__date {
			font-style: italic;
		}
	}
</style>