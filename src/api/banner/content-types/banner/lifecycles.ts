import slugify from "slugify";

export default {
  async beforeCreate(event: any) {
    const { data } = event.params;
    if (data.nombre && !data.slug) {
      data.slug = slugify(data.nombre, {
        lower: true,
        strict: true,
        locale: "es",
      });
    }
  },

  async beforeUpdate(event: any) {
    const { data } = event.params;
    if (data.nombre) {
      data.slug = slugify(data.nombre, {
        lower: true,
        strict: true,
        locale: "es",
      });
    }
  },
};
