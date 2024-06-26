

const AddCoffee = () => {
    const handleAddCoffe = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(newCoffee);
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">Add Coffee</h2>
            <form onSubmit={handleAddCoffe}>
                {/* form name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">

                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Coffee Name"
                                className="input input-border w-full" />
                        </label>
                    </div>


                    <div className="form-control md:w-1/2 ml-4">

                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="quantity" placeholder="Available Quantity"
                                className="input input-border w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">

                        <label className="label">
                            <span className="label-text">Sufflier Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="supplier" placeholder="Supplier Name"
                                className="input input-border w-full" />
                        </label>
                    </div>


                    <div className="form-control md:w-1/2 ml-4">

                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="taste" placeholder="Available Quantity"
                                className="input input-border w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">

                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="category" placeholder="Category Name"
                                className="input input-border w-full" />
                        </label>
                    </div>


                    <div className="form-control md:w-1/2 ml-4">

                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="details" placeholder="Details"
                                className="input input-border w-full" />
                        </label>
                    </div>
                </div>
                {/* form photo url row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-full">

                        <label className="label">
                            <span className="label-text">photo url </span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="photo" placeholder="photo url "
                                className="input input-border w-full" />
                        </label>
                    </div>
                    <button className="">block</button>
                    <input type="submit" value="Add Coffee" className="btn btn-block" />

                </div>
            </form>
        </div>
    );
};

export default AddCoffee;