export default (plugin) => {
    const originalSend = plugin.services.user.sendResetPasswordEmail;

    plugin.services.user.sendResetPasswordEmail = async (user, resetPasswordToken) => {
        // Lee el template ACTUAL desde la DB (Admin UI)
        const template = await strapi
            .db
            .query('plugin::users-permissions.email-template')
            .findOne({
                where: { code: 'reset_password' },
            });

        if (!template) {
            return originalSend(user, resetPasswordToken);
        }

        const resetPasswordUrl = `${strapi.config.get(
            'server.url'
        )}/reset-password?code=${resetPasswordToken}`;

        await strapi.plugin('email').service('email').send({
            to: user.email,
            subject: template.subject,
            html: template.html
                .replace('<%= URL %>', strapi.config.get('server.url'))
                .replace('<%= TOKEN %>', resetPasswordToken),
            text: template.text || '',
        });
    };

    return plugin;
};
