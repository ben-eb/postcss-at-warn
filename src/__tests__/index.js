import test from 'ava';
import postcss from 'postcss';
import plugin from '..';

const snap = 'Oh, snap!';

function shouldWarn (t, input = snap) {
    const css = `@warn ${input};`;
    const warnings = postcss(plugin).process(css).warnings();
    t.is(warnings[0].text, snap);
}

test('should warn with double quotes', shouldWarn, `"${snap}"`);
test('should warn with single quotes', shouldWarn, `'${snap}'`);
test('should warn without quotes', shouldWarn);

test('should be quiet when silent is specified', t => {
    const css = `@warn ${snap}`;

    return postcss(plugin({silent: true})).process(css).then(result => {
        t.falsy(result.css);
        t.truthy(result.messages.length);
    });
});

test('should log a message to stdout', t => {
    const css = `@warn ${snap}`;

    return postcss(plugin).process(css).then(result => {
        t.falsy(result.css);
        t.truthy(result.messages.length);
    });
});
