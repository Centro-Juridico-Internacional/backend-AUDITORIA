export default {
  register() {},

  async bootstrap({ strapi }) {
    /**
     * Limpia la cache interna de email templates
     * para asegurar que Strapi use lo editado en el Admin
     */
    try {
      const templates = await strapi.db
        .query("plugin::users-permissions.email-template")
        .findMany();

      for (const template of templates) {
        await strapi.db
          .query("plugin::users-permissions.email-template")
          .update({
            where: { id: template.id },
            data: { updatedAt: new Date() },
          });
      }
    } catch (err) {
      // Silencioso: no rompe el arranque
    }
  },
};
