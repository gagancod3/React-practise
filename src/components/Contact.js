const Contact = () => {
  return (
    <div>
      <h1 className=" font-bold p-2 m-2 text-2xl">Contact us</h1>
      <form>
        <input type="text" placeholder="name" className="border-blue-400 p-2 m-2" />
        <input type="text" placeholder="message" className="border-blue-400 p-2 m-2"/>
        <button className="border-blue-400 p-2 m-2 rounded-lg bg-slate-400">Submit</button>

      </form>
    </div>
  )
};

export default Contact;
