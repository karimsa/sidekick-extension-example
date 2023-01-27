import type { SidekickConfig } from '@karimsa/sidekick/config';

export const config: SidekickConfig = {
    defaultConfig: {
        environments: {},
        extensions: {}
    },
    extensions: [
        {
            id: 'hello-world',
            icon: 'history',
            name: 'Hello World',
            entryPoint: './hello.sidekick.tsx'
        },
    ]
};
