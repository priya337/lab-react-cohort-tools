import { Link } from "react-router-dom"; // Make sure this import is present

function UserProfilePage() {
  const userProfile = {
    image: "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-cohort-tools-routing/profile-1.png",
    name: "Jane Doe",
    email: "janed@example.com",
    role: "Lead Teacher",
  };

  return (
    <div className="UserProfilePage bg-gray-100 py-6 px-4 border-2 border-violet-500 m-2">
      <h1 className="text-xl font-semibold mb-4">User Profile Page</h1>
      <div className="bg-white p-8 rounded-lg shadow-md mb-6 flex flex-col items-center">
        {userProfile && (
          <>
            <img
              src={userProfile.image}
              alt="profile-photo"
              className="rounded-full w-32 h-32 object-cover border-2 border-gray-300 mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{userProfile.name}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 mb-4 border-b pb-4 w-full">
              <p className="text-left">
                <strong>Email:</strong> {userProfile.email}
              </p>
              <p className="text-left">
                <strong>Role:</strong> {userProfile.role}
              </p>
            </div>
          </>
        )}

        {/* Back button as a Link */}
        <Link
          to="/"
          className="text-white px-4 py-2 rounded bg-green-500 hover:bg-green-600 transition duration-300 ease-in-out"
        >
          Back
        </Link>
      </div>
    </div>
  );
}

export default UserProfilePage;
