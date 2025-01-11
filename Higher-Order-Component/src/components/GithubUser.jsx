import useGithub from "../utils/useGithub";
import InfoBlock from "./InfoBlock";

const GithubUser = ({ username }) => {
  const { user, loading, error } = useGithub(username);

  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-lg max-w-md mx-auto">
      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error.message}</p>}
      {user && (
        <div>
          <div className="flex items-center mb-6">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-20 h-20 rounded-full shadow-md mr-4"
            />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                {user.name}
              </h2>
              <p className="text-sm text-gray-500">@{user.login}</p>
            </div>
          </div>
          <div className="space-y-4">
            <InfoBlock label="Bio" value={user.bio || "NA"} />
            <InfoBlock label="Location" value={user.location || "NA"} />
            <InfoBlock
              label="Blog or Site"
              value={
                user.blog ? (
                  <a
                    href={user.blog}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {user.blog}
                  </a>
                ) : (
                  "NA"
                )
              }
            />
            <InfoBlock label="Public Repos" value={user.public_repos || "NA"} />
            <InfoBlock label="Followers" value={user.followers || "NA"} />
            <InfoBlock label="Following" value={user.following || "NA"} />
          </div>
        </div>
      )}
    </div>
  );
};

export default GithubUser;
