import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL} from "../constants/productConstants";
import  axios from "axios";

const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST });
        const product = await axios.get('/api/products');
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: product.data })
    }
    catch (error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message })
    }
}

export { listProducts };