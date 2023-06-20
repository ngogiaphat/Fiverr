import {Router} from 'express';
import {verifyToken} from '../middlewares/AuthMiddleware.js';
import {createOrder, confirmOrder, getBuyerOrders, getSellerOrders} from '../controllers/OrdersControllers.js';
export const orderRoutes = Router();
orderRoutes.post('/create', verifyToken, createOrder);
orderRoutes.post('/success', verifyToken, confirmOrder);
orderRoutes.post('/get-buyer-orders', verifyToken, getBuyerOrders);
orderRoutes.post('/get-seller-orders', verifyToken, getSellerOrders);