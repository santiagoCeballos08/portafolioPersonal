// src/composables/useCv.ts
import { ref } from 'vue';
import { personalCVData } from '@/data/cv.data';
import type { CVData } from '../interfaces/cv.interfaces';

export function useCv() {
	const cvInfo = ref<CVData>(personalCVData);

	const printCV = () => {
		window.print();
	};

	const getFullHeader = () => {
		return `${cvInfo.value.name} - ${cvInfo.value.title}`;
	};

	return {
		cvInfo,
		printCV,
		getFullHeader,
	};
}
