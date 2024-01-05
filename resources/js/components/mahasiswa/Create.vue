<template>
    <div>
        <h2 v-if="isNewMahasiswa">Add Mahasiswa</h2>
        <h2 v-else>Edit Mahasiswa</h2>
        <form @submit.prevent="submitForm">
            <div class="mb-3">
                <label for="name" class="form-label">Nama:</label>
                <input class="form-control" type="text" id="name" v-model="mahasiswa.nama" required />
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Alamat:</label>
                <textarea class="form-control" id="description" v-model="mahasiswa.alamat" required></textarea>
            </div>
            <button type="submit" v-if="isNewMahasiswa" class="btn btn-primary">Add Product</button>
            <button type="submit" v-else class="btn btn-primary">Update Product</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            product: {
                name: '',
                description: '',
                price: 0
            }
        }
    },
    computed: {
        isNewMahasiswa() {
            return !this.$route.path.includes('edit');
        }
    },
    async created() {
        if (!this.isNewMahasiswa) {
            const response = await axios.get(`/api/mahasiswa/${this.$route.params.id}`);
            this.mahasiswa = response.data;
        }
    },
    methods: {
        async submitForm() {
            try {
                if (this.isNewMahasiswa) {
                    await axios.post('/api/mahasiswa', this.mahasiswa);
                } else {
                    await axios.put(`/api/mahasiswa/${this.$route.params.id}`, this.mahasiswa);
                }
                this.$router.push('/');
            } catch (error) {
                console.error(error);
            }
        }
    }
}
</script>
