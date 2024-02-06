<script setup>
import { toRefs } from 'vue'
import dayjs from '@/plugins/dayjs'

const emit = defineEmits(['close'])

const props = defineProps({
  package: Object,
	isOpen: Boolean
})

const { package: packageItem, isOpen } = toRefs(props)
</script>

<template>
	<v-dialog
		v-model="isOpen"
		width="600"
		:close-on-back="false"
	>
		<v-card>
			<v-card-title>
				{{ packageItem.name }}
			</v-card-title>
			<v-card-text>
				<span v-if="packageItem.description">
					{{ packageItem.description }}
				</span>
				<div>
					<div v-if="packageItem.author" class="mt-4 d-flex">
						<strong>Author:</strong>
						<span class="ml-2">
							{{ packageItem.author.name }}
						</span>
					</div>
					<div v-if="packageItem.version" class="mt-4 d-flex">
						<strong>Version:</strong>
						<span class="ml-2">
							{{ packageItem.version }}
						</span>
					</div>
					<div v-if="packageItem.date" class="mt-4 d-flex">
						<strong>Date:</strong>
						<span class="ml-2">
							{{ dayjs.utc(packageItem.date).local().fromNow() }}
						</span>
					</div>
					<div v-if="packageItem.links.npm" class="mt-4">
						<strong>NPM:</strong>
						<v-btn 
							class="ml-2" 
							size="small"
							color="blue-darken-4"
							variant="text" 
							target="_blank"
							:href="packageItem.links.npm"
							>
							Link
						</v-btn>
					</div>
					<div v-if="packageItem.links.repository" class="mt-4">
						<strong>GitHub:</strong>
						<v-btn 
							class="ml-2" 
							size="small"
							color="blue-darken-4"
							variant="text" 
							target="_blank"
							:href="packageItem.links.repository"
						>
							Link
						</v-btn>
					</div>
					<div v-if="packageItem.keywords" class="mt-4">
						<strong>Keywords:</strong>
						<v-chip
							v-for="(keyword, index) in packageItem.keywords"
							:key="index"
							class="ml-2 mb-2"
							label
							size="small"
						>
							{{ keyword }}
						</v-chip>
					</div>
				</div>
			</v-card-text>
			<v-card-actions>
				<v-btn 
					color="primary" 
					block 
					@click="emit('close')"
				>
					Close
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>
