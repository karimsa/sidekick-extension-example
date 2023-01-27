import React from "react";
import { useQuery } from "@karimsa/sidekick/extension";
import * as fs from "fs";

async function readSelf({ filename }: { filename: string }) {
	// This is possible because all sidekick extension functions will run from your project's
	// root as its working directory.
	return fs.promises.readFile(filename, "utf-8");
}

export function Page() {
	const { data, error } = useQuery(readSelf, {
		filename: "./hello.sidekick.tsx",
	});

	return (
		<>
			{error && <p>Error: {error.message}</p>}
			{data && (
				<pre>
					<code>{data}</code>
				</pre>
			)}
		</>
	);
}
