<template>
    <div class="container">
        <header>
            <div class="px-3 py-2 bg-dark text-white">
                <div class="container">
                    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <ul>
                            <li>
                                <router-link to="/mahasiswa/create" class="nav-link text-white"
                                    style="text-decoration: none; color: white;"><svg class="bi d-block mx-auto mb-1"
                                        width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path fill="currentColor"
                                            d="M7 9h10V7H7v2Zm11 14q-2.075 0-3.538-1.463T13 18q0-2.075 1.463-3.538T18 13q2.075 0 3.538 1.463T23 18q0 2.075-1.463 3.538T18 23Zm-.5-2h1v-2.5H21v-1h-2.5V15h-1v2.5H15v1h2.5V21ZM3 21V3h18v8.7q-.725-.35-1.463-.525T18 11q-.275 0-.513.013t-.487.062V11H7v2h6.1q-.425.425-.787.925T11.675 15H7v2h4.075q-.05.25-.063.488T11 18q0 .825.15 1.538T11.675 21H3Z" />
                                    </svg>Add Mahasiswa</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>

        <div class="card">
            <div class="card-body">
                <div class="container-fluid">
                    <router-view></router-view>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>
