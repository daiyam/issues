import { vi } from 'vitest'
import { fs } from '../mocks/fs.js';

vi.doMock('fs', () => ({
	default: fs
}));

vi.doMock('fs/promises', () => ({
	default: fs.promises
}));

const module = await import('../../src/basic.js');

vi.unmock('fs');
vi.unmock('fs/promises');

export default module
