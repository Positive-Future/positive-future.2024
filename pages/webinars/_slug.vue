<template>
  <v-row justify="center">
    <v-col xs="12" sm="11" md="8" lg="7" xl="6" class="ma-3">
      <v-breadcrumbs
        nuxt
        class="ml-n3"
        :items="[
          {
            text: $t('webinars'),
            disabled: false,
            href: localePath('/webinars'),
          },
          {
            text: item.title,
            disabled: true,
            href: 'breadcrumbs_link_1',
          },
        ]"
      >
        <template #divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>

      <WebinarView :item="item" />
    </v-col>
  </v-row>
</template>
<script>
export default {
  async asyncData({ app, $content, params }) {
    const item = await $content(
      'webinars/' + app.i18n.locale,
      params.slug
    ).fetch()
    return { item }
  },
  data() {
    return {}
  },
  created() {},
}
</script>
