import { beforeEach, expect, it } from 'vitest'
import { vol } from 'memfs';
import { fixtures } from './utils/fixtures.js';
import commands from './rewires/basic.js';

const packageFxt = fixtures('package');

beforeEach(async () => {
	vol.reset();
});

it('template', async () => {
	vol.fromJSON({
		'/package.json': packageFxt.template.input,
	}, '/');

	// @ts-ignore
	await commands.transform('/package.json');

	expect(vol.readFileSync('/package.json', 'utf8')).to.eql(packageFxt.template.output);
});
