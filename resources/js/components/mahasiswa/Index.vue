<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nama</th>
                    <th scope="col">Alamat</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="mahasiswa in mahasiswas" :key="mahasiswa.id">
                    <td>{{ mahasiswa.id }}</td>
                    <td>{{ mahasiswa.nama }}</td>
                    <td>{{ mahasiswa.alamat }}</td>
                    <td>
                        <div class="row gap-3">
                            <router-link :to="`/mahasiswa/${mahasiswa.id}`"
                                class="p-2 col border btn btn-primary">View</router-link>
                            <router-link :to="`/mahasiswa/${mahasiswa.id}/edit`"
                                class="p-2 col border btn btn-success">Edit</router-link>
                            <button @click="deleteMahasiswa(mahasiswa.id)" type="button"
                                class="p-2 col border btn btn-danger">Delete</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            mahasiswa: []
        }
    },
    async created() {
        try {
            const response = await axios.get('/api/mahasiswa');
            this.mahasiswa = response.data;
        } catch (error) {
            console.error(error);
        }
    },
    methods: {
        async deleteMahasiswa(id) {
            try {
                await axios.delete(`/api/mahasiswa/${id}`);
                this.mahasiswa = this.mahasiswa.filter(product => mahasiswa.id !== id);
            } catch (error) {
                console.error(error);
            }
        }
    }
}
</script>
