import slugify from "slugify";

export default {
  async beforeCreate(event: any) {
    const { data } = event.params;
    if (data.UrlEvento && !data.slug) {
      data.slug = slugify(data.UrlEvento, {
        lower: true,
        strict: true,
        locale: "es",
      });
    }
  },

  async beforeUpdate(event: any) {
    const { data } = event.params;
    if (data.UrlEvento) {
      data.slug = slugify(data.UrlEvento, {
        lower: true,
        strict: true,
        locale: "es",
      });
    }
  },
};
