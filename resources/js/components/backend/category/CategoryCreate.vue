<template>
    <div class="container">
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Add Category</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><router-link to="/backend/dashboard">Home</router-link></li>
                            <li class="breadcrumb-item active">Add Category</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>

        <section class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card card-primary">
                            <div class="card-header">
                                <div class="row">
                                    <div class="col-md-8">
                                        <h3 class="card-title card-title-head"><i class="fas fa-cubes"></i> Add Category</h3>
                                    </div>
                                    <div class="col-md-4 text-right">
                                        <button class="btn btn-sm btn-dark btn-card-head"><i class="fas fa-arrow-circle-left"></i><router-link to="/backend/category-list"> Back to list</router-link></button>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                            <form @submit.prevent='addCategory()'>
                                <div class="card-body">
                                    <div class="form-group">
                                        <label for="name">Category Name</label>
                                        <input v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }" type="text" class="form-control" name="name" placeholder="Enter category name">
                                        <has-error :form="form" field="name"></has-error>
                                    </div>

                                    <div class="form-group">
                                        <label for="description">Category Description</label>
                                        <textarea v-model="form.description" :class="{ 'is-invalid': form.errors.has('description') }" class="form-control" name="description" cols="30" rows="5" placeholder="Enter Category description..."></textarea>
                                        <has-error :form="form" field="description"></has-error>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <button :disabled="form.busy" type="submit" class="btn btn-primary"><i class="fas fa-plus-circle"></i> Create</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- snotify -->
        <vue-snotify></vue-snotify>
    </div>
</template>

<script>
export default {
    data: () => ({
        form: new Form({
            name: '',
            description: ''
        })
    }),

    methods: {
        addCategory() {
            this.form.busy = true
            this.form.post('/backend/category/create')
            .then(response => {
                // console.log(response.data)
                // this.$router.push('/backend/category-list')
                if(this.form.successful){
                    this.$snotify.success('Category Added', 'Success')
                }else{
                    this.$snotify.error('Something went wrong try again later', 'Error')
                }
                this.form.reset()
            })
            .catch(e => {
                console.log(e)
            })
        }
    }
}
</script>

<style scoped>

</style>
