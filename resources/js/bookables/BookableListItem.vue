<template>
<div>
    <h1>{{ itemTitle }}</h1>
    <p>{{ itemContent }}</p>
</div>
</template>

<script>
export default {
    props: ['itemTitle', 'itemContent']
}
</script>
