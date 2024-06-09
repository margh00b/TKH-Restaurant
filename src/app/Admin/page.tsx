const Admin = () => {
  return (
    <div className="flex justify-center p-10 mt-20">
      <form className="flex flex-col items-center p-10 border-2 border-gray-200 shadow-lg rounded-2xl">
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="border-b-2 p-2 outline-0"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border-b-2 p-2 outline-0"
          required
        />
        <button
          type="submit"
          className="bg-orange-500 text-white py-2 px-5 mt-5 rounded-lg hover:shadow-lg duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};
export default Admin;
