<template>
    <div>
        <div class="flex items-center">
            <div class="border border-r-0 rounded-l border-gray-400 w-full p-[10px] h-[46px]">
                <p class="" v-if="fileName">Fichier : {{ trimmedFileName }}</p>
            </div>
            <a @click="triggerFileInput" class="border border-gray-400 rounded-r cursor-pointer bg-gray-300 text-gray-500 p-[10px] px-5 hover:bg-gray-400 hover:text-white">
                Parcourir
            </a>
        </div>
        <input class="hidden" id="file" type="file" @change="handleFileUpload"/>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue';

    let selectedFile = ref(null);
    let fileName = ref('');

    const handleFileUpload = event => {
        selectedFile.value = event.target.files[0];
        fileName.value = event.target.files[0].name;
        console.log(selectedFile.value);
    };

    const triggerFileInput = () => {
        const fileInput = document.getElementById('file');
        fileInput.click();
    };

    const trimmedFileName = computed(() => {
        if (fileName.value.length > 30) {
            return `${fileName.value.substring(0, 10)}...`;
        }
        return fileName.value;
    });
</script>

<style scoped>
</style>