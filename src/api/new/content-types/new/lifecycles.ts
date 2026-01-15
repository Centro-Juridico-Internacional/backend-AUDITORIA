import slugify from "slugify";

export default {
  async beforeCreate(event: any) {
    const { data } = event.params;
    if (data.titulo && !data.slug) {
      data.slug = slugify(data.titulo, {
        lower: true,
        strict: true,
        locale: "es",
      });
    }
  },

  async beforeUpdate(event: any) {
    const { data } = event.params;
    // Si hay un nuevo título y queremos que el slug se actualice automáticamente
    if (data.titulo) {
      data.slug = slugify(data.titulo, {
        lower: true,
        strict: true,
        locale: "es",
      });
    }
  },
};
