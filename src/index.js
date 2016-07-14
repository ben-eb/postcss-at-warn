import {plugin} from 'postcss';
import reporter from 'postcss-reporter';

function formatMessage (text) {
    const last = text[text.length - 1];
    if (text[0] === '"' && last === '"' || text[0] === "'" && last === "'") {
        return text.slice(1, -1);
    }
    return text;
}

export default plugin('postcss-at-warn', ({silent = false} = {}) => {
    return (css, result) => {
        css.walkAtRules('warn', rule => {
            result.warn(formatMessage(rule.params));
            rule.remove();
        });

        if (!silent) {
            result.processor.use(reporter());
        }
    };
});
