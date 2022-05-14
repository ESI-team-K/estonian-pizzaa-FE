import http from "@/http-axios";

class dataaxios {
    getMenu() {
        return http.get("/menu");
    }
    getAllOrders() {
        return http.get("/orderList");
    }
    
    confirmOrder(id) {
        return http.put('/order/' + id + '/confirm');
    }
    createOrder(menuItemArray) {
        return http.post('/order/create', menuItemArray);
    }
    
    async cancelOrder(id) {
        const [firstResponse, secondResponse] = await Promise.all([
            http.put('/order/' + id + '/cancel/'),
            http.put('/order/' + id + '/cancel/approve')
          ]);
        return [firstResponse, secondResponse]
    }
    
    async cancelAndRefundOrder(id) {
        const [firstResponse, secondResponse] = await Promise.all([
            http.put('/order/' + id + '/cancel/'),
            http.put('/order/' + id + '/cancel/approve')
          ]);
        return [firstResponse, secondResponse]
        // TODO: Also refund..?
    }

    deliveryOrder(id) {
        return http.post(`/order/${id}/delivery`);
    }
    updateDeliveryDispatched(id) {
        return http.post(`/order/${id}/outForDelivery`);
    }
    updateDeliveryDelivered(id) {
        return http.post(`/order/${id}/delivered`);
    }
    updateDeliveryRejected(id) {
        return http.post(`/order/${id}/rejectDelivery`);
    }

    getDelivery(id){
        return http.get(`/delivery/${id}`);  
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
}
export default new dataaxios();