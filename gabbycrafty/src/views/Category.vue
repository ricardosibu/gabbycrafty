<template>
    <div>
        <h1>Estamos en la categoria</h1>
        <p>Hat</p>
    </div>
</template>

<script>
export default {
    name: "Category",
    watch: {
        $route(to, from) {
            console.log(to)
        }
    },
    setup () {
        

        return {}
    }
}
</script>
