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
                            <form role="form">
                                <div class="card-body">
                                    <div class="form-group">
                                        <label for="name">Category Name</label>
                                        <input type="text" class="form-control" name="name" id="name" placeholder="Enter category name">
                                    </div>

                                    <div class="form-group">
                                        <label for="description">Category Description</label>
                                        <textarea class="form-control" name="description" id="description" cols="30" rows="5" placeholder="Enter Category description..."></textarea>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <button type="submit" class="btn btn-primary"><i class="fas fa-plus-circle"></i> Create</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
