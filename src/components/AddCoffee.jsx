

const AddCoffee = () => {
    return (
      <form>
<h1 className="text-5xl text-gray-800 text-center mt-16 mb-2">Add New Coffee</h1>
<p  className="text-base text-gray-400 text-center">It is a long established fact that a reader will be distraceted <br></br>by the readable content of a page when looking at its layout.<br></br> The point of using Lorem Ipsum is that it has a more-or-less normal distribution<br></br> of letters, as opposed to using Content here.</p>
<div className="w-11/12 mx-auto px-10 bg-gray-200 border py-14 mt-16 m-16">
<div className="flex gap-6">
           <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text font-sans ">Name</span>
          </label>
          <input type="email" placeholder="Enter coffee name" className="font-sans  input input-bordered" required />
        </div>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text font-sans ">Chef</span>
          </label>
          <input type="email" placeholder="Enter coffee chef" className="font-sans  input input-bordered" required />
        </div>
        </div>

        <div className="flex gap-6">
           <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text font-sans ">Supplier</span>
          </label>
          <input type="email" placeholder="Enter coffee supplier" className="font-sans  input input-bordered" required />
        </div>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text font-sans ">Taste</span>
          </label>
          <input type="email" placeholder="Enter coffee taste" className="font-sans  input input-bordered" required />
        </div>
        </div>

        <div className="flex gap-6">
           <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text font-sans ">Category</span>
          </label>
          <input type="email" placeholder="Enter coffee category" className="font-sans  input input-bordered" required />
        </div>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text font-sans ">Details</span>
          </label>
          <input type="email" placeholder="Enter coffee details" className="font-sans  input input-bordered" required />
        </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-sans ">Photo</span>
          </label>
          <input type="email" placeholder="Enter photo URL" className="font-sans input input-bordered" required />
        </div>
        <button className="btn btn-block mt-7 bg-amber-500 border border-amber-800">Add Coffee</button>
        </div>
      </form>
    );
};

export default AddCoffee;