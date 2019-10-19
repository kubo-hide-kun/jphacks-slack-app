<template>
  <!-- <div class="back"> -->
    <div class="float-view">
      <v-date-picker 
        v-model="picker"
        color="#ED0254"
        header-color="#3F0F40"
      />
    </div>
  <!-- </div> -->
</template>

<script>
export default {
  // props:{ value : false },
  data: () => ({ 
    picker: new Date().toISOString().substr(0, 10),
  }),
  methods: {
    // leaveRestForm() {
    //   console.log("");//es
    //   this.$emit('input', false);
    // }
  }
};
</script>
<style scoped>
.back {
  position: relative;
  z-index: 500;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5)
}

.float-view {
  position: relative;
  z-index: 1000;
  width: 300px;
  height: 300px;
  top: 40%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>