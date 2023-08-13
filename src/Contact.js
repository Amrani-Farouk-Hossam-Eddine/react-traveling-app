const Contact = () => {
  return (
    <div className="max-w-[1140px] w-full px-4 py-16 mx-auto">
      <h2 className="text-center text-gray-700">Send us a message</h2>
      <p className="text-center text-gray-700 py-2">We're standing by!</p>
      <div className="grid sm:grid-cols-2 gap-4 py-8 w-full">
        <img
          src="https://images.unsplash.com/photo-1538964173425-93884d739596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
          alt=""
          className="w-full md:h-full object-cover max-h-[500px] h-[200px]"
        />

        <form>
          <div className="grid grid-cols-2">
            <input type="text" placeholder="First" className="border m-2 p-2" />
            <input type="text" placeholder="Last" className="border m-2 p-2" />

            <input type="text" placeholder="Email" className="border m-2 p-2" />
            <input type="text" placeholder="Phone" className="border m-2 p-2" />

            <input
              type="text"
              placeholder="Address"
              className="border m-2 p-2 col-span-2"
            />
            <textarea
              className="border m-2 p-2 col-span-2"
              cols="30"
              rows="10"
            ></textarea>
            <button className="col-span-2 m-2">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
