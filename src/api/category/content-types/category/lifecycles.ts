import slugify from "slugify";

export default {
  async beforeCreate(event: any) {
    const { data } = event.params;
    if (data.name && !data.slug) {
      data.slug = slugify(data.name, {
        lower: true,
        strict: true,
        locale: "es",
      });
    }
  },

  async beforeUpdate(event: any) {
    const { data } = event.params;
    if (data.name) {
      data.slug = slugify(data.name, {
        lower: true,
        strict: true,
        locale: "es",
      });
    }
  },
};
