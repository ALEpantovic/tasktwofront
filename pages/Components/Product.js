import React, { useEffect, useState } from "react";
import Link from "next/link";
const Product = ({product}) => {
  return (
    <div>
        <Link href={`/Product/${product.id}`} ><h2 className="bg-amber-300 text-center">{product.name}</h2></Link>
    </div>
  );
};

export default Product;