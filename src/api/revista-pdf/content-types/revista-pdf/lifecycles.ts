import slugify from "slugify";

export default {
  async beforeCreate(event: any) {
    const { data } = event.params;
    if (data.Titulo && !data.Slug) {
      data.Slug = slugify(data.Titulo, {
        lower: true,
        strict: true,
        locale: "es",
      });
    }
  },

  async beforeUpdate(event: any) {
    const { data } = event.params;
    if (data.Titulo) {
      data.Slug = slugify(data.Titulo, {
        lower: true,
        strict: true,
        locale: "es",
      });
    }
  },
};
