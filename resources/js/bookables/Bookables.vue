<template>
<div>
    <bookable-list-item item-title="Cheap Villa" item-content="A very cehap villa" :price="1500"></bookable-list-item>
    <bookable-list-item item-title="Cheap Videography" item-content="Cheap prices for video" :price="1000"></bookable-list-item>
</div>
</template>

<script>
import BookableListItem from "./BookableListItem";
export default {
components: {
BookableListItem
}
}
</script>
