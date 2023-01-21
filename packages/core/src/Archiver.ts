// An archiver should implement this interface
type ThreadArchiveContext = {
    source: string;
}

export interface ThreadArchiver<Config extends Object = unknown> {
    init: (config: Config) => Promise<void>;
    archive: (context: ThreadArchiveContext) => Promise<void>;
}