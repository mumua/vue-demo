<template>
    <div class="layout">
        <Layout>
            <Footer class="layout-footer-center">2018 &copy; geowin</Footer>
        </Layout>
    </div>
</template>

<style lang="less" scoped>
.layout {
  background: #f5f7f9;
  position: relative;
  overflow: hidden;
}
.layout-footer-center {
  text-align: center;
}
</style>

<script>
export default {
  name: 'FooterCopyright',
  data () {
    return {

    }
  }
}
</script>
