import { useState } from "react";
import GithubUser from "./GithubUser";

const FindUser = () => {
  const [userName, setUserName] = useState("");

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-96">
      <h1 className="text-2xl font-semibold mb-4 text-center text-gray-800">
        Find User
      </h1>

      <form>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            onChange={(e) => setUserName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </form>

      <div className="result mt-6 text-center">
        {userName ? (
          <GithubUser username={userName} />
        ) : (
          <p className="text-sm text-gray-500 italic">
            Please initiate a search!
          </p>
        )}
      </div>
    </div>
  );
};

export default FindUser;
