import http from "@/http-axios";

class dataaxios {
    getMenu() {
        return http.get("/menu");
    }
    getAllOrders() {
        return http.get("/orderList");
    }
    getOrder(id) {
        return http.get("/order/" + id + "/");
    }
    confirmOrder(id) {
        return http.put('/order/' + id + '/confirm');
    }
    createOrder(menuItemArray) {
        return http.post('/order/create', menuItemArray);
    }

    sendCancelReq(id) {
        return http.put('/order/' + id + '/cancel/');
    }

    createDelivery(id, deliveryForm) {
        return http.post('/order/' + id + '/delivery/', deliveryForm);
    }

    payByCard(id, paymentForm) {
        return http.post('/api/payment/' + id + '/pay/card', paymentForm);
    }


    async cancelOrder(id) {
        const firstResponse = await http.put('/order/' + id + '/cancel/');
        const secondResponse = http.put('/order/' + id + '/cancel/approve');
        return [firstResponse, secondResponse]
    }
    
    async cancelAndRefundOrder(id) {
        const firstResponse = await http.put('/order/' + id + '/cancel/');
        const secondResponse = http.put('/order/' + id + '/cancel/approve');
        return [firstResponse, secondResponse]
        // TODO: Also refund..?
    }

    deliveryOrder(id) {
        return http.post(`/order/${id}/delivery`);
    }
    updateDeliveryDispatched(id) {
        return http.put(`/order/${id}/outForDelivery`);
    }
    updateDeliveryDelivered(id) {
        return http.put(`/order/${id}/delivered`);
    }
    updateDeliveryRejected(id) {
        return http.put(`/order/${id}/rejectDelivery`);
    }

    getDelivery(id){
        return http.get(`/delivery/${id}`);  
    }
    getDriverDeliveries(id){
        return http.get(`/deliveries/driver/${id}`);
    }
    getAllDeliveries() {
        return http.get("/deliveries");    
    }

    getAllNotifications() {
        return http.get("/notifications");    
    }
    getUserNotifications(id) {
        return http.get(`/notifications/user/${id}`);    
    }
    getDriver(id) {
        return http.get(`/api/drivers/${id}`);
    }
    updateDriverAvailable(id) {
        return http.put(`/api/driver/${id}/available`);
    }
    updateDriverBusy(id) {
        return http.put(`/api/driver/${id}/busy`);
    }

    createInvoice(cart) {
        return http.post('/api/payment/create', cart);
    }

    payByCash(id) {
        return http.put(`/api/payment/${id}/pay/cash`);
    }

    markReadyForDelivery(orderId) {
        return http.put(`/order/${orderId}/readyForDelivery`);
    }
}
export default new dataaxios();