import { Link } from "react-router-dom";

export const NewProduct = ({ newProduct }) => {
  return (
    <>
      <section className="d-flex flex-column align-items-center">
        <div className="mb-2 containerss ">
          <h2 className="mt-5  ml-5 fs-5 font-weight-bold text-uppercase  text-start">
            New PRODUCTS
          </h2>
          <p className="ml-5 text-start">
            Preorder now to receive exclusive deals & gifts
          </p>
        </div>

        <div className="d-flex flex-sm-row flex-column justify-content-between containerss">
          {newProduct.map((product) => (
            <Link key={product?.id}
              className="text-decoration-none m-1 text-black"
              to={`/product/${product?.id}`}
            >
              <img className="w-100" src={product?.thumbnails[0]} alt="" />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};
