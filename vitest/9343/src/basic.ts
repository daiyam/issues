import fs from 'fs';
import fse from 'fs-extra';
import gfs from 'graceful-fs';

export async function transform(filePath: string): Promise<void> {
	fs.readFile(filePath, 'utf8', (error, data) => console.log(error ?? data));
	gfs.readFile(filePath, 'utf8', (error, data) => console.log(error ?? data));

	const incomingPackage = await fse.readJSON(filePath) as { version: string };

	incomingPackage.version = '1.0.0';

	await fse.writeJson(filePath, incomingPackage);
}
