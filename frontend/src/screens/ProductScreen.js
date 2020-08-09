import React from 'react';
import data from '../../src/data'
import { Link } from 'react-router-dom';

function ProductScreen(props) {
    const product = data.products.find(x => x._id === parseInt(props.match.params.id));
    return (
        <>
            <div>
                <Link to='/' className='back-to-result'>Back to results</Link>
            </div>
            <div className='details'>
                <div className='details-image'>
                    <img src={product.images} alt='product image' />
                </div>
                <div className='details-info'>
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            {product.rating} Stars ({product.numReviews} Reviews)
                        </li>
                        <li>
                            ${product.price}
                        </li>
                        <li>Description:
                            <div>
                                {product.description}
                            </div>
                        </li>
                    </ul>
                </div>

                <div className='details-action'>
                    <ul>
                        <li>
                            Price:${product.price}
                        </li>
                        <li>
                            Status:{product.status}
                        </li>
                        <li>
                            Qty:<select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </select>
                        </li>
                        <li>
                            <button>Add to Cart</button>
                        </li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default ProductScreen;