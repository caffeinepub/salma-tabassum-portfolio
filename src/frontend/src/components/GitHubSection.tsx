import { Skeleton } from "@/components/ui/skeleton";
import { BookOpen, GitFork, Github, Star, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { useActor } from "../hooks/useActor";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface GitHubUser {
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  updated_at: string;
}

export function GitHubSection() {
  const sectionRef = useScrollAnimation();
  const { actor, isFetching } = useActor();
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!actor || isFetching) return;
    async function fetchData() {
      if (!actor) return;
      try {
        const [userJson, reposJson] = await Promise.all([
          actor.getGitHubUser(),
          actor.getGitHubRepos(),
        ]);
        setUser(JSON.parse(userJson));
        const allRepos: GitHubRepo[] = JSON.parse(reposJson);
        const sorted = [...allRepos].sort(
          (a, b) =>
            b.stargazers_count - a.stargazers_count ||
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
        );
        setRepos(sorted.slice(0, 6));
      } catch {
        setError("Could not load GitHub data.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [actor, isFetching]);

  const languageCount: Record<string, number> = {};
  for (const r of repos) {
    if (r.language)
      languageCount[r.language] = (languageCount[r.language] || 0) + 1;
  }
  const totalLangRepos = Object.values(languageCount).reduce(
    (a, b) => a + b,
    0,
  );

  const langColors: Record<string, string> = {
    C: "#555599",
    Java: "#f89820",
    Python: "#3572A5",
    JavaScript: "#f7df1e",
    TypeScript: "#3178c6",
    HTML: "#e34c26",
    CSS: "#563d7c",
  };

  const isLoading = loading || isFetching;

  return (
    <section
      id="github"
      ref={sectionRef as React.RefObject<HTMLElement>}
      data-ocid="github.section"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <p className="font-mono text-neon-blue text-sm mb-2">
          {"# github_activity"}
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold gradient-text">
          GitHub Activity
        </h2>
      </div>

      {isLoading && (
        <div data-ocid="github.loading_state" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Skeleton className="h-40 rounded-2xl" />
            <Skeleton className="lg:col-span-2 h-40 rounded-2xl" />
          </div>
          <Skeleton className="h-40 rounded-2xl" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="h-24 rounded-xl" />
            ))}
          </div>
        </div>
      )}

      {!isLoading && error && (
        <div
          data-ocid="github.error_state"
          className="glass-card rounded-2xl p-8 text-center text-muted-foreground"
        >
          <Github className="w-12 h-12 mx-auto mb-3 text-neon-purple opacity-50" />
          <p className="font-mono text-sm">{error}</p>
          <p className="text-xs mt-2">Check out the profile directly:</p>
          <a
            href="https://github.com/Mahi-tech-c"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neon-blue hover:underline font-mono text-sm"
          >
            github.com/Mahi-tech-c
          </a>
        </div>
      )}

      {!isLoading && !error && user && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="glass-card rounded-2xl p-6 flex flex-col items-center text-center gap-4">
              <img
                src={user.avatar_url}
                alt={user.name || user.login}
                className="w-20 h-20 rounded-full border-2 border-neon-blue/50 neon-glow-blue"
              />
              <div>
                <h3 className="font-heading text-lg font-bold gradient-text">
                  {user.name || user.login}
                </h3>
                <p className="font-mono text-xs text-neon-blue">
                  @{user.login}
                </p>
                {user.bio && (
                  <p className="text-xs text-muted-foreground mt-2">
                    {user.bio}
                  </p>
                )}
              </div>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-neon-blue hover:text-neon-purple transition-colors"
              >
                <Github className="w-4 h-4" />
                View Profile
              </a>
            </div>

            <div className="lg:col-span-2 glass-card rounded-2xl p-6">
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  {
                    icon: BookOpen,
                    label: "Repositories",
                    value: user.public_repos,
                  },
                  { icon: Users, label: "Followers", value: user.followers },
                  { icon: Users, label: "Following", value: user.following },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="text-center">
                    <Icon className="w-5 h-5 text-neon-blue mx-auto mb-1" />
                    <div className="font-heading text-2xl font-bold gradient-text">
                      {value}
                    </div>
                    <div className="font-mono text-xs text-muted-foreground">
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              {totalLangRepos > 0 && (
                <div>
                  <p className="font-mono text-xs text-neon-purple mb-3">
                    {"// language_distribution"}
                  </p>
                  <div className="flex h-3 rounded-full overflow-hidden gap-0.5">
                    {Object.entries(languageCount).map(([lang, count]) => (
                      <div
                        key={lang}
                        title={`${lang}: ${Math.round((count / totalLangRepos) * 100)}%`}
                        style={{
                          width: `${(count / totalLangRepos) * 100}%`,
                          backgroundColor: langColors[lang] || "#888",
                        }}
                        className="h-full rounded-sm"
                      />
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 mt-2">
                    {Object.entries(languageCount).map(([lang]) => (
                      <div
                        key={lang}
                        className="flex items-center gap-1.5 text-xs text-muted-foreground"
                      >
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{
                            backgroundColor: langColors[lang] || "#888",
                          }}
                        />
                        {lang}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <p className="font-mono text-xs text-neon-blue mb-4">
              {"// contribution_graph"}
            </p>
            <div className="overflow-x-auto">
              <img
                src="https://ghchart.rshah.org/00d4ff/Mahi-tech-c"
                alt="GitHub contribution graph"
                className="w-full max-w-2xl mx-auto block rounded"
                style={{ filter: "brightness(1.1)" }}
              />
            </div>
          </div>

          {repos.length > 0 && (
            <div>
              <p className="font-mono text-xs text-neon-purple mb-4">
                {"// top_repositories"}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {repos.map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card rounded-xl p-4 hover:neon-glow-blue transition-all duration-300 group block"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-mono text-sm font-bold text-foreground group-hover:text-neon-blue transition-colors truncate max-w-[160px]">
                        {repo.name}
                      </h4>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Star className="w-3 h-3" />
                        {repo.stargazers_count}
                      </div>
                    </div>
                    {repo.description && (
                      <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                        {repo.description}
                      </p>
                    )}
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      {repo.language && (
                        <div className="flex items-center gap-1">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{
                              backgroundColor:
                                langColors[repo.language] || "#888",
                            }}
                          />
                          {repo.language}
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <GitFork className="w-3 h-3" />
                        {repo.forks_count}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
