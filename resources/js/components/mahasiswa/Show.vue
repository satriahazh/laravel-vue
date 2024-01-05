
<template>
    <div>
        <h5 id="associating-form-text-with-form-controls">Name:</h5>
        <h6>{{ mahasiswa.nama }}</h6>
        <h5 id="associating-form-text-with-form-controls">Description:</h5>
        <p>{{ mahasiswa.alamat }}</p>
        <router-link :to="`/mahasiswa/${mahasiswa.id}/edit`" class="btn btn-primary">Edit</router-link>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            product: {}
        }
    },
    async created() {
        try {
            const response = await axios.get(`/api/mahasiswa/${this.$route.params.id}`);
            this.product = response.data;
        } catch (error) {
            console.error(error);
        }
    }
}
</script>
